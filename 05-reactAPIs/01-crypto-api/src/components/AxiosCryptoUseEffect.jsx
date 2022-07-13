import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AxiosCryptoUseEffect = () => {
  console.log ('first line of code in the component.');
  //create state variable array to store the api results in
  let [coins, setCoins] = useState ([]);

  let [buttonClicked, setButtonClicked] = useState (false);

  useEffect (
    () => {
      console.log ('inside useEffect');
      axios
        .get (
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        )
        .then (response => {
          console.log ('got back response from api. Data is->', response);
          setCoins (response.data); //save the coin info from the api into our state variable so that we can loop through this variable using .map() in the jsx area
        })
        .catch (err => {
          console.log ('something went wrong fetchig from the api->', err);
        });
    },
    [buttonClicked]
  );

  //every time a state variable updates, the component re-runs (re-appears on the screen)

  return (
    <div>
      <button onClick={() => setButtonClicked (!buttonClicked)}>
        Re-run the api call to get updated coin info!
      </button>
      {coins.map ((coinObj, idx) => {
        return (
          <div key={idx}>
            <h3>{coinObj.name}</h3>
            <p>Price: ${coinObj.current_price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AxiosCryptoUseEffect;
