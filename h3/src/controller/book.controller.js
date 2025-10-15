import { readBody} from "h3";
import book from "../model/book.model.js";

export const getBook = async (event) => {
  try {
    const books = await book.find();
    return {
      message: "book fetch sucessfully:-",
      books,
    };
  } catch (error) {
    return {
      message: "unable to fetch",
      error: error.message,
    };
  }
};
export const createBook = async (event) => {
  try {
    const body = await readBody(event);
    const newBook = new book(body);
    await newBook.save();
    return {
      message: "book added",
      book: newBook,
    };
  } catch (error) {
    return {
      message: "unable to send data",
      error: error.message,
    };
  }
};

export const updateBook=async(event)=>{
    try {
        const {id}=event.context.params;
        const updateItem=await readBody(event);

        const updateBook =await book.findByIdAndUpdate(id,updateItem,{
            new:true,
            runValidator:true
        })
        if(!updateBook){
            return{
                message:"Book not found"
            }
        }
        return{
            message:"book updated sucessfully",
            book:updateBook,
        }
    } catch (error) {
        return{
            message:"unbale to update Book",
            error:error.message
        }
    }
}