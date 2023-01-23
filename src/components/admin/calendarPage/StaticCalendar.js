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

export default function StaticCalendar() {
  const dispatch = useDispatch();
  const router = useRouter();
  //  console.log('RENDER STATIC CALENDAR')
  //Obtiene el primer día del mes del mes actual que muestra por defecto el calendario
  //Este es el mismo formato que pasa onMonthChange
  //Esta primera fecha, pasada al día 1, se usa en la primera petición para
  //encontrar las reservas que corresponden al mes actual, que es el que muestra por defecto
  //el calendario
  /*
  const firstDay2 = set(new Date(), {
    date: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  */
  /**
   * La primera petición se hace con today como fecha de inicio. El resto de peticiones se lanzan
   * cuando se cambia de mes en el calendario y el método handleMonthChange recibe el primer día de cada mes.
   * Al lanzar la primera petición con today, en lugar de con el primer día del mes actual, se evita
   * que se reciban reservas anteriores al día actual
   */
  const today = set(new Date(), {hours: 0, minutes: 0, seconds: 0});

  const [value, setValue] = React.useState(null);

  const [date, setDate] = React.useState(today);
  const [skip, setSkip] = React.useState(true);

  //addMonth sera el extremo del rango para buscar fechas dentro del mes actual
  const dateToRange = (date) => ({from: date, to: addMonths(date, 1)});

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

  const dateRangeQuery = (date) =>
    pipe(dateToRange, rangeToISORange, toParamsToString)(date);

  //onMonthChange pasa la Date así Tue Nov 01 2022 00:00:00 GMT+0100 (hora estándar de Europa central)
  //cuando cambias el mes del calendario
  //Al pasar a ISO, será un día antes porque la Date se registra a las 00:00h e ISO va con 2h menos

  // console.log('cambiaDate', date)
  //const [trigger, { isLoading, isError, data, error }, lastPromiseInfo] = useLazyGetBookingsOnDateQuery();
  const [trigger, result, lastPromiseInfo] =
    useLazyGetBookingDatesOnRangeQuery();

  const handleMonthChange = async (newDate) => {
    //  console.log('handleMonthChanges')
    //await trigger(newDate);
    // console.log("_________", result);
    setDate(newDate);
  };
  const handleChange = async (newValue) => {
    console.log("ssssssssss", new Date());
    console.log("ssssssssss", newValue);
    console.log("ssssssssss", newValue.toISOString());

    const {data, isLoading, isError, error} = await trigger(
      newValue.toISOString(),
    );

    dispatch(setBookings(data));
    console.log("#######-----@@@", data);
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
