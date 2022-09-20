import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CalendarPicker, LocalizationProvider, esES, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import esLocale from 'date-fns/locale/es';
import { format, addYears, addDays } from 'date-fns'

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useGetSizesQuery, useLazyGetSizesQuery } from "../../app/store/services/filterApi";
import { getDate } from "../../app/store/selectors";
import { setDate } from "../../app/store/bookingFormSlice";
import { Button } from "@mui/material";


const BookingDatePickers = () => {
    //  console.log('oooooo')
    const dispatch = useDispatch()

    const firsRender = true
    const params = (b) => new URLSearchParams(b)
    const isoDate = useSelector(getDate)
    const date = {
        from: isoDate.from ? new Date(isoDate.from) : null,
        to: isoDate.to ? new Date(isoDate.to) : null
    }
    //console.log('date', date)
    // const { data, isSuccess, refetch, isFetching } = useGetSizesQuery(params(convert(date)), { skip })

    const [skip, setSkip] = useState(true)
    const { data, isSuccess, refetch, isFetching } = useGetSizesQuery(params(isoDate).toString(), { skip, refetchOnMountOrArgChange: true })

    const [trigger, result, lastPromiseInfo] = useLazyGetSizesQuery()
    //console.log('result', result)
    //console.log('lastPromiseInfo', lastPromiseInfo)
    // console.log('?????????', params(isoDate).toString())
    //  isSuccess && setSkip(prev => !prev)

    /*
        const [date, setDate] = useState({
            from: null,
            to: null

        })
    */
    // console.log(date.from)

    const handleChange = (picker) => (newValue) => {
        console.log('handleChange', [picker, newValue])
        //picker será 'from' o 'to' 
        newValue && dispatch(setDate([picker, newValue.toISOString()]))
        /*
        setDate({
            ...date,
            [picker]: newValue
        })
        */
    }
    // console.log(new Date().toISOString())
    const [error, setError] = useState(null)



    const handleRtkQuery = () => {
        // handleValidate() && setSkip(prev => !prev)

        handleValidate() ?
            skip ?
                setSkip(prev => !prev)
                :
                trigger(params(isoDate))
            :
            console.log('no validaaaaa')


    }
    const handleError = (reason, value) => {
        reason ?
            setError(`Seleccione una fecha superior a ${format(date.from, "dd/MM/yyyy")} o modifique la fecha de inicio`)
            :
            setError(null)
        console.log(reason)
    }

    const handleValidate = () => {
        console.log('validando...')
        if (!!!date.from || !!!date.to || !!error) {
            return false
        } else {
            return true
        }
    }
    //console.log(handleValidate())
    const handleClose = () => {
        //console.log('adapter');
    }
    const isFirstRender = useRef(true)
    /*
        useEffect(() => {
            if (isFirstRender.current) {
                // console.log(isFirstRender.current);
                //  console.log('primero');
                //  console.log(date)
                isFirstRender.current = false;
                //  return;
            }
            // run something every time name changes
            //  console.log(isFirstRender.current);
            console.log('validate', handleValidate());
            // console.log(date)
        }, [date, error]);
        */

    const convert = date =>
        //  console.log('date antes de convertir', date) ||
        date.from && date.to && ({ from: date.from.toISOString(), to: date.to.toISOString() })
    //const { data, isSuccess } = useGetSizesQuery(params(date).toString(), { skip })


    //isSuccess && handleSkip()
    /*
    console.log('data', data)
    console.log('isFetching', isFetching)
    console.log('isSuccess', isSuccess)
    console.log('skip', skip)
*/



    const adapter = new AdapterDateFns()

    const today = adapter.date(Date())

    const nextDay = (date) => adapter.addDays(date, 1)

    const nextYear = adapter.addYears(today, 1)

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}
            adapterLocale={esLocale} // use 'bg' locale for date parser/formatter
        >
            <Stack direction="row" spacing={1}>
                <DatePicker
                    label="Inicio"
                    disablePast
                    //      disableMaskedInput={true}
                    inputFormat="dd/MM/yyyy"
                    value={date.from}
                    onChange={handleChange('from')}
                    //     onAccept={handleChange}

                    //https://github.com/mui/material-ui-pickers/issues/1751
                    renderInput={(params) => <TextField  {...params} />}
                    minDate={today}
                    maxDate={nextYear}
                    toolbarTitle='Seleccione fecha de inicio'
                    onAccept={handleRtkQuery}
                    onClose={() => console.log('oncloseee')}
                />
                <DatePicker
                    label="Fin"
                    disablePast
                    // disableMaskedInput={true}
                    inputFormat="dd/MM/yyyy"
                    value={date.to}
                    onChange={handleChange('to')}
                    renderInput={(params) => <TextField {...params} helperText={error && error} />}
                    minDate={nextDay(date.from)}
                    maxDate={nextYear}
                    onError={handleError}
                    onAccept={handleRtkQuery}
                />

            </Stack>




        </LocalizationProvider>
    )
}

export default BookingDatePickers