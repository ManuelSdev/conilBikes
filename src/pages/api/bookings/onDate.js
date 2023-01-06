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
export async function getBookings(date) {
  await dbConnect();
  console.log("onDATES getBooking api", date);
  // const {from, to} = dates;
  const targetDate = new Date(date);
  //const toDate = new Date(to);
  const bookingDatesOnRange = await Booking.aggregate([
    {
      //Filtrado de los documentos que interesan
      $match: {
        $or: [{from: targetDate}, {to: targetDate}],
      },
    },
    {
      $lookup: {
        from: "bikes",
        localField: "bikes",
        foreignField: "_id",
        as: "bicis",
      },
    },
    /**
     * Esto hace que bicis no sea un array
      {
      $unwind: "$bicis",
    },
     */

    /*
    {
      //Filtrado de los documentos que interesan
      $match: {from: targetDate},
    },
    */
    /*
    {
      //Filtrado de los campos que necesitamos de cada documento...anulas el id con_id:0
      $project: {from: 1, to: 1},
    },
    {
      $group: {
        _id: "test",
        from: {$push: "$from"},
        to: {$push: "$to"},
      },
    },
    {
      $project: {
        _id: 0,
        startDates: "$from",
        endDates: "$to",
        startEndDates: {
          $setIntersection: ["$from", "$to"],
        },
      },
    },
*/

    {
      $group: {
        _id: "test",
        start: {
          $push: {
            $cond: [
              {$eq: ["$from", targetDate]},
              {
                _id: "$_id",
                name: "$name",
                mail: "$mail",
                phone: "$phone",
                address: "$address",
                from: "$from",
                to: "$to",
                price: "$price",
                bicis: "$bicis",
              },
              "$$REMOVE",
            ],
          },
        },
        end: {
          $push: {
            $cond: [
              {$eq: ["$to", targetDate]},
              {
                _id: "$_id",
                name: "$name",
                mail: "$mail",
                phone: "$phone",
                address: "$address",
                from: "$from",
                to: "$to",
                price: "$price",
                bicis: "$bicis",
              },
              "$$REMOVE",
            ],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        start: {
          _id: 1,
          name: 1,
          mail: 1,
          phone: 1,
          address: 1,
          from: 1,
          to: 1,
          price: 1,
          bicis: {
            brand: 1,
            model: 1,
            size: 1,
            range: 1,
          },
        },
        end: {
          _id: 1,
          name: 1,
          mail: 1,
          phone: 1,
          address: 1,
          from: 1,
          to: 1,
          price: 1,
          bicis: {
            brand: 1,
            model: 1,
            size: 1,
            range: 1,
          },
        },
      },
    },
  ]);

  console.log("------------------- ############", bookingDatesOnRange);
  //Si no coinciden fechas de inicio y fin de reserva, el $project...$intersection devuelve un array vacío como valor de matchedDays
  //En ese caso, el primer elemento de array será undefined y puedo asignarle un objeto con el nullish coalescing assignment
  //bookingDatesOnRange[0] ??= { startEndDates: [] }

  // const [{startEndDates}] = bookingDatesOnRange;
  //const result = { bookings, startEndDates }
  const [result] = bookingDatesOnRange;
  console.log("newBooking ############", bookingDatesOnRange);

  return result;
}

export default async function handler(req, res) {
  const {date} = req.query;
  //console.log("----------------#########", req.query);

  try {
    const result = await getBookings(date);

    res.status(201).json(result);
  } catch (err) {
    console.log("ERROR onDate api  BOOKING", err.message);
    res.status(500);
  }
}
