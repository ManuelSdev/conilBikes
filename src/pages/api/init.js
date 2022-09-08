import dbConnect from "../../lib/dbConnect";
import { bikes } from '../../../fake/bikes'
import Bike from "../../models/Bike";
export default async function handler(req, res) {
    await dbConnect()
    try {
        const { deletedCount } = await Bike.deleteMany();
        console.log(`Eliminados ${deletedCount} productos.`);
        const result = await Bike.insertMany(bikes)
        res.status(201).json({ result: result })

    } catch (err) {
        console.log("ERROR PRODUCT INIT", err.message)
        res.status(500)
    }
}
