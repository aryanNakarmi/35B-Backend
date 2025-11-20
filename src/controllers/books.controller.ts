import {Request, Response} from 'express';

export class BookController{
    getBooks = (req: Request, res: Response)=>{
        const books = [
        {id: "B-1", title: "1984"},
        {id: "B-2", title: "To Kill a Mocking Bird",date: "2025-12-10"}
    ];
    res.status(200).json(books);

    };
}