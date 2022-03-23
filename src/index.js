const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/book.model")
const bookController = require("./controllers/book.controller");
const sectionController = require("./controllers/section.controller");
const authorController=require("./controllers/author.controller")
const cors=require("cors")
const DB_URL="mongodb+srv://gursimar:root@cluster0.eaesh.mongodb.net/books?retryWrites=true&w=majority"
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", bookController);
app.use("/sections", sectionController);
app.use("/authors", authorController);

const connect = () => {
    mongoose.connect(DB_URL);
}



app.listen(PORT, () => {
    try {
        console.log("listen", PORT);
        connect()
    } catch(e) {
        console.log("error",e)
    }
    
})


