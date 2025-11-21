import { Book } from "../types/book.type";


export const book:Book[] = [
        {id: "B-1", title: "1984"},
        {id: "B-2", title: "To Kill a Mocking Bird",date: "2025-12-10"}
    ];

export interface IBookRepository{
    getAllBooks(): Book[];

}

export class BookRepository implements IBookRepository{
    getAllBooks(): Book[] {
        return book;
    }
}