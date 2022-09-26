import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


//import DirectProductAmountButton from './DirectProductAmountButton';
import { Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { getBikes } from '../../app/store/selectors';
import Image from 'next/image';
import { rangesMap, typesMap } from '../../lib/utils/detailsMaps';

const divStyle = {
    backgroundColor: 'red',
};

const SelectedBikesTable = () => {
    const selectedBikes = useSelector(getBikes)
    return (
        <Stack spacing={1}

        >
            {selectedBikes.map(bike => {
                const [image] = bike.images
                return (
                    <Box display='flex' justifyContent='space-between' gap='10px'>
                        <Image
                            width='80%'
                            height='80%'
                            objectFit='contain'
                            src={image}
                            alt="Imagen de producto"

                            style={{ backgroundColor: '#F1F1F1' }}
                        />
                        <Stack mr={4} >
                            <Typography component="div" variant="subtitle2">
                                ssssss {bike.brand} {bike.model}
                            </Typography>
                            {typesMap.map(type => {
                                const [engType, spaType] = type
                                console.log('1', bike.type)
                                console.log('2', engType)
                                return (
                                    bike.type === engType &&
                                    <Typography key={engType} component="div" color="text.secondary" variant="body2">

                                        Tipo: {spaType}
                                    </Typography>
                                )
                            })}
                            {rangesMap.map(range => {
                                const [engRange, spaRange] = range

                                return (
                                    bike.range === engRange &&
                                    <Typography key={engRange} component="div" variant="body2" color="text.secondary">

                                        Gama: {spaRange}
                                    </Typography>
                                )
                            })}
                            <Stack
                                direction="row"
                                justifyContent=' space-between'
                            >
                                <Typography variant="body2"
                                    color="text.secondary"
                                    component="div">
                                    Precio por día:
                                </Typography>
                                <Typography variant="body2"
                                    color="text.secondary"
                                    component="div">
                                    {bike.price}€
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box >
                )
            }
            )}
        </Stack>



    )

}

export default SelectedBikesTable



