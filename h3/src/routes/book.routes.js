import { eventHandler } from "h3";
import { createBook, getBook,updateBook } from "../controller/book.controller.js";

export const bookRouter={
    "/books":eventHandler(async(event)=>{
        if (event.method==="GET") return await getBook(event);
        if(event.method==="POST") return await createBook(event);
    }),

    "/books/:id":eventHandler(async(event)=>{
        if(event.method ==="PUT" || event.method==="PATCH"){ 
            return await updateBook(event);
    }}),
};
