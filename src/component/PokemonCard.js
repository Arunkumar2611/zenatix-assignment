import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CardContent, CardMedia } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PokemonCard = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            height="300"
                            width="50"
                            image="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/25.svg"
                            alt="Paella dish"
                        />

                        <Box sx={{ display: 'flex', flexDirection: 'column', width:400, justifyContent:"center", marginLeft: 10 }}>
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
                        </Box>

                    </Card>
                </Box>
            </Modal>
        </div>
    );
}

export default PokemonCard