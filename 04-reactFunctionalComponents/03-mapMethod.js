const groceries = ["pearl onions", "cremini mushrooms", "thyme"];

//Map will make a copy of an array and apply our own twist to it... using a callback function that takes in each element of the array returning what we want to do to each element. A callback function is a function that is given as an argument(input) to another function call


// groceries.push("hello")



let newList = groceries.map((groceryItem,i)=>{
    return '<li>' + groceryItem + '</li>'
})

console.log(newList);

// const groceryList = groceries.map( item => `<li>${item}</li>` );
