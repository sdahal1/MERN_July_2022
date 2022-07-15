const express = require("express"); //import express and store express in a variable
const app = express(); //initialize the express application and store it in a variable called 'app'

const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() ); //allow the application to parse json data (form information)
app.use( express.urlencoded({ extended: true }) ); //allow the application to accept form information


//hardcoded data for the api (for now, until we get a database)
const menuItems = [
    {name: "Calamari", price: 12.00},
    {name: "Maine Lobster Roll", price: 15.00},
    {name: "Lasagna", price: 20},
    {name: "Pizza", price: 10},
    {name: "A5 Japanese Wagyu", price: 99}
]


//HTTP verbs:
//get=retrieve all or retrieve one
//post=create something new
//put= update something
//delete = delete something


// @app.route("/api")
// def sayHello:
//     return "hello world";

//http://localhost:8000/api
app.get("/api",(req,res)=>{
    res.json({message: "Wazaaaaaaap"})
})


//get all menu items
app.get("/api/menu", (req,res)=>{
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})


//get one menu item by index number
app.get("/api/menu/:idx", (req,res)=>{
    res.json({
        results: menuItems[req.params.idx]
    })
})


//create a new menu item
app.post("/api/menu",(req,res)=>{
    //req.body represents the information sent to the api (form info)
    console.log(req.body);
    //we will push the req.body to our menuItems array
    menuItems.push(req.body);
    //lastly we will respond with json with the new menuItems array
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})


//update a menu item based on its index number
app.put("/api/menu/:idx", (req,res)=>{
    //we will need to update our menuItems at a specific index (idx) with the form information (req.body)
    menuItems[req.params.idx] = req.body;

    //respond with json with the new menuItems array
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})


//delete a menu item based on its index number
app.delete("/api/menu/:idx", (req,res)=>{
    //delete from menuItems at specified index (idx)
    menuItems.splice(req.params.idx,1);
    //respond with json with the new menuItems array
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})


// this needs to be below the other code blocks-> make this the last line
app.listen( port, () => console.log(`Listening on port: ${port}`) );