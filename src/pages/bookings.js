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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSizesQuery } from "../app/store/services/filterApi";
import BikesGrid from "../components/BikesGrid";
import { useGetAvaiableBikesQueryState } from "../app/store/services/bikeApi";
import { getAddButton, getDate, getFormIsActive, getNumberOfBikes, getRange, getSize, getType } from "../app/store/selectors";
import DateSelect from "../components/booking/DateSelect";
import { setAddButton, setAnotherForm, setFormIsActive } from "../app/store/bookingFormSlice";
import { useEffect } from "react";
import BookingStepper from '../components/booking/BookingStepper'

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
            <BookingStepper></BookingStepper>
        </Layout >
    )
}

export default BookingsPage