import mongoose from "mongoose";
import {BOOKING_STATES_MAP} from "../lib/utils/detailsMaps";

const bookingSchema = new mongoose.Schema(
  {
    name: String,
    surname: String,
    mail: String,
    phone: {type: Number, index: true},
    address: String,

    from: {type: Date, index: true},
    to: {type: Date, index: true},
    bikes: {type: [mongoose.ObjectId], index: true},
    price: Number,
    completed: Boolean,
    state: {
      type: String,
      default: "pending",
      enum: {
        values: [...Object.keys(BOOKING_STATES_MAP)],
        message:
          "{VALUE} is not supported as booking state. Use 'pending', 'active','finished' or 'cancelled'",
      },
    },
    homeDelivery: Boolean,
    homePickup: Boolean,
  },
  {timestamps: true},
);

//productSchema.index({ name: 'text' });
//bikeSchema.index({ name: 'text', categories: 'text', size: 'text', description: 'text' })
const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default Booking;
