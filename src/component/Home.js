import React, { useEffect, useState } from "react";
import CardContainer from "./Card";
import { Button, Grid, Stack } from "@mui/material";
import SearchField from "./SearchField";
import TypeField from "./TypeField";

const Home = () => {
    const [data, setData] = useState([]);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?offset=151&limit=2')
            .then(response => response.json())
            .then(pokemondata => setData(pokemondata.results));
    }, [])


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
                
            {data.map((item, index) => (
                    <CardContainer key={index} data={item} />
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