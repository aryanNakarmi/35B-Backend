import dotenv from "dotenv";
dotenv.config();

export const PORT: number= process.env.PORT? parseInt(process.env.PORT): 3000;
export const MONGODB_URI: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/defaultdb';

//application level constants, with fallbacks
//if .env variable are not set

export const JWT_SECRET: string = process.env.JWT_SECRET || 'default'
