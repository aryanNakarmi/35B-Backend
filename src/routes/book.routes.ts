import {Router, Request, Response } from "express";


const bookController = new BookController();
const router: Router = Router();


router.get('/',bookController.getBooks);
export default router;