import {useState, useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
  CalendarPicker,
  LocalizationProvider,
  esES,
  DatePicker,
} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import esLocale from "date-fns/locale/es";
import {format, addYears, addDays} from "date-fns";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {
  getDate,
  getDateError,
  getNumberOfBikes,
} from "../../app/store/selectors";
import {setDate, setDateError} from "../../app/store/bookingFormSlice";
import compareAsc from "date-fns/compareAsc";

const DateSelect = () => {
  //  console.log('oooooo')
  const dispatch = useDispatch();
  //Si ya hay alguna bici seleccionada, bikes!=0 y se bloquea la selección de fecha
  const bikes = useSelector(getNumberOfBikes);
  const isoDate = useSelector(getDate);
  const errorDate = useSelector(getDateError);
  const date = {
    from: isoDate.from ? new Date(isoDate.from) : null,
    to: isoDate.to ? new Date(isoDate.to) : null,
  };

  //const [trigger, result, lastPromiseInfo] = useLazyGetSizesQuery();

  const handleChange = (picker) => (newValue) => {
    // console.log('handleChange', [picker, newValue])
    //picker será 'from' o 'to'
    //  dateIsValid(picker, newValue) &&
    newValue && dispatch(setDate([picker, newValue.toISOString()]));
  };
  const dateIsValid = (picker, newValue) => {
    if ((picker === "from" && !!!date.to) || (picker === "to" && !!!date.from))
      return true;

    //result será 1 cuando la primera fecha sea mayor a la segunda
    const result =
      picker === "from"
        ? compareAsc(date.to, newValue)
        : compareAsc(newValue, date.from);
    return result === 1 ? true : false;
  };

  const handleError = (reason, value) => {
    reason
      ? dispatch(
          setDateError(
            `Seleccione una fecha superior a ${format(
              date.from,
              "dd/MM/yyyy",
            )} o modifique la fecha de inicio`,
          ),
        )
      : // dispatch(setDateError('hola'))
        dispatch(setDateError(""));
    console.log(reason);
  };

  // console.log(date.from.getMonth())
  const handleValidate = () => {
    console.log("validando...");
    if (!!!date.from || !!!date.to || !!errorDate) {
      return false;
    } else {
      return true;
    }
  };

  const handleClose = () => {};
  const isFirstRender = useRef(true);

  const convert = (date) =>
    date.from &&
    date.to && {from: date.from.toISOString(), to: date.to.toISOString()};

  const adapter = new AdapterDateFns();

  const today = adapter.date(Date());

  const nextDay = (date) => adapter.addDays(date, 1);

  const nextYear = adapter.addYears(today, 1);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={esLocale} // use 'bg' locale for date parser/formatter
    >
      <Stack
        direction="row"
        spacing={1}
      >
        <DatePicker
          readOnly={!!bikes}
          label="Inicio"
          disablePast
          //      disableMaskedInput={true}
          inputFormat="dd/MM/yyyy"
          value={date.from}
          onChange={handleChange("from")}
          //  onAccept={handleChange('from')}

          //https://github.com/mui/material-ui-pickers/issues/1751
          renderInput={(params) => <TextField {...params} />}
          // renderDay={bookingPickersDay}
          minDate={nextDay(today)}
          maxDate={nextYear}
          toolbarTitle="Seleccione fecha de inicio"
          //   onError={handleError}
          //  onAccept={handleRtkQuery}
          // onClose={() => console.log('oncloseee')}
          defaultCalendarMonth={
            date.to && new Date(date.to.getFullYear(), date.to.getMonth())
          }
        />
        <DatePicker
          readOnly={!!bikes}
          label="Fin"
          disablePast
          // disableMaskedInput={true}
          inputFormat="dd/MM/yyyy"
          value={date.to}
          onChange={handleChange("to")}
          // onAccept={handleChange('to')}
          // onChange={handleChange('to')}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={errorDate && errorDate}
            />
          )}
          minDate={nextDay(date.from)}
          maxDate={nextYear}
          onError={handleError}
          defaultCalendarMonth={
            date.from && new Date(date.from.getFullYear(), date.from.getMonth())
          }
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default DateSelect;
