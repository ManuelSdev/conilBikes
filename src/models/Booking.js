
import mongoose from 'mongoose'

const bookingSchema = mongoose.Schema({
    name: String,
    surname: String,
    phone: { type: Number, index: true },
    bikesIds: { type: [String], index: true },
    address: String,
    totalPrice: Number,


})

//productSchema.index({ name: 'text' });
//bikeSchema.index({ name: 'text', categories: 'text', size: 'text', description: 'text' })
const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
export default Booking