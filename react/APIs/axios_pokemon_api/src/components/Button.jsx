import React, { useState } from "react";
import axios from 'axios';

const Button = () => {
    const [pokedex, setPokedex] = useState([]);

    const handleClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => {
            console.log(response);
            setPokedex(response.data.results.map(item => item.name));
        })
    }

    return(
        <div>
            <button className="btn btn-success my-3" onClick={handleClick}>Fetch Pokemon</button>
            {pokedex.map((item, i) => <p key={i}>{item}</p>)}
        </div>
    )
}
export default Button;