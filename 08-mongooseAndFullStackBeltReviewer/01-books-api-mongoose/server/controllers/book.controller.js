//controller needs to be able to access the model ...so import the models
const Book = require("../models/book.model");



module.exports.helloWorld = (req,res)=>{
    res.json({greeting:"hello mongoose demo"});
}



module.exports.showAllBooks = (req,res)=>{
    Book.find()
        .then(foundBooks=>{
            res.json({results: foundBooks})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}

module.exports.createBook = (req,res)=>{
    Book.create(req.body)
        .then(newBook =>{
            res.json({results: newBook})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}

module.exports.findOneBook = (req,res)=>{
    Book.findOne({_id:req.params.id})
        .then((foundBook)=>{
            res.json({results: foundBook })
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}

module.exports.updateBook = (req,res)=>{
    Book.findOneAndUpdate(
        {_id:req.params.id}, //which book i want to update
        req.body, //form information i will use to update the book with
        {new:true, runValidators:true}
        )
        .then(updatedBook =>{
            res.json({results: updatedBook})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}


module.exports.deleteBook = (req,res)=>{
    Book.deleteOne({_id: req.params.id})
        .then(deletedBook =>{
            res.json({results: deletedBook})
        })
        .catch(err=>{
            res.json({message: "Something went wrong", error:err})
        })
}