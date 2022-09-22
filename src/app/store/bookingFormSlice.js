
import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    addButton: true,
    formIsActive: true,
    date: {},
    dateError: '',
    size: '',
    type: '',
    range: '',
    bikes: [],

}

export const bookingFormSlice = createSlice({
    name: 'bookingForm',
    initialState,
    reducers: {
        setAddButton: (state, action) => {
            state.addButton = action.payload
        },
        setFormIsActive: (state, action) => {
            state.formIsActive = action.payload
        },
        setDate: (state, action) => {
            //  console.log('******************', action.payload)
            const [key, value] = action.payload
            state.date = { ...state.date, [key]: value }
        },
        setDateError: (state, action) => {
            state.dateError = action.payload
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
            state.bikes.push(action.payload)
        },
        setAnotherForm: (state, action) => {
            state.size = ''
            state.type = ''
            state.range = ''
        },




    }
})

export const {
    setFormIsActive,
    setAddButton,
    setDate,
    setDateError,
    setSize,
    setType,
    setRange,
    setBikes,
    setAnotherForm

} = bookingFormSlice.actions

export default bookingFormSlice.reducer