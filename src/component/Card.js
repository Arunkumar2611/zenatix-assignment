import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import PokemonCard from './PokemonCard';


const CardContainer = (props) => {
    
    const {name, id, type} = props
    console.log(props);

    return (
        <Card sx={{ maxWidth: 345 }}>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    id
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    type
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                height="194"
                image="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/25.svg"
                alt="Paella dish"
            />
            <CardActions>
                <PokemonCard />
            </CardActions>
        </Card>
    )
}

export default CardContainer;