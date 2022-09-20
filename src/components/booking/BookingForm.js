import Stack from "@mui/material/Stack"
import SizeSelect from './SizeSelect'
import TypeSelect from "./TypeSelect"
import RangeSelect from "./RangeSelect"


const BookingForm = () => {


    return (
        <Stack spacing={2}>

            <SizeSelect />
            <TypeSelect />
            <RangeSelect />

        </Stack>

    )

}

export default BookingForm