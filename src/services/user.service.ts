import { CreateUserDTO, LoginUserDTO } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user.repositories";
import bcryptjs from "bcryptjs";
//custom error
import { HttpError } from "../errors/http-error";



let userRepository = new UserRepository();

export class UserService{
    async createUser(data: CreateUserDTO){
        //business logic before creating user
        const emailCheck = await userRepository.getUserByEmail(data.email);
        if(emailCheck){
            throw new HttpError(403, "Email already in use");
        }
        const usernameCheck = await userRepository.getUserByUsername(data.username);
        if(usernameCheck){
            throw new HttpError(403, "Username already in use");
        }
        //hash password
        const hashedPassword = await bcryptjs.hash(data.password,10); //10- complexity
        data.password = hashedPassword;
        //create user
        const newUser = await userRepository.createUser(data);
        return newUser;
        
    }

    async loginUser(data: LoginUserDTO){

        const user = await userRepository.getUserByEmail(data.email);
        if(!user){
            throw new HttpError(404, "User not found");
        }
        //compare password

        const validPassword = await bcryptjs.compare(data.password, user.password);

        //plaintext, hashed
        if(!validPassword){
            throw new HttpError(401, "Invalid credentails");
        }
        //generate jwt
    }
}