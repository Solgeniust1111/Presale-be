import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";


export interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<any> => {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded: any = jwt.verify(token!, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Something went wrong with the auth middleware", error);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
