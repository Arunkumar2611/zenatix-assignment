import React, { useEffect, useState } from "react";
import CardContainer from "./Card";
import { Button, Grid, Stack } from "@mui/material";
import SearchField from "./SearchField";
import TypeField from "./TypeField";

const Home = () => {
    const [data, setData] = useState("");
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(response => response.json())
            .then(pokemondata => setData(pokemondata));
    }, [])

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    //     .then(response => response.json())
    //     .then(function(allpokemon){
    //         allpokemon.results.forEach(function(pokemon){
    //             fetchPokemonData(pokemon);
    //         })
    //     })
    // }, [])

    // function fetchPokemonData(pokemon){
    //     let url = pokemon.url // <--- this is saving the pokemon url to a variable to use in the fetch. 
    //                                 //Example: https://pokeapi.co/api/v2/pokemon/1/"
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(function(pokeData){
    //         console.log(pokeData)
    //     })
    // }

    return (
        <>
            <h1>Pokemon</h1>
            <Stack direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={12}>
                <SearchField />
                <TypeField />
            </Stack>
            <div style={{ display: "flex", margin: "20px 20px", padding: "20px 20px", flexWrap: "wrap", gap: "10px 20px" }} container spacing={16} justify="flex-start">
                {arr.map((item) => (
                    <CardContainer key={item} data={data} />
                ))}
            </div>
            <div style={{ marginBottom: 100 }}>
                <Stack direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    spacing={12}>
                    <Button variant="outlined" href="#">Previous</Button>
                    <Button variant="outlined" href="#">Next</Button>
                </Stack>
            </div>
        </>
    )
}

export default Home;