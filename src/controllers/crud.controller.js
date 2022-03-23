const Book=require("../models/book.model")
const getAll = (model) => async (req, res) => {
    let items = await model.find();
    res.status(200).json(items)
}

const createOne=(model)=> async (req, res) => { 
    let item = await model.create(req.body);
    res.status(201).json(item)
}

const getOne=(model)=>async (req, res) => {
    let item = await model.findById(req.params.id);
    res.status(200).json(item)
 }

const updateOne = (model) => async (req, res) => {
    if (model == Book) {
        let item = await model.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    name: req.body.name,
                    body: req.body.body,
                    section: req.body.section,
                    checkedOut: req.body.checkedOut,
                },
                $push: {
                    authors: [...req.body.authors]
                }
            },
            { new: true }
        );
        res.status(200).json(item)
    } else {
        let item = await model.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                },
                $push: {
                    books: [...req.body.books]
                }
            },
            { new: true }
        );
        res.status(200).json(item)
    }
   
 };
const deleteOne=(model) =>async (req, res) => { 
    let item = await model.findByIdAndDelete(req.params.id);
    res.status(200).json(item)
};

module.exports = (model) => ({
    post: createOne(model),
    getOne: getOne(model),
    getAll: getAll(model),
    updateOne: updateOne(model),
    deleteOne:deleteOne(model)
        
})