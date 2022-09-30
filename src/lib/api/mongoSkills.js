import Booking from "../../models/Booking"

/**
     * El operador de agregación $month devuelve el mes, del 1 al 12, de una fecha
     * $to representa el campo 'to' del documento -> solo se usa $ cuando pones/interpolas el campo 
     * como valor,  cuando es una clave no hace falta
     * "month":"to" devuelve el mes de cada campo 'to
     * $eq compara que dos elementos de un array sean igual...porque usamos $expr antes
     */
const test1 = await Booking.find(
    {
        $expr: {
            '$or': [
                { "$eq": [{ "$month": "$from" }, 9] },
                { "$eq": [{ "$month": "$to" }, 9] },
            ]

        }
    }
)
//Funciona: es un find normal...se descubrió más adelante que hace conversión de String a Date
const test2 = await Booking.find(
    {
        $or: [
            { from: { $gte: fromDate, $lt: toDate } },
            { to: { $gte: fromDate, $lt: toDate } }
        ]

    },
    //Selecciona solo el campo que pongas aquí
    {
        from: 1,
        to: 1,
        _id: 0
    }
)

//************************************DATES MISTERY******************************************
/**
 * No funciona como  test2
 */
const test3 = await Booking.aggregate(
    [
        {
            $match: {
                $or: [
                    { from: { $gte: fromDate, $lt: toDate } },
                    { to: { $gte: fromDate, $lt: toDate } }
                ]
            }
        },
    ]
)
/**
 * Este solo funciona para price, las fechas no funcionan con $match + $or
 */
const test4 = await Booking.aggregate(
    [
        {
            $match: {
                $or: [
                    { from: { $gte: fromDate, $lt: toDate } },
                    { price: { $gte: 90, $lt: 300 } }
                ]
            }
        },
    ]
)
/**
 * Aquí tampoco funciona la fecha
 */
const test5 = await Booking.aggregate(
    [
        {
            $match: {
                from: { $gte: fromDate }
            }
        },
    ]
)
/**
 * Tampoco metiendo la fecha exacta que 
 */
const test6 = await Booking.aggregate(
    [
        {
            $match: {
                from: { $gte: '2022-09-29T22:00:00.000+00:00' }

            }
        },
    ]
)
/**
 * Ni sin usar operadores
 */
const test7 = await Booking.aggregate(
    [
        {
            $match: {
                from: '2022-09-29T22:00:00.000+00:00'

            }
        },
    ]
)
/**
 * Esto SI RULA con la fecha exacta copiada de atlas
 */
const test8 = await Booking.aggregate(
    [
        {
            $match: {
                from: new Date('2022-09-29T22:00:00.000+00:00')

            }
        },
    ]
)

/**
 * Esto SI RULA con la fecha exacta copiada del retorno del documento en la consola VScode
 * pero si la metes sin new Date() tampoco funciona
 */
const test9 = await Booking.aggregate(
    [
        {
            $match: {
                from: new Date('2022-09-29T22:00:00.000Z')

            }
        },
    ]
)
/**
 **********************CLAVE DE MOMENTO*************************
 * En mongo, estoy guardando las fechas como Date, no como String. Parece que, si uso find() como en test2,
 * convierte el string fromDate a Date y rula pero, si uso aggregate(), no hace la conversión y por eso no matchea,
 * salvo que conviertas a mano con new Date()
 * TOTAL: que si en todos los test anteriores convierto con new Date(), RULA
 */

//Este rula por eso, porque con find() parece que hace la conversión
const test10 = await Booking.find(

    {
        from: '2022-09-29T22:00:00.000+00:00'
    }

)

/**
 **********OPCIÓN B: usar expresiones de agregación rollo true false en lugar de match directo de valores
 * $match funciona como find: usar expresiones tb requiere $expr, como en test1
 * VUAMOS
 */

/**
 * RULA: como el field from del documento pasa como valor, no como clave, lleva $ y va entre ''
 * ENTONCES CLAVE: Ahora si hace la conversión del String fromDate a Date
 */
const test11 = await Booking.aggregate(
    [
        {
            $match: {
                $expr: {
                    $gte: ['$from', fromDate]
                }
            }
        },
    ]
)
/**
 * PERO...
 * Lo mismo con $lt, no rula ni aquí ni en mongosh, a pesar de cumplir la condición
 */
const test12 = await Booking.aggregate(
    [
        {
            $match: {
                $expr: {
                    $lt: ['$from', toDate]
                }
            }
        },
    ]
)
/**
 * Tampoco funciona haciendo la condicion a la inversa para poder usar $gte
 */
const test13 = await Booking.aggregate(
    [
        {
            $match: {
                $expr: {
                    $gt: [toDate, '$from']
                }
            }
        },
    ]
)
/**
 * PERO todo funciona si conviertes a Date
 */
const test14 = await Booking.aggregate(
    [
        {
            $match: {
                $expr: {
                    $gt: [new Date(toDate), '$from']
                    //  $lt: ['$from', new Date(toDate)]
                }
            }
        },
    ]
)

/**
 * ENTONCES...TOTAL: Puedes convertir a Date y usar ambas opciones...
 */
//OPCION A: corta
const opcionA = await Booking.aggregate(
    [
        {
            $match: {
                $or: [
                    { from: { $gte: fromDate, $lt: toDate } },
                    { to: { $gte: fromDate, $lt: toDate } }
                ]
            }
        },
    ]
)
//OPCION B: igual pero más larga...interesante haberla entendido
const opcionB = await Booking.aggregate(
    [
        {
            $match: {
                $expr: {
                    $or: [
                        {
                            $and: [
                                { $gte: ['$from', fromDate] },
                                { $lt: ['$from', toDate] }
                            ]
                        },
                        {
                            $and: [
                                { $gte: ['$to', fromDate] },
                                { $lt: ['$to', toDate] }
                            ]
                        }
                    ]


                }
            }
        },
    ]
)