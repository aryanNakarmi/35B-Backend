import {Request, Response} from 'express';

export type Book = {
    id: string,
    title: string,
    date?: string
};

export const book:Book[] = [
        {id: "B-1", title: "1984"},
        {id: "B-2", title: "To Kill a Mocking Bird",date: "2025-12-10"}
    ];

export class BookController{
    createBook = (req:Request, res: Response)=>{ };
    getBooks = (req: Request, res: Response)=>{
        const return_book: Book[] = book;
       
    res.status(200).json(book);

    };
}