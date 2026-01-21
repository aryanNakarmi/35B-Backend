import mongoose, { Document, Schema } from "mongoose";
import { UserType } from "../types/user.type";

const UserSchema: Schema = new Schema<UserType>(
    {

        email: { type :String, required: true, unique: true },
        password: { type :String, required: true},
        username: { type :String, required: true, unique: true},
        firstName: { type :String},
        lastName: { type :String },
        role: {type:String, enum:["user","admin"], default: "user"},
        imageUrl: {type: String, required: false}
    },
        {
            timestamps: true, //auto createdAt and updatedAt
        }
    );

export interface IUser extends UserType, Document{
    //combine Usetype and Document
    //mongo related attributes/ custom attributes
    _id: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export const UserModel = mongoose.model<IUser>("User",UserSchema);

//usermodel us the moongoose model for User Collection
//db.users in mongodb
