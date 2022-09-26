
import { format, addYears, differenceInDays } from 'date-fns'

export const getFormIsActive = state => state.bookingForm.formIsActive

export const getAddButton = state => state.bookingForm.addButton
export const getDate = state => state.bookingForm.date
export const getDateError = state => state.bookingForm.dateError
export const getSize = state => state.bookingForm.size
export const getType = state => state.bookingForm.type
export const getRange = state => state.bookingForm.range

export const getName = state => state.bookingForm.name
export const getAddress = state => state.bookingForm.address
export const getPhone = state => state.bookingForm.phone
export const getMail = state => state.bookingForm.mail
export const getPrice = state => state.bookingForm.price

export const getContactInfo = state =>
    [
        state.bookingForm.name,
        state.bookingForm.mail,
        state.bookingForm.phone,
        state.bookingForm.address,

    ]


export const getBikes = state => state.bookingForm.bikes
export const getNumberOfBikes = state => state.bookingForm.bikes.length
