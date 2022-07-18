const BookController = require("../controllers/book.controller");




// app.get("/api", (req,res)=>{
//     res.json({greeting:"hello mongoose demo"});
// })

module.exports = (app)=>{
    app.get("/api", BookController.helloWorld);
    app.get("/api/books", BookController.showAllBooks);
    app.post("/api/books", BookController.createBook);

    app.get("/api/books/:id", BookController.findOneBook);
    app.put("/api/books/:id", BookController.updateBook);
    app.delete("/api/books/:id", BookController.deleteBook);
    

}