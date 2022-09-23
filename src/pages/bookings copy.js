import Layout from "../components/layouts/Layout"
import * as React from 'react';

import { format, addYears, addDays } from 'date-fns'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { CalendarPicker, LocalizationProvider, esES, DatePicker } from '@mui/x-date-pickers';
import esLocale from 'date-fns/locale/es';
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import TextField from '@mui/material/TextField';
import { width } from "@mui/system";
import { Box, Button, Container, Stack } from "@mui/material";
import BookingForm from "../components/booking/BookingForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSizesQuery } from "../app/store/services/filterApi";
import BikesGrid from "../components/BikesGrid";
import { useGetAvaiableBikesQueryState } from "../app/store/services/bikeApi";
import { getAddButton, getDate, getFormIsActive, getNumberOfBikes, getRange, getSize, getType } from "../app/store/selectors";
import DateSelect from "../components/booking/DateSelect";
import { setAddButton, setAnotherForm, setFormIsActive } from "../app/store/bookingFormSlice";
import { useEffect } from "react";


const BookingsPage = () => {
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
        <Layout>
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

        </Layout >
    )
}

export default BookingsPage