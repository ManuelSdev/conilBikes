
import Bike from '../../models/Bike'
import Booking from '../../models/Booking'
import dbConnect from '../../lib/dbConnect'

export async function getClasses(filters) {
    await dbConnect()
    console.log('FILTERS range api', filters)
    const { from: fromDate, to: toDate, size, type } = filters
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
    const avaiableBikesRanges = await Bike.distinct(
        'range',
        {
            _id: { $nin: d },
            size: size,
            type: type
        }
    )
    console.log('activeBookings', activeBookings)
    console.log('avaiableBikesRanges', avaiableBikesRanges)
    // console.log('BIKES', bikes)
    return avaiableBikesRanges
}

export default async function handler(req, res) {

    const filters = req.query
    try {
        const result = await getClasses(filters)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR BIKES GET", err.message)
        res.status(500)
    }
}