const express = require("express");
const Book = require("../models/book.model");
const router = express.Router();
const crudController = require("./crud.controller");

router.get("/", async (req, res) => {
    const { isCheckedOut ,author,section } = req.query
    const criteria = {};
    if (isCheckedOut) {
        criteria.isCheckedOut=isCheckedOut
    }
    if (author) {
        criteria.authors=author
    }
    if (section) {
        criteria.section=section
    }
    let books = await Book.find(criteria);
    res.status(200).json(books)
});

router.post("/", crudController(Book).post)

router.get("/:id", crudController(Book).getOne)

router.patch("/:id", crudController(Book).updateOne);
router.delete("/:id", crudController(Book).deleteOne);

module.exports = router;