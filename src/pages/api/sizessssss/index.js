import Bike from "../../../models/Bike"
import dbConnect from "../../../lib/dbConnect"

export async function getSizes(...filters) {
    await dbConnect()
    console.log('FILTERS', filters)
    const [{ from, to }] = filters
    console.log('sss', from)
    //  const bikes = await Bike.find(...filters)
    //const bikes = await Bike.distinct('size', ...filters)
    const bikes = await Bike.distinct('size', { 'rented.0': { $gt: from } })
    // console.log('BIKES', bikes)
    return bikes
}
export default async function handler(req, res) {
    const filters = req.query

    console.log('query', req.query)
    // console.log(feature)
    //  console.log(filters)
    try {
        await dbConnect()
        // const result = await getBikes({}, { size: 1, _id: 0 })
        //const result = await getBikes('size', { type: 'road', class: ['d', 'a'] })
        const result = await getSizes(filters)

        console.log(result)
        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR BIKES GET", err.message)
        res.status(500)
    }
}