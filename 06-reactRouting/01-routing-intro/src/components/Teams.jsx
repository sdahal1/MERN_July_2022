import React from 'react';
import { useParams } from 'react-router';

const Teams = ()=>{
    const {id,color1} = useParams();

    return(
        <>
        <h3 style={{backgroundColor: color1}}>Teams component- showing the top 5 teams</h3>
        <ol>
            <li>Warriors</li>
            <li>Celtics</li>
            <li>Heat</li>
            <li>Mavs</li>
            <li>Bucks</li>
        </ol>
        <hr />
        <h1>{id}</h1>
        {id == undefined? "No team id selected":null}
        {
            isNaN(id)? <p>The team name is: {id}</p> : <p>The team number is {id}</p>
        }
        
        </>
    )
}

export default Teams;