
import { createSlice, current } from '@reduxjs/toolkit'
import { format, differenceInDays } from 'date-fns'
const initialState = {
    addButton: true,
    formIsActive: true,
    date: {},
    dateError: '',
    size: '',
    type: '',
    range: '',
    bikes: [],

    name: '',
    address: '',
    phone: '',
    mail: '',
    price: 0


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
            const from = new Date(state.date.from)
            const to = new Date(state.date.to)
            const days = differenceInDays(to, from)
            state.bikes.push(action.payload)
            state.price += action.payload.price * days
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setAddress: (state, action) => {
            state.address = action.payload
        },
        setPhone: (state, action) => {
            state.phone = action.payload
        },
        setMail: (state, action) => {
            state.mail = action.payload
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
    setName,
    setAddress,
    setPhone,
    setMail,
    setAnotherForm

} = bookingFormSlice.actions

export default bookingFormSlice.reducer