import mongoose from "mongoose";
import {
  BIKE_STATES_MAP,
  BIKE_RANGES_MAP,
  BIKE_TYPES_MAP,
  BIKE_SIZES_MAP,
} from "../lib/utils/detailsMaps";

const bikeSchema = new mongoose.Schema({
  brand: String,
  model: String,
  size: {
    type: String,
    enum: {
      values: [...Object.keys(BIKE_SIZES_MAP)],
      message:
        "{VALUE} is not supported as bike size. Use 'pending', 'active','finished' or 'cancelled'",
    },
  },
  type: {
    type: String,
    enum: {
      values: [...Object.keys(BIKE_TYPES_MAP)],
      message:
        "{VALUE} is not supported as bike type. Use 'pending', 'active','finished' or 'cancelled'",
    },
  },
  range: {
    type: String,
    enum: {
      values: [...Object.keys(BIKE_RANGES_MAP)],
      message:
        "{VALUE} is not supported as bike range. Use 'pending', 'active','finished' or 'cancelled'",
    },
  },
  state: {
    type: String,
    default: "avaiable",
    enum: {
      values: [...Object.keys(BIKE_STATES_MAP)],
      message:
        "{VALUE} is not supported as bike state. Use 'pending', 'active','finished' or 'cancelled'",
    },
  },
  price: Number,
  specs: [String],
  description: String,
  images: [String],
  avaiable: Boolean,
  //rented: { type: [Date], index: true },
  bookings: {type: [mongoose.ObjectId]},
});

//productSchema.index({ name: 'text' });
//bikeSchema.index({ name: 'text', categories: 'text', size: 'text', description: 'text' })
const Bike = mongoose.models.Bike || mongoose.model("Bike", bikeSchema);
export default Bike;
