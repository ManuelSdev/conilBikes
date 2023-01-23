import Bike from "../../../models/Bike";
import dbConnect from "../../../lib/dbConnect";
import mongoose from "mongoose";

export async function getBikes(req) {
  const ObjectId = mongoose.Types.ObjectId;
  await dbConnect();
  // const bikes = await Bike.find(filters)
  const {arrayOfBikesIds} = req.body;
  console.log("llll", arrayOfBikesIds);
  const toObjectId = arrayOfBikesIds.map((id) => ObjectId(id));
  //Agrega project al pipe para mandar menos datos a BookingDetail
  const bikes = await Bike.aggregate([
    {
      $match: {
        _id: {
          $in: toObjectId,
        },
      },
    },
  ]);
  // console.log("======", bikes);
  return bikes;
}

export default async function handler(req, res) {
  // const filters = req.query;
  console.log("** req.body: ", req.body);
  try {
    await dbConnect();
    const result = await getBikes(req);

    res.status(201).json(result);
  } catch (err) {
    console.log("ERROR BIKES GET", err.message);
    res.status(500);
  }
}
