import React, {useState} from "react";


const Form = ()=>{
    //create a state variable for each item in the form

    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [tagColor, setTagColor] = useState("");
    let [imgUrl, setImgUrl] = useState("");


    //array called listOfPets where we can store every pet that gets submitted
    let [listOfPets, setListOfPets] = useState([]);


    //function that runs when the form submits, to update our array called listOfPets
    const submitHandler = (e)=>{
        e.preventDefault(); //this will prevent the form submission from reloading the page
        console.log("form submitted!", name, age, tagColor, imgUrl);

        //put the pets information into an object (similar to dictionary in python)
        let petObj = {name, age, tagColor, imgUrl};
        console.log(petObj);

        setListOfPets([...listOfPets,petObj]) //update the listOfPets array using its setter (setListOfPets) to be a copy of whatever is already in list of pet (...listOfPets) and add the recently submitted petObj to it (petObj)

    }

    return(
        <>
            <h3>Fill in this form below</h3>
            <p>Show some love to our furry dojo companions.</p>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Name:</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input onChange={(e)=>setAge(e.target.value)} type="number" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Collar Tag Color</label>
                    <input onChange={(e)=>setTagColor(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Image URL</label>
                    <input onChange={(e)=>setImgUrl(e.target.value)} type="text" className="form-control" />
                </div>
                <input type="submit" value="Add Pet" className="btn btn-success mt-3" />
            </form>
            <hr />
            <div className="pet-list">
                {
                    listOfPets.map((pet,idx)=>{
                        return(
                            <div className="pet" style={{backgroundColor: pet.tagColor}}>
                                <h3>{pet.name}</h3>
                                <p>Age: {pet.age}</p>
                                <p>Tag Color: {pet.tagColor}</p>
                                <img src={pet.imgUrl} height="200px" />
                            </div>
                        )
                    })
                }
            </div>
        </>

        
    )
}


/*
{% for pet in listOfPets %}
    <div>
        <h3>{{pet.name}}</h3>
    </div>
{% endfor %}

*/

export default Form;