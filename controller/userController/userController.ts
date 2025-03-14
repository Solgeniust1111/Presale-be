import { Request, Response } from "express";
import User from "../../model/userModel/userModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "7d" });
};

// User Signup
export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const user = await User.create({ username, email, password });
        res.status(201).json({ message: "User registered", token: generateToken(user.email) });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// // User Login
// export const login = async (req: Request, res: Response) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user || !(await user.comparePassword(password))) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }

//         res.status(200).json({ message: "Login successful", token: generateToken(user._id) });
//     } catch (error) {
//         res.status(500).json({ message: "Server Error" });
//     }
// };
