
import Bike from '../../../models/Bike'
import Booking from '../../../models/Booking'
import dbConnect from '../../../lib/dbConnect'


export async function createBooking(data) {
    await dbConnect()
    console.log('DATA createBooking api', data)
    const newBooking = await new Booking(data)
    console.log('newBooking ############', newBooking)
    const savedBooking = await newBooking.save()
    console.log('savedBooking ############', savedBooking)

}
export async function getBooking(dates) {

    await dbConnect()
    console.log('DATES getBooking api', dates)
    const { from, to } = dates
    const fromDate = new Date(from)
    const toDate = new Date(to)
    const bookingDatesOnRange = await Booking.aggregate(
        [
            {
                //Filtrado de los documentos que interesan
                $match: {
                    $or: [
                        { from: { $gte: fromDate, $lt: toDate } },
                        { to: { $gte: fromDate, $lt: toDate } }
                    ]
                }
            },
            {
                //Filtrado de los campos que necesitamos de cada documento...anulas el id con_id:0
                $project: { from: 1, to: 1 }
            },
            {
                $group: {
                    _id: 'test',
                    from: { $push: '$from' },
                    to: { $push: '$to' }

                }
            },
            {
                $project: {
                    _id: 0,
                    startDates: '$from',
                    endDates: '$to',
                    startEndDates: {
                        $setIntersection: [
                            '$from', '$to'
                        ]
                    }
                }
            }
        ]
    )
    const bookings = await Booking.aggregate(
        [
            {
                //Filtrado de los documentos que interesan
                $match: {
                    $or: [
                        { from: { $gte: fromDate, $lt: toDate } },
                        { to: { $gte: fromDate, $lt: toDate } }
                    ]
                }
            },
            {
                //Filtrado de los campos que necesitamos de cada documento...anular _id=>_id:0
                $project: { from: 1, to: 1 }
            },

        ]
    )
    console.log('------------------- ############', bookingDatesOnRange)
    console.log('++++++++++++++++++ ############', bookings)
    //Si no coinciden fechas de inicio y fin de reserva, el $project...$intersection devuelve un array vacío como valor de matchedDays
    //En ese caso, el primer elemento de array será undefined y puedo asignarle un objeto con el nullish coalescing assignment
    //bookingDatesOnRange[0] ??= { startEndDates: [] }

    const [{ startEndDates }] = bookingDatesOnRange
    //const result = { bookings, startEndDates }
    const [result] = bookingDatesOnRange
    console.log('newBooking ############', bookingDatesOnRange)


    return result
}

const request = method => req => {
    switch (method) {
        case 'GET':
            console.log('------------')
            return getBooking(req.query)
            break;
        case 'POST':
            return createBooking(req.body)
            break;
        default:
            break;
    }
}

export default async function handler(req, res) {
    console.log('#########', req.method)
    console.log('#########', request(req.method))

    //  const data = req.query
    try {
        const result = await request(req.method)(req)

        res.status(201).json(result)

    } catch (err) {
        console.log("ERROR POST  BOOKING", err.message)
        res.status(500)
    }
}