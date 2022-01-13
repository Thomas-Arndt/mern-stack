import React, { useState } from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const handleClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(resp => resp.json())
        .then(data => {
            let results = data.results
            let pokedex = results.map(item => item.name)
            setPokemon(pokedex);
        })
    }

    return(
        <div>
            <button onClick={handleClick}>Get Pokemon</button>
            {pokemon.map((item, i) => <p key={i}>{item}</p>)}
        </div>
    )
}
export default Pokemon;