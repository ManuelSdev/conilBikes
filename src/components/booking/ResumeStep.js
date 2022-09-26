import { Divider, Paper, Stack } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { getContactInfo, getDate, getPrice } from "../../app/store/selectors"
import ContactInfo from "./ContactInfo"
import DateSelect from "./DateSelect"
import SelectedBikesTable from "./SelectedBikesTable"
import { Typography } from "@mui/material"
import { format, addYears, differenceInDays } from 'date-fns'
import { useState } from "react"


const ResumeStep = () => {
    const isoDate = useSelector(getDate)
    const totalPrice = useSelector(getPrice)
    const info = useSelector(getContactInfo)
    const data = ['Nombre', 'Email', 'Teléfono', 'Dirección']

    const date = {
        from: isoDate.from ? new Date(isoDate.from) : null,
        to: isoDate.to ? new Date(isoDate.to) : null
    }
    const days = differenceInDays(date.to, date.from)
    // console.log(format(date.from, "dd/MM/yyyy"))
    console.log(isoDate)




    return (
        <Box>

            <Box>
                <Typography variant="h6">
                    Fecha
                </Typography>
                <Typography variant="subtitle2"><strong>Inicio: </strong>{format(date.from, "dd/MM/yyyy")}</Typography>
                <Typography variant="subtitle2"><strong>Fin: </strong>{format(date.to, "dd/MM/yyyy")}</Typography>
                <Typography variant="subtitle2"><strong>Días: </strong>{differenceInDays(date.to, date.from)}</Typography>
            </Box>

            <Divider sx={{ mt: 1, mb: 1 }} ></Divider>

            <Box
            //       sx={{ marginTop: 0 }}
            >
                <Typography variant="h6">
                    Datos de contacto
                </Typography>
                {info.map((elem, index) => <Typography key={elem} variant="subtitle2"><strong>{data[index]}: </strong>{elem}</Typography>
                )}
            </Box>

            <Divider sx={{ mt: 1, mb: 1 }} ></Divider>

            <Box
            //       sx={{ marginTop: 0 }}
            >
                <Typography variant="h6">
                    Bicicletas
                </Typography>
                <SelectedBikesTable></SelectedBikesTable>
            </Box>

            <Divider sx={{ mt: 1, mb: 1 }} ></Divider>

            <Stack
                pr={1}
                pl={1}
                direction="row"
                justifyContent=' space-between'
                sx={{ width: '100%' }}
            //mb={5}
            >
                <Typography
                    //  sx={{ fontWeight: 'bold' }}
                    //align='left'
                    component="div"
                    variant="subtitle1">
                    Total por día
                </Typography>
                <Typography
                    component="div"
                    //    sx={{ fontWeight: 'bold' }}
                    //align='right'
                    variant="subtitle1">
                    {totalPrice / days} €
                </Typography>

            </Stack>

            <Stack

                pr={1}
                pl={1}

                direction="row"
                justifyContent=' space-between'
                sx={{ width: '100%' }}
            >
                <Typography
                    //  sx={{ fontWeight: 'bold' }}
                    //align='left'
                    component="div"
                    variant="subtitle1">
                    Días
                </Typography>
                <Typography
                    component="div"
                    //    sx={{ fontWeight: 'bold' }}
                    //align='right'
                    variant="subtitle1">
                    {days}
                </Typography>

            </Stack>

            <Stack
                pr={1}
                pl={1}
                direction="row"
                justifyContent=' space-between'
                sx={{ width: '100%' }}
            >
                <Typography
                    sx={{ fontWeight: 'bold' }}
                    //align='left'
                    component="div"
                    variant="h6">
                    TOTAL
                </Typography>
                <Typography
                    component="div"
                    sx={{ fontWeight: 'bold' }}
                    //align='right'
                    variant="h6">
                    {totalPrice} €
                </Typography>

            </Stack>
        </Box>
    )
}

export default ResumeStep