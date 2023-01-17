import Bike from "../../../models/Bike";
import Booking from "../../../models/Booking";
import dbConnect from "../../../lib/dbConnect";
//TODO mete los catch dentro de cada función concreta

export async function getBooking(_id) {
  await dbConnect();
  const [booking] = await Booking.find({_id});
  return booking;
}

export async function createBooking(data) {
  await dbConnect();
  const newBooking = await new Booking(data);
  const savedBooking = await newBooking.save();
}

export async function updateBooking(data) {
  await dbConnect();
  const {_id, state} = data;
  const updatedBookingInfo = await Booking.updateOne({_id}, {$set: {state}});
  return updatedBookingInfo;
}

const request = (req) => {
  switch (req.method) {
    case "GET":
      console.log("------------ GETTTTTTTT");
      const {_id} = req.query;
      return getBooking(_id);
      break;
    case "POST":
      return createBooking(req.body);
      break;
    case "PATCH":
      console.log("------------ PATCH************");
      return updateBooking(req.body);
      break;
    default:
      break;
  }
};

export default async function handler(req, res) {
  console.log("//////////////////", req.query);
  try {
    const result = await request(req);

    res.status(201).json(result);
  } catch (err) {
    console.log("ERROR POST  BOOKING", err.message);
    res.status(500);
  }
}
