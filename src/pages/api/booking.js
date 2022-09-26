
import Bike from '../../models/Bike'
import Booking from '../../models/Booking'
import dbConnect from '../../lib/dbConnect'

export async function createBooking(data) {
    await dbConnect()
    console.log('DATA createBooking api', data)
    const newBooking = await new Booking(data)
    console.log('newBooking ############', newBooking)
    const savedBooking = await newBooking.save()
    console.log('savedBooking ############', savedBooking)

}

export default async function handler(req, res) {

    const data = req.body
    try {
        const result = await createBooking(data)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR POST CREATE BOOKING", err.message)
        res.status(500)
    }
}