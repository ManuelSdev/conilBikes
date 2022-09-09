
import Bike from '../../../models/Bike'
import dbConnect from '../../../lib/dbConnect'

export async function getBikes(filters) {
    await dbConnect()
    console.log('FILTERS', filters)
    const bikes = await Bike.find(filters)
    console.log('BIKES', bikes)
    return bikes
}

export default async function handler(req, res) {

    const filters = req.query
    try {
        await dbConnect()
        const result = await getBikes(filters)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR BIKES GET", err.message)
        res.status(500)
    }
}
