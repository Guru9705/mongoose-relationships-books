const { text } = require("express");
const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true, unique: true },
    last_name: { type: String, required: true },
    books: [
        {type: mongoose.Schema.Types.ObjectId, ref : "book", required: true}
    ]
})

const Author = mongoose.model("author", authorSchema);

module.exports = Author;