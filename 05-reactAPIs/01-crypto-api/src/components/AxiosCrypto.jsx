import React, {useState} from "react";
import axios from 'axios';


const  AxiosCrypto = ()=>{

    //create state variable array to store the api results in
    let [coins, setCoins] = useState([])

    const getData = ()=>{

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response=>{
                console.log("got back response from api. Data is->", response);
                setCoins(response.data); //save the coin info from the api into our state variable so that we can loop through this variable using .map() in the jsx area
            })
            .catch(err=>{
                console.log("something went wrong fetchig from the api->", err)
            })
            //this is like the tasks we will do while waiting for the dog to fetch us the ball (the api to return back our data we want)
            console.log("i am texting a friend while the dog is fetching. Or i am running some other tasks while waiting for the data from the api");
            console.log("i also drink some water while waitin for the dog");
    }

    return(
        <div>
            <button onClick={getData}>Click me to fetch recent Cryptocurrency data</button>
            {
                coins.map((coinObj, idx)=>{
                    return(
                        <div>
                            <h3>{coinObj.name}</h3>
                            <p>Price: ${coinObj.current_price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default AxiosCrypto;