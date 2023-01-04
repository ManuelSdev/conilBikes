import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    selectedDay: ""
}

export const bookingsCalendarSlice = createSlice({
    name: 'bookingsCalendar',
    initialState,
    reducers: {
        selectDay: (state, action) => {
            state.selectedDay = action.payload
        },


    },
})

export const { selectDay } = bookingsCalendarSlice.actions

export default bookingsCalendarSlice.reducer