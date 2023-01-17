import {createSlice, current} from "@reduxjs/toolkit";

const initialState = {
  selectedDay: "",
  bookingsStarting: [],
  bookingsEnding: [],
};

export const bookingsCalendarSlice = createSlice({
  name: "bookingsCalendar",
  initialState,
  reducers: {
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
    setBookingsStarting: (state, action) => {
      state.bookingsStarting = action.payload.start;
    },
    setBookingsEnding: (state, action) => {
      state.bookingsStarting = action.payload.end;
    },
    setBookings: (state, action) => {
      state.bookingsStarting = action.payload.start;
      state.bookingsEnding = action.payload.end;
    },
  },
});

export const {
  setSelectedDay,
  setBookingsStarting,
  setBookingsEnding,
  setBookings,
} = bookingsCalendarSlice.actions;

export default bookingsCalendarSlice.reducer;
