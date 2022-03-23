const express = require("express");
const Author = require("../models/author.model")
const Book = require("../models/book.model");
const router=express.Router()
const crudController = require("./crud.controller");

router.get("/", crudController(Author).getAll);

router.post("/", crudController(Author).post)

router.get("/:id", crudController(Author).getOne)

router.get("/:id/books", async (req, res) => {
        
        let books = await Book.find({
                authors: req.params.id
        });
        res.status(200).json(books)
        
})

router.patch("/:id", crudController(Author).updateOne);
router.delete("/:id", crudController(Author).deleteOne);

module.exports = router;