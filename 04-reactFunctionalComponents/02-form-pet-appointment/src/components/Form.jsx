import React, {useState} from "react";

const Form = ()=>{
    //create state variable to keep track of form info
    let [name, setName] = useState("");
    let [petType,setPetType] = useState("");
    let [date, setDate] = useState("");
    let [img, setImg] = useState("")

    // function showError(){
    //     if(name.length == 0){
    //         return <p className="text-danger">Name is required!</p>
    //     }else if(name.length<3){
    //         return <p className="text-danger">Name must be at least 3 characters long</p>
    //     }else{
    //         return null
    //     }
    // }
    

    return(
        <div className="container">
            <h3>Fill this form below</h3>
            <form>
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control"/>
                    {
                        name.length<3 && name.length>0 ? <p className="text-danger">Name must be at least 3 characters long</p> : null
                    }
                    
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    <select onChange={(e)=>setPetType(e.target.value)} className="form-select">
                        <option value="" selected hidden>--Choose a pet Type--</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Alpaca">Alpaca</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Select the day you want to visit</label>
                    <input onChange={(e)=>setDate(e.target.value)} type="date" className="form-control" />
                    {
                        date.length == 0? 
                        <p className="text-danger">Please select a date!</p> :
                        null
                    }
                </div>
                <div className="form-group">
                    <label>Image Url of your pet:</label>
                    <input onChange={(e)=>setImg(e.target.value)} type="text" className="form-control" />
                    {
                        img.length==0?
                        <p className="text-danger">Please give an image url</p> :
                        null
                    }
                </div>
                <input type="submit" value="Submit" className="btn btn-success mt-3" />
            </form>
            <hr />
            <p>Your Info:</p>
            <p>Name: {name}</p>
            <p>Pet Type: {petType} </p>
            <p>Selected Date: {date}</p>
            <img src={img} height="200px" />
        </div>
    )
}


export default Form;
