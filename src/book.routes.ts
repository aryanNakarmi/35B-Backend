import {Router, Request, Response } from "express";

const router: Router = Router();


router.get('/api/books/',(req:Request, res:Response)=>{
    const books = [
        {id: "B-1", title: "1984"},
        {id: "B-2", title: "To Kill a Mocking Bird",date: "2025-12-10"}
    ];
    res.status(200).json(books);
});

export default router;