import * as React from 'react';


//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { Box, Button, Container, Stack } from "@mui/material";
import BookingForm from "../components/booking/BookingForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddButton, getFormIsActive, getNumberOfBikes } from "../app/store/selectors";
import DateSelect from "../components/booking/DateSelect";
import { setAddButton, setFormIsActive } from "../app/store/bookingFormSlice";
import { useEffect } from "react";


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
            <div >RESERVAS</div>
            <Box>{amount} {amount == 1 ? 'Bicicleta' : 'Bicicletas'} en la reserva</Box>
            <Stack mb={5} spacing={2}>
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
                        <Button>Continuar</Button>
                    </Stack>

                }
                {/*bookingForms.map(form => <BookingForm />)*/}


            </Stack>

            <Button
                //disabled={handleValidate()}
                disabled
                onClick={handleAddBike}
            >Añadir bicicleta</Button>

        </Box >
    )
}

export default DateBikeStep