import { IUser, UserModel } from "../models/user.model";

export interface IUserRepository{
    createUser(userData: Partial<IUser>):Promise<IUser>;
    getUserByEmail(email:String): Promise<IUser | null>;
    getUserByUsername(username: String):Promise<IUser| null>;
}
//mongoDb implementaion of UserRepository
export class UserRepository implements IUserRepository{
    async createUser(userData: Partial<IUser>): Promise<IUser>{
        const user =new UserModel(userData);
        return await user.save();
    }
    async getUserByEmail(email: String): Promise<IUser | null> {
        const user = await UserModel.findOne({email:email});
        return user;
    }
    async getUserByUsername(username: String): Promise<IUser | null> {
        const user = await UserModel.findOne({username: username});
        return user;
    }

}