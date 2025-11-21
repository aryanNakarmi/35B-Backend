import {Request, Response} from 'express';
import {z} from 'zod';
import { Book } from '../types/book.type';
import { CreateBookDTO } from '../dtos/book.dto';
import { book } from '../repositories/book.repositories';
import { BookService } from '../services/book.service';



// export type Book = {
//     id: string,
//     title: string,
//     date?: string
// };

const bookService = BookService;

export class BookController{
    createBook = (req:Request, res: Response)=>{ 
        const validation = CreateBookDTO.safeParse(req.body);
        if(!validation.success){
            return res.status(400).json({errors: validation.error});
        }
        const {id, title} =validation.data; 
        // const {id, title} =req.body; //destructuring
        //const id: string = req.body.id;
        // if(!id){
        //     return res.status(400).json({message: "Book ID is required"});
        // }
    
        // if(!title){
        //     return res.status(400).json({message: "Book ID is title"});
        // }
        const checkBook = book.find(elem => elem.id === id);
        if(checkBook){
            return res.status(409).json({message: "Book ID already  exists"});
        }
        const newBook: Book ={id, title};
        //same as {id:id, title: title} , if key and variable nam are same
        book.push(newBook);
        return res.status(201).json(newBook);
    };
    getBooks = (req: Request, res: Response)=>{
        const return_book: Book[] = book;
       
    res.status(200).json(book);

    };
}