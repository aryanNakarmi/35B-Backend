import { CreateUserDTO } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user.repositories";

let userRepository = new UserRepository();

export class UserService{
    async createUser(data: CreateUserDTO){
        //business logic before creating user
        const emailCheck = await userRepository.getUserByEmail(data.email);
        if(emailCheck){
            throw new Error("Email already in use");
        }
        const usernameCheck = await userRepository.getUserByUsername(data.username);
        if(usernameCheck){
            throw new Error("Username already in use");
        }
        //create user
        const newUser = await userRepository.createUser(data);
        return newUser;
        
    }
}