// collaborated with daisy, anthony, eric, richard, josj, and viviana
import React, { useState } from 'react'

// To store the api response (that will keep changing) : state -- import, create

const FetchPokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const getPoke = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                setPokemonList(responseJson.results);
            })
            .catch(err => {
                console.log(err);
            })
    }


return (
    <div>
        <h1> Fetch Pokemon</h1>
        <ul>
            {pokemonList.map((p, idx) =>
                <li key={idx}>{p.name}</li>
            )}
        </ul>
        <button onClick={getPoke}>Get Pokemon</button>
    </div>
    )
}


export default FetchPokemon