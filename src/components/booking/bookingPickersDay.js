
import { PickersDay } from '@mui/x-date-pickers';
import { format, addYears, addDays } from 'date-fns'

//https://stackoverflow.com/questions/69477377/mui-change-specific-day-color-in-datepicker
const bookingPickersDay = (date, selectedDates, pickersDayProps) => {
    // console.log(date)

    const nextDay = addDays(new Date(), 1)
    //console.log('++++++++++++++++', nextDay)
    selectedDates = nextDay
    console.log(selectedDates)
    return (
        <PickersDay
            {...pickersDayProps}
            // day={nextDay}
            sx={{
                /**CUando queda seleccionado: primero pilla el color del hover por haberlo picado, pero
                 * si abres después el calendario, sale se aplica este
                 */
                //   '&.MuiPickersDay-root.Mui-selected': { backgroundColor: "#ED1C24", color: 'blue' },
                /**Cuando picas uno */
                '&.MuiPickersDay-root:hover': { backgroundColor: "#FFC000", color: 'blue' },
                //'&.MuiPickersDay-root:not(.Mui-selected)': { backgroundColor: "#EDD3ED", color: 'blue' },
                //'&.MuiPickersDay-root.MuiPickersDay-today': { backgroundColor: "#60C5F1", color: '#60C5F1' },


            }
            }

        />
    )

}

export default bookingPickersDay
