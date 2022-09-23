
import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema(
    {
        name: String,
        surname: String,
        phone: { type: Number, index: true },
        bikes: { type: [mongoose.ObjectId], index: true },
        address: String,
        price: Number,
        mail: String,
        //date: { type: [Date], index: true },
        from: { type: Date, index: true },
        to: { type: Date, index: true },
        completed: Boolean,

    },
    { timestamps: true }
)

//productSchema.index({ name: 'text' });
//bikeSchema.index({ name: 'text', categories: 'text', size: 'text', description: 'text' })
const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
export default Booking