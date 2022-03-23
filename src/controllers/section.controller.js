const express = require("express");
const Section = require("../models/section.model")
const Book=require("../models/book.model")
const router=express.Router()

const crudController = require("./crud.controller");

router.get("/", crudController(Section).getAll);

router.post("/", crudController(Section).post)

router.get("/:id", crudController(Section).getOne)

router.get("/:id/books", async (req, res) => {
    //console.log("d",req.params)
    let books = await Book.find({
        section:req.params.id
    })
    res.status(200).json(books)
})

router.patch("/:id", crudController(Section).updateOne);
router.delete("/:id", crudController(Section).deleteOne);

module.exports = router;