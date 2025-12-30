import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { UserRepository } from "../repositories/user.repositories";
import { NextFunction, Request, Response } from "express";


const userRepository = new UserRepository();

export const authorizedMiddleware = 
    async (req: Request, res: Response, next: NextFunction) => {
    if(req.headers && req.headers.authorization){
        return next();
    }
    return res.status(401).json({ success: false,message: "Unauthorized" });
}