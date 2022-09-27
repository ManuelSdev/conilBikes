import * as React from 'react';


//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BookingForm from './BikeForm';
import { setAddButton, resetBikes, setFormIsActive } from '../../app/store/bookingFormSlice';
import { getAddButton, getFormIsActive, getNumberOfBikes, getDate, getBikes } from '../../app/store/selectors';
import DateSelect from './DateSelect';
import SelectedBikesList from './SelectedBikesList';
import Modal from './Modal';


const DateStep = () => {
    const dispatch = useDispatch()
    const amount = useSelector(getNumberOfBikes)
    const addButton = useSelector(getAddButton)
    const formIsActive = useSelector(getFormIsActive)
    const bikes = useSelector(getBikes)
    const isoDate = useSelector(getDate)
    const [bookingForms, setBookingForms] = useState([])

    const dateIsBlocked = isoDate.from && isoDate.to && !!bikes.length
    console.log('fecha bloqueada', dateIsBlocked)
    console.log('hay bicis', !!bikes.length)
    const handleAddBike = () => dispatch(setFormIsActive(true))

    const handleClick = () => {
        dispatch(setAddButton(false))
    }
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);

    };

    const handleCancel = () => {
        console.log('close')
        setOpen(false);
    };
    const handleAccept = () => {
        console.log('aceptar')
        dispatch(resetBikes())
        setOpen(false);
    };

    /*
        useEffect(() => {
            console.log('dispatchhhh')
            dispatch(setAnotherForm())
        }, [amount]);
    */
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <Modal
                handleClose={handleCancel}
                open={open}
                title='Atención:'
                content='Si modifica la fecha, las bicicletas seleccionadas serán eliminadas para que pueda buscar entre las bicicletas disponibles en la nueva fecha introducida'
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flex: '1 0 0' }}>
                    <Button onClick={handleCancel} >Cancelar</Button>
                    <Button onClick={handleAccept} autoFocus>Aceptar</Button>
                </Box>

            </Modal>
            <DateSelect />
            {dateIsBlocked &&
                <Button
                    onClick={handleOpen}
                    sx={{ mt: 2, mb: 2, width: '50%' }}
                >Modificar fecha</Button>
            }



        </Box >
    )
}

export default DateStep