import {Router, Request, Response } from "express";
import { BookController } from "../controllers/books.controller";


const bookController = new BookController();
const router: Router = Router();

router.get('/',bookController.getBooks);

router.get('/:bookid',bookController.getBookById);


//make a router that hanldes GET request that takes bookId
// /:bookid and calls bookController.getBookById

export default router;