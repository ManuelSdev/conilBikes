/* eslint-disable react/display-name */
import {PickersDay, pickersDayClasses} from "@mui/x-date-pickers";
import {format, addYears, addDays} from "date-fns";
import isSameDay from "date-fns/isSameDay";
import {bookingDayColors} from "../../lib/utils/colors";

/**
 * PickersDay se llama por cada día del mes que se muestra en el calendario
 * bookingPickersDay se llamará por cada día y devolverá un <PickerDay/> con la configuración
 * para ese día
 * El parametro date es cada uno de esos días. Necesitas evaluarlo y devolver un <PickerDay/>
 * con el estilo que necesitas para ese date/día
 */

//https://stackoverflow.com/questions/69477377/mui-change-specific-day-color-in-datepicker
const bookingPickersDay =
  (bookingDatesOnMonth) => (date, selectedDates, pickersDayProps) => {
    //  console.log(date)
    console.log("@@@@@@@@@@@", bookingDatesOnMonth);
    const {startDay, endDay, startEndDay} = bookingDayColors;
    // const { bookings, startEndDates } = bookingDatesOnMonth
    const {startDates, endDates, startEndDates} = bookingDatesOnMonth;

    //     not(.Mui-selected)
    const startEndStyles = startEndDates.reduce((acc, startEndDate) => {
      const matchedDay = new Date(startEndDate);
      if (isSameDay(date, matchedDay)) {
        console.log("OK");
        return {
          //    background: startEndDay,
          //    color: 'white',
          /*
                                '&.MuiPickersDay-root': {
                                    '&.Mui-selected': {
                                        background: "red",
                                        '&:hover': {
                                            background: "blue"
                                        }
                                    },
                                },
                                */
          "&:not(.Mui-selected)": {
            background: startEndDay,
            color: "white",
            /*
                    '&:not(hover)': {
                        background: startEndDay,
                        color: 'white',
                    }
                    */
          },
        };
      } else return acc;
      //   if (isSameDay(date, from) && isSameDay(date, from)) return { background: startEndDay, color: 'white' }
    }, {});

    const startStyles = startDates.reduce((acc, startDate) => {
      const from = new Date(startDate);
      //const to = new Date(bookingDate.to)
      if (isSameDay(date, from)) {
        return {
          background: startDay,
          color: "white",
          "&.MuiPickersDay-root.Mui-disabled": {color: "white"},
        };
      } else return acc;
      //   if (isSameDay(date, from) && isSameDay(date, from)) return { background: startEndDay, color: 'white' }
    }, {});

    const endStyles = endDates.reduce((acc, endDate) => {
      //const from = new Date(bookingDate.from)
      const to = new Date(endDate);
      if (isSameDay(date, to)) {
        return {
          background: endDay,
          color: "white",
          "&.MuiPickersDay-root.Mui-disabled": {color: "white"},
        };
      } else return acc;
      //   if (isSameDay(date, from) && isSameDay(date, from)) return { background: startEndDay, color: 'white' }
    }, {});

    //console.log(matchedStyles)
    //Pone disabled los días que no hay reservas
    const modPickersDayProps = () => {
      const fromDays = startDates.filter((startDate) =>
        isSameDay(date, new Date(startDate)),
      );
      const toDays = endDates.filter((endDate) =>
        isSameDay(date, new Date(endDate)),
      );
      //  console.log("++++++++++", f);
      //   console.log("----------", t);
      if (fromDays.length !== 0 || toDays.length !== 0) {
        return {...pickersDayProps};
      } else return {...pickersDayProps, disabled: true};
    };
    //console.log(modPickersDayProps());
    return (
      <PickersDay
        {...pickersDayProps}
        {...modPickersDayProps()}
        // day={nextDay}
        sx={{
          /**CUando queda seleccionado: primero pilla el color del hover por haberlo picado, pero
           * si abres después el calendario, sale se aplica este
           */

          ...startStyles,
          ...endStyles,
          ...startEndStyles,
          // '&.MuiPickersDay-root.Mui-selected': { backgroundColor: "#ED1C24", color: 'blue' },
          /**Cuando picas uno */
          //  '&.MuiPickersDay-root:hover': { backgroundColor: "#FFC000", color: 'blue' },
          //'&.MuiPickersDay-root:not(.Mui-selected)': { backgroundColor: "#EDD3ED", color: 'blue' },
          "&.MuiPickersDay-root.MuiPickersDay-today": {
            borderColor: "#FFC000",
            borderWidth: "2px",
          },
        }}
      />
    );
  };

export default bookingPickersDay;
