import {Request, Response} from 'express';

export type Book = {
    id: string,
    title: string,
    date?: string
};

export const books = [
        {id: "B-1", title: "1984"},
        {id: "B-2", title: "To Kill a Mocking Bird",date: "2025-12-10"}
    ];

export class BookController{
    getBooks = (req: Request, res: Response)=>{
       
    res.status(200).json(books);

    };
}