import { Request, Response } from "express";
import User from "../../model/userModel/userModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { JWT_SECRET } from "../../config";
import { Keypair } from "@solana/web3.js";

dotenv.config();

const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "7d" });
};

// User Signup
export const register = async (req: Request, res: Response): Promise<any> => {
    const { walletAddress, name, email, password } = req.body;
    try {
        if (!email || email.trim() === "") return res.status(500).json({ msg: "Please provide a wallet address" });
        const user = await User.findOne({ email: email });
        if (user) {
            const payload = {
                email: user.email,
                id: user._id
            }
            const token = jwt.sign(payload, JWT_SECRET);
            res.json({ token: token, user: user });
        }
        const refer = Keypair.generate().publicKey
        const newUser = new User({
            walletAddress: walletAddress,
            name: name,
            email: email,
            password: password,
            refer: refer
        });

        const newuser = await newUser.save();
        console.log("🚀 ~ UserRouter.post ~ newuser:", newuser)

        const payload = {
            walletAddress: newuser.walletAddress,
            id: newuser._id
        }
        const token = jwt.sign(payload, JWT_SECRET);

        res.json({ token: token, user: newuser })
    } catch (error) {
        console.log("registering error => ", error);
        res.status(500).json({ err: error })
    }
};

// User Login
export const login = async (req: Request, res: Response): Promise<any> => {
    const { refer, walletAddress } = req.body;
    try {
        const user = await User.findOne({ refer });
        if (!user || !(user.refer == refer)) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", token: generateToken((user.id)) });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};
