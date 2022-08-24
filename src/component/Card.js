import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import PokemonCard from './PokemonCard';

const CardContainer = (props) => {
    const [type, setType] = useState();
    const { name, url } = props.data
    // console.log("props", props.data);

    fetchPokemonData(url);

    function fetchPokemonData(url){
        if(url) {
            fetch(url)
            .then(response => response.json())
            .then((pokeData) => {
                console.log("pokrmon ",pokeData)
                setType(pokeData.types[0].type.name);
            })
            .catch(err => console.log(err))
        }   
    }

    const last = url.split("/")

    const number = last[last.length - 2];
    const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${number}.svg`
    // console.log(image)

    return (
        <Card sx={{ maxWidth: 345 }}>

            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    Name: {name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Id: {number}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Type: {type}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />
            <CardActions>
                <PokemonCard />
            </CardActions>
        </Card>
    )
}

export default CardContainer;