import Bike from "../../../models/Bike";
import Booking from "../../../models/Booking";
import dbConnect from "../../../lib/dbConnect";

export async function getBookingDatesOnRange(req) {
  await dbConnect();
  console.log("DATES getBooking api", req.query);
  const {from, to} = req.query;
  const fromDate = new Date(from);
  const toDate = new Date(to);
  const bookingDatesOnRange = await Booking.aggregate([
    {
      //Filtrado de los documentos que interesan
      $match: {
        $or: [
          {from: {$gte: fromDate, $lt: toDate}},
          {to: {$gte: fromDate, $lt: toDate}},
        ],
      },
    },

    {
      //Filtrado de los campos que necesitamos de cada documento...anulas el id con_id:0
      $project: {from: 1, to: 1},
    },
    {
      $group: {
        _id: "test",
        //  from: {$push: "$from"},
        //push los añade todos al array, addToSet solo si no existe en el array
        //Condiciones para incluir fechas anteriore a fromDate ni posteriores a toDate
        //Ya que puede haber inicios de reserva que finalizan el mes siguiente
        //O finales de reserva que iniciaron el mes anterior
        //Evitamos incluir estas fechas que corresponden a meses anteriores o posteriores
        from: {
          $addToSet: {
            $cond: {
              if: {
                $gte: ["$from", fromDate],
              },
              then: "$from",
              else: "$$REMOVE",
            },
          },
        },
        to: {
          $addToSet: {
            $cond: {
              if: {
                $lt: ["$to", toDate],
              },
              then: "$to",
              else: "$$REMOVE",
            },
          },
        },
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
  ]);
  const bookings = await Booking.aggregate([
    {
      //Filtrado de los documentos que interesan
      $match: {
        from: {$gte: fromDate, $lt: toDate},
      },
    },

    {
      //Filtrado de los campos que necesitamos de cada documento...anular _id=>_id:0
      $project: {name: 1, from: 1},
    },
    {
      $group: {
        _id: "test",
        froma: {$addToSet: "$from"},
      },
    },
  ]);
  console.log("------------------- ############", bookingDatesOnRange);
  //console.log("++++++++++++++++++ ############", bookings);
  //Si no coinciden fechas de inicio y fin de reserva, el $project...$intersection devuelve un array vacío como valor de matchedDays
  //En ese caso, el primer elemento de array será undefined y puedo asignarle un objeto con el nullish coalescing assignment
  bookingDatesOnRange[0] ??= {startDates: [], endDates: [], startEndDates: []};
  if (bookingDatesOnRange[0]) {
    bookingDatesOnRange[0].startDates ??= [];
    bookingDatesOnRange[0].endDates ??= [];
    bookingDatesOnRange[0].startEndDates ??= [];
  }
  // startDates[0] ??= {startEndDates: []};

  // const [{startEndDates}] = bookingDatesOnRange;
  //const result = { bookings, startEndDates }
  const [result] = bookingDatesOnRange;
  console.log("newBooking ############", result);

  return result;
}

export default async function handler(req, res) {
  //console.log("#########", req.method);
  // console.log("#########", request(req.method));
  //  const data = req.query
  try {
    const result = await getBookingDatesOnRange(req);
    res.status(201).json(result);
  } catch (err) {
    console.log(
      "ERROR onDateRange api--------------------------------",
      err.message,
    );
    res.status(500);
  }
}
