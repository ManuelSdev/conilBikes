

import mongoose from 'mongoose'

const bikeModelSchema = new mongoose.Schema({
    brand: String,
    model: String,
    size: String,
    type: String,
    class: String,
    dayPrice: Number,
    specs: [String],
    description: String,
    images: [String],
    avaiable: Boolean,
    rented: { type: [Date], index: true },
    bookings: { type: [mongoose.ObjectId] }
})

//productSchema.index({ name: 'text' });
//bikeSchema.index({ name: 'text', categories: 'text', size: 'text', description: 'text' })
const BikeModel = mongoose.models.BikeModel || mongoose.model('BikeModel', bikeModelSchema);
export default BikeModel

