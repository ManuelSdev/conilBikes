import {createSlice, current} from "@reduxjs/toolkit";
import {format, differenceInDays} from "date-fns";
const initialState = {
  addButton: true,
  formIsActive: true,
  dateError: "",

  size: "",
  type: "",
  range: "",

  date: {},
  bikes: [],
  name: "",
  address: "",
  phone: "",
  mail: "",
  price: 0,
  homeDelivery: false,
  homePickup: false,
};

export const bookingFormSlice = createSlice({
  name: "bookingForm",
  initialState,
  reducers: {
    setAddButton: (state, action) => {
      state.addButton = action.payload;
    },
    setFormIsActive: (state, action) => {
      state.formIsActive = action.payload;
    },
    setDate: (state, action) => {
      const [key, value] = action.payload;
      state.date = {...state.date, [key]: value};
    },
    setDateError: (state, action) => {
      state.dateError = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setRange: (state, action) => {
      state.range = action.payload;
    },
    resetBikes: (state) => {
      state.bikes = [];
    },
    addBike: (state, action) => {
      const from = new Date(state.date.from);
      const to = new Date(state.date.to);
      const days = differenceInDays(to, from);
      state.bikes.push(action.payload);
      state.price += action.payload.price * days;
    },
    deleteBike: (state, action) => {
      const from = new Date(state.date.from);
      const to = new Date(state.date.to);
      const days = differenceInDays(to, from);
      const start = state.bikes.findIndex(
        (bike) => bike._id === action.payload._id,
      );
      state.bikes.splice(start, 1);
      state.price -= action.payload.price * days;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setMail: (state, action) => {
      state.mail = action.payload;
    },
    setHomeDelivery: (state, action) => {
      state.homeDelivery = action.payload;
    },
    setHomePickup: (state, action) => {
      state.homePickup = action.payload;
    },
    setAnotherForm: (state, action) => {
      state.size = "";
      state.type = "";
      state.range = "";
    },
  },
});

export const {
  setFormIsActive,
  setAddButton,
  setDate,
  setDateError,
  setSize,
  setType,
  setRange,
  addBike,
  deleteBike,
  resetBikes,
  setName,
  setAddress,
  setPhone,
  setMail,
  setHomeDelivery,
  setHomePickup,
  setAnotherForm,
} = bookingFormSlice.actions;

export default bookingFormSlice.reducer;
