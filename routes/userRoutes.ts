import { Request, Response, Router } from "express";
import jwt, { sign } from "jsonwebtoken";
import { AuthRequest } from "../middleware";
import { JWT_SECRET } from "../config";
import User from "../model/userModel/userModel";
import { authMiddleware } from "../middleware";
import { login, register } from "../controller/userController/userController";


// Create a new instance of the Express Router
const UserRouter = Router();

// @route    POST api/users/register
// @desc     Register user
// @access   Public
UserRouter.post("/register", register);
UserRouter.post("/login", login);

export default UserRouter;
