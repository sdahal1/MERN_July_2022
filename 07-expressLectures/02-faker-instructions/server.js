const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');


class User{
    constructor(){
        this._id = faker.database.mongodbObjectId();
        this.email = faker.internet.email();
    }
}






//create a route to get a random user
app.get("/api/user", (req,res)=>{
    //create an instance of a user using the User class
    let newUser = new User();

    //respond with json the user information
    res.json({
        results: newUser
    })
})




// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
