import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    title:{type:String,require:true},
    author:{type:String,require:true},
    genre:{type:String}
}) 
const book=mongoose.model("book",bookSchema);
export default book;