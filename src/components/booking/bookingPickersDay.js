
import { PickersDay, pickersDayClasses } from '@mui/x-date-pickers';
import { format, addYears, addDays } from 'date-fns'
import isSameDay from 'date-fns/isSameDay';
import { bookingDayColors } from '../../lib/utils/colors';


/**
 * PickersDay se llama por cada día del mes que se muestra en el calendario
 * bookingPickersDay se llamará por cada día y devolverá un <PickerDay/> con la configuración
 * para ese día
 * El parametro date es cada uno de esos días. Necesitas evaluarlo y devolver un <PickerDay/>
 * con el estilo que necesitas para ese date/día
 */

//https://stackoverflow.com/questions/69477377/mui-change-specific-day-color-in-datepicker
const bookingPickersDay = bookingDatesOnMonth => (date, selectedDates, pickersDayProps) => {
    // console.log(date)
    const { startDay, endDay, startEndDay } = bookingDayColors

    const nextDay = addDays(new Date(), 1)
    const today = new Date()

    const ooo = today.toISOString().slice(0, 10)
    const dates = [ooo]


    const stringifiedDate = date.toISOString().slice(0, 10);
    /*
     if (dates.includes(stringifiedDate)) {
         console.log('++++++++++++++++', pickersDayClasses)
         return <PickersDay {...pickersDayProps} selected />;
     }
     */
    const ob = dates.includes(stringifiedDate) ?
        //console.log('-------------', stringifiedDate, date) ||
        { background: startEndDay, color: 'white' } : {}
    // { color: 'red' } : {}
    //console.log(date.toISOString().slice(0, 10))
    console.log(date.getDay())
    isSameDay
    /*
    const matchedStyles = bookingDatesOnMonth.reduce((acc, bookingDate) => {
        const from = new Date(bookingDate.from)
        const to = new Date(bookingDate.to)
        if (isSameDay(date, from)) return { background: startDay, color: 'white' }
        if (isSameDay(date, to)) return { background: endDay, color: 'white' }
        //   if (isSameDay(date, from) && isSameDay(date, from)) return { background: startEndDay, color: 'white' }
    },
        {}
    )
*/


    return (
        <PickersDay
            {...pickersDayProps}
            // day={nextDay}
            sx={{
                /**CUando queda seleccionado: primero pilla el color del hover por haberlo picado, pero
                 * si abres después el calendario, sale se aplica este
                 */
                // ...ob
                // '&.MuiPickersDay-root.Mui-selected': { backgroundColor: "#ED1C24", color: 'blue' },
                /**Cuando picas uno */
                //  '&.MuiPickersDay-root:hover': { backgroundColor: "#FFC000", color: 'blue' },
                //'&.MuiPickersDay-root:not(.Mui-selected)': { backgroundColor: "#EDD3ED", color: 'blue' },
                //'&.MuiPickersDay-root.MuiPickersDay-today': { backgroundColor: "#60C5F1", color: '#60C5F1' },


            }
            }

        />
    )

}

export default bookingPickersDay
