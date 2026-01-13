import express, { Application, Request, Response} from 'express';
import bodyParser from 'body-parser';

import { connectDatabase } from './database/mongodb';
import { PORT } from './config';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
//can use .env variable below this
console.log(process.env.PORT);

const app: Application = express();
let corsOption = {
    origin: ["http://localhost:3000", "http://localhost:3005"],
    // which domain can access your backend server
    // add frontend domain in origin
}
//origin: "*", //allow all domain to access your backend serveer
app.use(cors(corsOption));  //implementt cors middleware

//const PORT: number = 3000;

app.use(bodyParser.json());

import bookRoutes from "./routes/book.route";
import authRoutes from "./routes/auth.route";
import authUserRouter from "./routes/admin/user.route";


app.use("/api/books",bookRoutes);
app.use("/api/auth",authRoutes);
app.use('/api/admin/users',authUserRouter);


app.get('/', (req:Request, res:Response) =>{
    res.send('Hello, World!');
});

async function startServer() {
 await connectDatabase();
 
 app.listen(PORT,() => {
     console.log(`Server :http://localhost:${PORT}`);
 }
);
}
startServer();