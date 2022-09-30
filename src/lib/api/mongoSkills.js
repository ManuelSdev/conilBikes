import Booking from "../../models/Booking"

/**
     * El operador de agregación $month devuelve el mes, del 1 al 12, de una fecha
     * $to representa el campo 'to' del documento
     * "month":"to" devuelve el mes de cada campo 'to
     * $eq compara que dos elementos de un array sean igual...porque usamos $expr antes
     */
const bookings = await Booking.find(
    {
        $expr: {
            '$or': [
                { "$eq": [{ "$month": "$from" }, 9] },
                { "$eq": [{ "$month": "$to" }, 9] },
            ]

        }
    }
)

