import { CreateUserDTO } from "../../dtos/user.dto";
import { HttpError } from "../../errors/http-error";
import { UserRepository } from "../../repositories/user.repositories";

let userRepository = new UserRepository();

export class AdminUserService{
    async createUser(data: CreateUserDTO){
        //same as src/services/user.service.ts
    }
    async getAllUser(){
        const users = await userRepository.getAllUsers();
        //transforation or filtering locic can be added here
        return users;
    }
    async getOneUser(id: string){
        const user= await userRepository.getUserById(id);
        if(!user){
            throw new HttpError(404,"User not found");
        }
        return user;
    }
    
}