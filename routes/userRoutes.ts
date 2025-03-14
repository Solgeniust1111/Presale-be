import { Request, Response, Router } from "express";
import jwt, { sign } from "jsonwebtoken";
import { AuthRequest } from "../middleware";
import { JWT_SECRET } from "../config";
import User from "../model/userModel/userModel";
import { authMiddleware } from "../middleware";


// Create a new instance of the Express Router
const UserRouter = Router();

// @route    POST api/users/register
// @desc     Register user
// @access   Public
UserRouter.post("/register", authMiddleware, async (req: Request, res: Response) => {
    const { walletAddress } = req.body;
    try {
        if (!walletAddress || walletAddress.trim() === "") return res.status(500).json({ msg: "Please provide a wallet address" });
        const user = await User.findOne({ walletAddress: walletAddress });
        if (user) {
            const payload = {
                walletAddress: user.walletAddress,
                id: user._id
            }
            const token = jwt.sign(payload, JWT_SECRET);
            return res.json({ token: token, user: user });
        }

        const newUser = new User({
            walletAddress: walletAddress
        });

        const newuser = await newUser.save();
        console.log("🚀 ~ UserRouter.post ~ newuser:", newuser)

        const payload = {
            walletAddress: newuser.walletAddress,
            id: newuser._id
        }
        const token = jwt.sign(payload, JWT_SECRET);

        return res.json({ token: token, user: newuser })
    } catch (error) {
        console.log("registering error => ", error);
        return res.status(500).json({ err: error })
    }
});

// @route    POST api/users/update
// @desc     Update user info
// @access   Public
UserRouter.post("/update", authMiddleware, async (req: AuthRequest, res: Response) => {
    const { walletAddress, username, about, name, socials } = req.body;

    try {
        // Find the user by walletAddress
        const user = await User.findOne({ walletAddress });
        if (!user) return res.status(500).json({ err: "This user does not exist!" });

        // Check if the new username is already taken by another user
        if (username) {
            const existingUser = await User.findOne({ username });
            if (existingUser && existingUser.walletAddress !== walletAddress) {
                return res.status(400).json({ err: "Username is already taken!" });
            }
        }

        // Update the user's information
        const updateUser = await User.findOneAndUpdate(
            { walletAddress },
            { username, name, about, socials },
            { new: true }
        );

        res.json({ user: updateUser });

    } catch (error) {
        console.log("updating user error => ", error);
        res.status(500).json({ err: error });
    }
});

// @route    POST api/users/update
// @desc     Update user info
// @access   Public
UserRouter.post("/update/avatar", authMiddleware, async (req: AuthRequest, res: Response, next: any) => {
    const { walletAddress, avatar } = req.body;

    try {
        const user = await User.findOne({ walletAddress });
        if (!user) return res.status(500).json({ err: "This user does not exist!" });
        const updateUser = await User.findOneAndUpdate({ walletAddress }, { avatar }, { new: true });

        console.log("🚀 ~ UserRouter.post ~ updateUser:", updateUser)
        res.json({ user: updateUser });

    } catch (error) {
        console.log("updating user error => ", error);
        res.status(500).json({ err: error })
    }
});

// @route    GET api/users/update
// @desc     Update user info
// @access   Public
UserRouter.get("/", async (req: Request, res: Response) => {
    try {
        const user = req.params.user;
        const userTokenList = await User.find({ walletAddress: user }, { totkens: 1 });

        console.log("🚀 ~ UserRouter.get ~ userTokenList:", userTokenList)
    } catch (error) {
        res.status(500).json({ err: error })
    }
})

export default UserRouter;
