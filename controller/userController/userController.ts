import { Request, Response } from "express";
import User from "../../model/userModel/userModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { JWT_SECRET } from "../../config";
import { Keypair, PublicKey } from "@solana/web3.js";
import { program, programId } from "../../contract/config";

import { publicKey } from "@coral-xyz/borsh";
import { getPresalePDA, getUserInfoPDA } from "../../utils";
import { USER_SEED } from "../../config/config";

dotenv.config();

type ReferralResult = {
    count: number;
    addresses: { walletAddress: string; quoteAmount: number; refer: PublicKey | null, level: number }[];
};


const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "7d" });
};

// User Signup
export const register = async (req: Request, res: Response): Promise<any> => {
    console.log("req body => ", req.body)
    const { walletAddress, refer } = req.body;
    try {
        if (!walletAddress || walletAddress.trim() === "") return res.status(500).json({ msg: "Please provide a wallet address" });
        const user = await User.findOne({ walletAddress: walletAddress });
        if (user) {
            const payload = {
                id: user._id
            }
            const token = jwt.sign(payload, JWT_SECRET);
            res.json({ token: token, user: user, isExist: true });
        } else {
            const newUser = new User({
                walletAddress: walletAddress,
                refer: refer
            });
            const newuser = await newUser.save();
            console.log("🚀 ~ UserRouter.post ~ newuser:", newuser)

            const payload = {
                id: newuser._id
            }
            const token = jwt.sign(payload, JWT_SECRET);

            res.json({ token: token, user: newuser, isExist: false })
        }
    } catch (error) {
        console.log("registering error => ", error);
        res.status(500).json({ err: error })
    }
};

// User Login
// export const login = async (req: Request, res: Response): Promise<any> => {
//     const { refer, walletAddress } = req.body;
//     try {
//         const user = await User.findOne({ refer });
//         if (!user || !(user.refer == refer)) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }
//         res.status(200).json({ message: "Login successful", token: generateToken((user.id)) });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error" });
//     }
// };

export const getReferInfo = async (req: Request, res: Response): Promise<any> => {
    const { walletAddress } = req.body;
    try {
        let bonus = 0
        const result = await getRefers(walletAddress)
        const [presaleInfoPda] = await getPresalePDA()
        const presaleInfoPdaData = await program.account.presaleInfo.fetch(presaleInfoPda)

        for (let i = 0; i < result.addresses.length; i++) {
            const walletAdd = new PublicKey(result.addresses[i].walletAddress);
            const level = result.addresses[i].level

            const userInfoPda = await getUserInfoPDA(walletAdd)
            const userInfoPdaData = await program.account.userInfo.fetch(userInfoPda)

            result.addresses[i].quoteAmount = Number(userInfoPdaData.buyQuoteAmount)
            result.addresses[i].refer = (userInfoPdaData.referer)
            if (level == 3) {
                bonus += Number(userInfoPdaData.buyQuoteAmount) * 30 / 100
            } else if (level == 2) {
                bonus += Number(userInfoPdaData.buyQuoteAmount) * 10 / 100
            }
            else if (level == 1) {
                bonus += Number(userInfoPdaData.buyQuoteAmount) * 5 / 100
            }
            else {
                bonus += 0
            }
        }
        presaleInfoPdaData.presaleSolAmount
        res.status(200).json({ result: result, bonus: bonus, presaleInfo: presaleInfoPdaData })
    }
    catch (error) {
        console.log("getRefersError => ", error);
        res.status(500).json({ err: error })
    }
}
const getRefers = async (data: string, level = 1, result: ReferralResult = { count: 0, addresses: [] }) => {
    const users = await User.find({ refer: data });

    if (!users || users.length === 0) return result;

    users.forEach(async (user) => {
        result.count++;
        result.addresses.push({ walletAddress: user.walletAddress, quoteAmount: 0, refer: null, level })
        await getRefers(user.walletAddress, level + 1, result);
    });

    return result;
};