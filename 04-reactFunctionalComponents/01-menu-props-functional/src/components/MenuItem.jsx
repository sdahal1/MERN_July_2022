import React, {useState} from "react";

const MenuItem = (props)=>{
    // let {dishName, price, children} = props;
    //this is how we create a state variable 
    let [statePrice, setPrice ] = useState(props.price)

    const increasePrice = ()=>{
        console.log("changing price");
        setPrice(statePrice+1);
        alert("Price has been updated!");

    }



    return(
        <div>
            <h1>Name: {props.dishName}</h1>
            <p>Price: ${statePrice}</p>
            {props.children}
            <br />
            <button onClick={increasePrice}>Click for inflation</button>
        </div>
    )
}



export default MenuItem;