

import mongoose from 'mongoose'

const bikeSchema = mongoose.Schema({
    brand: String,
    model: String,
    size: String,
    category: String,
    class: String,
    dayPrice: Number,
    specs: [String],
    description: String,
    images: [String],
    avaiable: Boolean,
    rented: { type: [Date], index: true },

})

//productSchema.index({ name: 'text' });
//bikeSchema.index({ name: 'text', categories: 'text', size: 'text', description: 'text' })
const Bike = mongoose.models.Bike || mongoose.model('Bike', bikeSchema);
export default Bike