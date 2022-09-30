
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import bookingPickersDay from '../booking/bookingPickersDay';
import ContentCard from '../elements/ContentCard';
import ContentCardBody from '../elements/ContentCardBody';
import esLocale from 'date-fns/locale/es';
import { useGetBookingsQuery } from '../../app/store/services/bookingApi';


export default function StaticCalendar() {
    const [value, setValue] = React.useState(null);

    const params = (b) => new URLSearchParams(b)

    const today = new Date()
    //Recibe una Date y devuelve el número del mes en ISO con formato MM
    const dateToISOMonth = date => date.toISOString().slice(5, 7)
    //Extrae mes ISO con formato MM del día actual para hacer la primera petición
    //con el mes actual
    const thisISOMonth = dateToISOMonth(today)
    //  console.log("++++++++", today.toISOString().getMonth())
    const [month, setMonth] = React.useState(thisISOMonth)

    //onMonthChange pasa la Date así Tue Nov 01 2022 00:00:00 GMT+0100 (hora estándar de Europa central)
    //cuando cambias el mes del calendario
    //Al pasar a ISO, será un día antes porque la Date se registra a las 00:00h e ISO va con 2h menos
    const handleMonthChange = newDate => {
        const newMonth = dateToISOMonth(newDate)
        console.log('********', newDate.getMonth())
        console.log('********', newDate)
        setMonth(newMonth)
    }

    const handleChange = newValue => {
        console.log('@@@@@@@@@@@@', newValue.toISOString().slice(0, 10))
        setValue(newValue);
    }

    console.log('-------', month)
    //const month = today.toISOString().slice(0, 7)
    // console.log("++++++++", uf.slice(0, 7))
    const { data: bookings, isLoading, isSuccess, refetch, isFetching } = useGetBookingsQuery(
        params({ month }).toString(),
        {
            //  skip,
            // refetchOnMountOrArgChange: true
        })
    //console.log(bookings)
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                //openTo="year"
                renderDay={bookingPickersDay}
                inputFormat="dd/MM/yyyy"
                value={value}
                onChange={handleChange}
                onMonthChange={handleMonthChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>

    );
}
