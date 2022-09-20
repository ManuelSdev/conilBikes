
import Bike from '../../models/Bike'
import Booking from '../../models/Booking'
import dbConnect from '../../lib/dbConnect'

export async function getTypes(filters) {
    await dbConnect()
    console.log('FILTERS type api', filters)

    const { from: fromDate, to: toDate, size } = filters
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
    const avaiableBikesTypes = await Bike.distinct(
        'type',
        {
            _id: { $nin: d },
            size: size
        }
    )
    console.log('activeBookings', activeBookings)
    console.log('avaiableBikesTypes', avaiableBikesTypes)
    // console.log('BIKES', bikes)
    return avaiableBikesTypes
}

export default async function handler(req, res) {

    const filters = req.query
    try {
        const result = await getTypes(filters)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR BIKES GET", err.message)
        res.status(500)
    }
}