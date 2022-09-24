

import mongoose from 'mongoose'

const bikeSchema = new mongoose.Schema({
    brand: String,
    model: String,
    size: String,
    type: String,
    range: String,
    price: Number,
    specs: [String],
    description: String,
    images: [String],
    avaiable: Boolean,
    //rented: { type: [Date], index: true },
    bookings: { type: [mongoose.ObjectId] }
})

//productSchema.index({ name: 'text' });
//bikeSchema.index({ name: 'text', categories: 'text', size: 'text', description: 'text' })
const Bike = mongoose.models.Bike || mongoose.model('Bike', bikeSchema);
export default Bike

