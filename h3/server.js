import { createApp,serve } from "h3"
import mongoose from "mongoose";
import { bookRouter } from "./src/routes/book.routes.js";

mongoose.connect('mongodb://localhost:27017/bookManagement',{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

const app= createApp();

for(const path in bookRouter){
    app.use(path,bookRouter[path])
}

serve(app ,{port:4000})
