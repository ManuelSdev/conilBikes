import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useState } from "react"
import { useSelector } from "react-redux"
import { getBookingData } from "../../app/store/selectors"
import { useAddBookingMutation } from "../../app/store/services/bookingApi"

import Modal from "./Modal"




const ConfirmBookingButton = () => {

    const router = useRouter()
    const data = useSelector(getBookingData)
    const [
        addBooking,
        { status, isUninitialized, isLoading, isSuccess, data: dato, isError, reset }
    ] = useAddBookingMutation({ fixedCacheKey: 'addBooking-key', })
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
        isSuccess && router.push('/')
    };

    const handleSubmit = async () => {
        await addBooking(data).unwrap()
        handleOpen()
    }
    return (
        <>
            <Modal
                isLoading={true}
                handleClose={handleClose}
                open={true}
                mainMessage={
                    isSuccess ?
                        'Hemos registrado tu reserva correctamente'
                        :
                        'Hubo un error al procesar tu reserva. Vuelve a intentarlo'
                }
            />
            <Button
                fullWidth
                onClick={handleSubmit}
                sx={{ mb: 2 }}
            >
                Confirmar reserva
            </Button>

        </>

    )
}

export default ConfirmBookingButton