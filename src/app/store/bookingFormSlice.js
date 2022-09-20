
import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    date: {},
    size: '',
    type: '',
    range: '',
    bikes: [],


}

export const bookingFormSlice = createSlice({
    name: 'bookingForm',
    initialState,
    reducers: {
        setDate: (state, action) => {
            console.log('******************', action.payload)
            const [key, value] = action.payload
            state.date = { ...state.date, [key]: value }
        },
        setSize: (state, action) => {
            state.size = action.payload
        },
        setType: (state, action) => {
            state.type = action.payload
        },
        setRange: (state, action) => {
            state.range = action.payload
        },
        setBikes: (state, action) => {
            state.bikes = action.payload
        },

    }
})

export const {
    setDate,
    setSize,
    setType,
    setRange,
    setBikes

} = bookingFormSlice.actions

export default bookingFormSlice.reducer