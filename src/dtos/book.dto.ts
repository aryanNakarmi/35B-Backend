import z from "zod";
import { BookSchema } from "../types/book.type";

//DTO - Data transer object
export const CreateBookDTO= BookSchema.pick({id: true, title:true}); //which cleint sends to server
export type CreateBookDTO = z.infer<typeof CreateBookDTO>;
