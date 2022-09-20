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
import { Button, Stack } from "@mui/material";
import BookingForm from "../components/booking/BookingForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSizesQuery } from "../app/store/services/filterApi";
import BookingDatePickers from "../components/booking/BookingDatePickers";
import BikesGrid from "../components/BikesGrid";
import { useGetAvaiableBikesQueryState } from "../app/store/services/bikeApi";
import { getDate, getRange, getSize, getType } from "../app/store/selectors";


const BookingsPage = () => {

    const isoDate = useSelector(getDate)
    const selectedSize = useSelector(getSize)
    const selectedType = useSelector(getType)
    const selectedRange = useSelector(getRange)

    const params = (b) => new URLSearchParams(b)

    const { currentData: avaiableBikes, data } = useGetAvaiableBikesQueryState(params({ ...isoDate, size: selectedSize, type: selectedType, range: selectedRange }).toString())

    const [bookingForms, setBookingForms] = useState([])
    const handleAddBike = () => setBookingForms([...bookingForms, {}])




    return (
        <Layout>
            <div >RESERVAS</div>
            <Stack mb={5} spacing={2}>
                <BookingDatePickers />

                {/*bookingForms.map(form => <BookingForm />)*/}
                <BookingForm />

            </Stack>
            {avaiableBikes && <BikesGrid bikes={avaiableBikes} />}
            <Button
                //disabled={handleValidate()}
                disabled
                onClick={handleAddBike}
            >Añadir bicicleta</Button>

        </Layout >
    )
}

export default BookingsPage