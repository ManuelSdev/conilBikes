import Bike from "../../../models/Bike";
import Booking from "../../../models/Booking";
import dbConnect from "../../../lib/dbConnect";

export async function createBooking(data) {
  await dbConnect();
  console.log("DATA createBooking api", data);
  const newBooking = await new Booking(data);
  console.log("newBooking ############", newBooking);
  const savedBooking = await newBooking.save();
  console.log("savedBooking ############", savedBooking);
}
export async function getBooking(_id) {
  await dbConnect();
  console.log("BOOKINGS getBooking api", _id);

  const [booking] = await Booking.find({_id});
  return booking;
}

const request = (req) => {
  switch (req.method) {
    case "GET":
      console.log("------------ GETTTTTTTT");
      const {bookingId} = req.query;
      return getBooking(bookingId);
      break;
    case "POST":
      return createBooking(req.body);
      break;
    default:
      break;
  }
};

export default async function handler(req, res) {
  console.log("#########", req.query);
  // console.log("#########", request(req.method));

  //  const data = req.query
  try {
    const result = await request(req);

    res.status(201).json(result);
  } catch (err) {
    console.log("ERROR POST  BOOKING", err.message);
    res.status(500);
  }
}
