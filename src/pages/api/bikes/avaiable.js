
import Bike from '../../../models/Bike'
import dbConnect from '../../../lib/dbConnect'
import Booking from '../../../models/Booking'

export async function getBikes(filters) {
    await dbConnect()
    console.log('FILTERS bikes/avaiable api', filters)
    const { from: fromDate, to: toDate, size, type, range } = filters
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
    const avaiableBikes = await Bike.find(
        {
            _id: { $nin: d },
            size: size,
            type: type,
            range: range
        }
    )
    //console.log('activeBookings', activeBookings)
    console.log('AVAIABLE BIKES RES', avaiableBikes.length)
    // console.log('BIKES', bikes)
    return avaiableBikes
}

export default async function handler(req, res) {

    const filters = req.query
    try {
        const result = await getBikes(filters)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR BIKES GET", err.message)
        res.status(500)
    }
}