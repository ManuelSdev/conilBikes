import * as React from "react";
import TextField from "@mui/material/TextField";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {StaticDatePicker} from "@mui/x-date-pickers/StaticDatePicker";
import bookingPickersDay from "../../booking/bookingPickersDay";
import ContentCard from "../../contentCard/ContentCard";
import ContentCardBody from "../../contentCard/ContentCardBody";
import esLocale from "date-fns/locale/es";
import {
  useGetBookingDatesOnRangeQuery,
  useLazyGetBookingDatesOnRangeQuery,
  useLazyGetBookingsOnDateQuery,
} from "../../../app/store/services/bookingApi";
import format from "date-fns/format";
import {addMonths, set} from "date-fns";
import {Box} from "@mui/system";
import {CircularProgress} from "@mui/material";
import Link from "../../elements/Link";
import {
  setBookings,
  setSelectedDay,
} from "../../../app/store/bookingCalendarSlice";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import endOfMonth from "date-fns/endOfMonth";
import lastDayOfMonth from "date-fns/lastDayOfMonth";
import startOfMonth from "date-fns/startOfMonth";

export default function StaticCalendar() {
  const dispatch = useDispatch();
  const router = useRouter();
  //  console.log('RENDER STATIC CALENDAR')
  //Obtiene el primer día del mes del mes actual que muestra por defecto el calendario
  //Este es el mismo formato que pasa onMonthChange
  //Esta primera fecha, pasada al día 1, se usa en la primera petición para
  //encontrar las reservas que corresponden al mes actual, que es el que muestra por defecto
  //el calendario

  const firstDay = set(new Date(), {
    date: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /**
   * La primera petición se hace con today como fecha de inicio y con el último día del mes como fecha final: dateToRange
   *  El resto de peticiones se lanzan cuando se cambia de mes en el calendario: el método handleMonthChange
   *  recibe el primer día de cada mes y dateToRange le añade el último día del mes
   * Al lanzar la primera petición con today, en lugar de con el primer día del mes actual, se evita
   * que se reciban reservas anteriores al día actual
   */
  const today = set(new Date(), {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const lastDayOfThisMonth = lastDayOfMonth(today);
  console.log("=================", lastDayOfThisMonth.toISOString());
  const [value, setValue] = React.useState(null);

  const [date, setDate] = React.useState(false);
  const [skip, setSkip] = React.useState(true);

  //addMonth sera el extremo del rango para buscar fechas dentro del mes actual
  //Pero, en la primera petición, es posible que from no coincida con el día uno.
  //En ese caso, addMonth sumará un mes completo a la fecha from. Por eso usamos startOfMOnth, para
  //ajustar al primer día del siguiente mes/último momento del mes actual
  const dateToRange = (date) =>
    date
      ? {from: date, to: addMonths(date, 1)}
      : {from: today, to: startOfMonth(addMonths(today, 1))};

  const rangeToISORange = ({from, to}) => ({
    from: from.toISOString(),
    to: to.toISOString(),
  });

  const toParamsToString = (obj) => {
    const searchParams = new URLSearchParams(obj);
    return searchParams.toString();
  };

  const pipe =
    (...fns) =>
    (arg) =>
      fns.reduce((acc, fn) => fn(acc), arg);

  const dateRangeQuery = (date) => pipe(dateToRange, rangeToISORange)(date);

  //onMonthChange pasa la Date así Tue Nov 01 2022 00:00:00 GMT+0100 (hora estándar de Europa central)
  //cuando cambias el mes del calendario
  //Al pasar a ISO, será un día antes porque la Date se registra a las 00:00h e ISO va con 2h menos

  const handleMonthChange = async (newDate) => {
    // console.log("_________", result);
    setDate(newDate);
  };
  const handleChange = async (newValue) => {
    setValue(newValue);
    router.push(`/admin/bookings/${newValue.toISOString()}`);
    dispatch(setSelectedDay(newValue.toISOString()));
  };

  const handleRenderDay = (a, b, c) =>
    //console.log('handleRenderDay') ||
    bookingPickersDay(bookingDatesOnMonth)(a, b, c);

  const {
    data: bookingDatesOnMonth,
    isLoading,
    isSuccess,
    refetch,
    isFetching,
  } = useGetBookingDatesOnRangeQuery(dateRangeQuery(date), {
    //  skip,
    // refetchOnMountOrArgChange: true
  });
  /*
        React.useEffect(() => {
            skip && setSkip(false)
        }, [])
    */
  // console.log('=============', bookingDatesOnMonth)
  //bookingsOnMonth será un array de objetos tipo [{from,to},{from,to},...]
  //con las fechas de las reservas del mes en formato ISO

  return (
    <Box sx={{pb: 3}}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={esLocale}
      >
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          //openTo="year"
          renderDay={handleRenderDay}
          loading={isLoading}
          renderLoading={() => <CircularProgress />}
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={handleChange}
          onMonthChange={handleMonthChange}
          renderInput={(params) => <TextField {...params} />}
          //disabled
        />
      </LocalizationProvider>
    </Box>
  );
}
