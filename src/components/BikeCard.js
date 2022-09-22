import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { setBikes, setFormIsActive, setSize } from '../app/store/bookingFormSlice';

export default function BikeCard({ bike, }) {
    const { brand, model, description, images, _id } = bike

    const dispatch = useDispatch()

    const handleClick = () => {

        dispatch(setBikes(bike))
        dispatch(setFormIsActive(false))
        // dispatch(setSize(''))
    }

    const a = () => { if (true) return false }

    return (
        <Card
        //  sx={{ maxWidth: 345 }}
        >
            <CardMedia
                component="img"
                alt="green iguana"
                //height="140"
                image={images[0]}
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    {`${brand} ${model}`}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ justifyContent: 'center' }}
            >

                <Button
                    onClick={handleClick}
                    size="small">Resevar</Button>



            </CardActions>
        </Card>
    );
}
