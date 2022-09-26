import * as React from 'react';


//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BookingForm from './BookingForm';
import { setAddButton, setFormIsActive } from '../../app/store/bookingFormSlice';
import { getAddButton, getFormIsActive, getNumberOfBikes } from '../../app/store/selectors';
import DateSelect from './DateSelect';
import SelectedBikesList from './SelectedBikesList';


const DateStep = () => {
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
            <Typography sx={{ mt: 1, mb: 0 }} variant="h6" component="div">
                Selecciona la fecha
            </Typography>

            <DateSelect />



        </Box >
    )
}

export default DateStep