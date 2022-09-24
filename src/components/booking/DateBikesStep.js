import * as React from 'react';


//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { Box, Button, Container, Stack } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BookingForm from './BookingForm';
import { setAddButton, setFormIsActive } from '../../app/store/bookingFormSlice';
import { getAddButton, getFormIsActive, getNumberOfBikes } from '../../app/store/selectors';
import DateSelect from './DateSelect';
import SelectedBikesList from './SelectedBikesList';


const DateBikeStep = () => {
    const dispatch = useDispatch()
    const amount = useSelector(getNumberOfBikes)
    const addButton = useSelector(getAddButton)
    const formIsActive = useSelector(getFormIsActive)

    const [bookingForms, setBookingForms] = useState([])


    const handleAddBike = () => dispatch(setFormIsActive(true))

    const handleClick = () => {
        dispatch(setAddButton(false))
    }
    /*
        useEffect(() => {
            console.log('dispatchhhh')
            dispatch(setAnotherForm())
        }, [amount]);
    */
    return (
        <Box>

            <Box>{amount} {amount == 1 ? 'Bicicleta' : 'Bicicletas'} en la reserva</Box>
            <Stack mb={2} spacing={2}>
                {/* <SelectedBikesTable></SelectedBikesTable>*/}
                <SelectedBikesList />
                <DateSelect />
                {formIsActive ?
                    <BookingForm key={amount} />
                    :
                    <Stack alignItems='center'
                    // sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <Button
                            onClick={handleAddBike}
                        >Añadir bicicleta</Button>

                    </Stack>

                }
                {/*bookingForms.map(form => <BookingForm />)*/}


            </Stack>


        </Box >
    )
}

export default DateBikeStep