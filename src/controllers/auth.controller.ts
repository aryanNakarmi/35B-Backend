import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { CreateUserDTO } from "../dtos/user.dto";
import z from "zod";

let userService = new UserService();

export class AuthController{
    async register(req: Request, res: Response){
        try{
            //validate request body
            const parsedData = CreateUserDTO.safeParse(req.body);
            if(!parsedData.success){
                return res.status(400).json(
                    {success: false, errors: z.prettifyError(parsedData.error)}
                )
            }
            const userData: CreateUserDTO = parsedData.data;
            const newUser = await userService.createUser(userData);
            return res.status(201).json(
                {success:true, message:"User Created", data:newUser}
            );
        }catch(error:Error | any){ //exception handling
            return res.status(500).json(
                {success: false, message: error.message || "Internal Server Error"}
            )

        }
    }
}