//import express
const express = require("express");

const port = 8000;

const app = express(); //initialize express application and reference it using the variable "app"

//the code to connect to db was here
require("./server/config/mongoose.config");


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


require("./server/routes/book.routes")(app) //import the routes so the server is aware of the routes we have built


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
