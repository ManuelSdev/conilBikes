
import Bike from '../../models/Bike'
import Booking from '../../models/Booking'
import dbConnect from '../../lib/dbConnect'

export async function getSizes(filters) {
    await dbConnect()
    console.log('FILTERS', filters)
    const { from: fromDate, to: toDate } = filters
    // console.log('toDate en ISO', ISODate(toDate))
    //Consideramos que el día de entrega o recogida no se puede reservar
    // por eso usa  gt/lt en lugar de gte/lte 

    const activeBookings = await Booking.find(
        {

            $or: [
                { from: { $lte: toDate, $gt: fromDate } },
                { to: { $gte: fromDate, $lt: toDate } }
            ]

        },
        //Selecciona solo el campo que pongas aquí
        {
            bikes: 1, _id: 0
        }
    )

    const rentedBikesIds = activeBookings.map(booking => booking.bikes)
    const b = () => {
        let a = []
        rentedBikesIds.forEach(arr => { a = [...a, ...arr] })
        return a
    }
    const d = b()
    const avaiableBikesSizes = await Bike.distinct(
        'size',
        { _id: { $nin: d } }
    )
    console.log('activeBookings', activeBookings)
    console.log('avaiableBikesSizes', avaiableBikesSizes)
    // console.log('BIKES', bikes)
    return avaiableBikesSizes
}

export default async function handler(req, res) {

    const date = req.query
    try {
        const result = await getSizes(date)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR BIKES GET", err.message)
        res.status(500)
    }
}

/*
db.hotels.find({
    $and: [
        {
            bookings: {
                $elemMatch: {

                    $or: [
                        { from: { $gte: to_date } },
                        { to: { $lte: from_date } }
                    ]

                }
            }
        },
        {
            bookings: {
                $not: {
                    $elemMatch: {

                        $or: [
                            { from: { $gte: from_date, $lte: to_date } },
                            { to: { $lte: to_date, $gte: from_date } }
                        ]

                    }
                }
            }
        }]
})

*/