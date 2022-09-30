
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
export async function getBooking(dates) {

    await dbConnect()
    console.log('DATES getBooking api', dates)
    const { from, to } = dates
    const fromDate = new Date(from)
    const toDate = new Date(to)
    const bookings = await Booking.aggregate(
        [
            {
                $match: {
                    $or: [
                        { from: { $gte: fromDate, $lt: toDate } },
                        { to: { $gte: fromDate, $lt: toDate } }
                    ]
                }
            },
        ]
    )
    console.log('newBooking ############', bookings)


    return bookings
}

const request = method => req => {
    switch (method) {
        case 'GET':
            console.log('------------')
            return getBooking(req.query)
            break;
        case 'POST':
            return createBooking(req.body)
            break;
        default:
            break;
    }
}

export default async function handler(req, res) {
    console.log('#########', req.method)
    console.log('#########', request(req.method))

    //  const data = req.query
    try {
        const result = await request(req.method)(req)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR POST CREATE BOOKING", err.message)
        res.status(500)
    }
}