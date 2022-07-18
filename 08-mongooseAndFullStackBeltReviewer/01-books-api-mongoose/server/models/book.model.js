const mongoose = require('mongoose'); //import mongoose b/c we will use mongoose to create a table using javascript code


//instructions to define what a book table will look like
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required fam. We need to know what this book is."],
        minLength: [2, "Title must be at least 2 characters long"]
    },
    author: {
        type: String,
        required: [true, "Author is required!"]
    },
    rating: {
        type: Number,
        min: [1, "Rating cant get worse than a 1/5 stars, fam"],
        max: [5, "Rating can't be thatttttt good either, 5 is the max, fam"]
    }
}, {timestamps:true});




const Book = mongoose.model("Book", BookSchema); //this line registers the table under the table name "Book" using the instruction from the BookSchema variable
 

module.exports = Book; //export this table so that other files (controller mainly) can import it and work with it




