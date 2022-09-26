import Stack from "@mui/material/Stack"
import SizeSelect from './SizeSelect'
import TypeSelect from "./TypeSelect"
import RangeSelect from "./RangeSelect"
import BikesSelect from "./BikeSelect"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAnotherForm } from "../../app/store/bookingFormSlice"


const BikeForm = () => {
    //console.log('@@@@@@@@@@@@@@@@@@', key)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("++++++++++++++Component mounted.");
        return () => console.log("------------Component unmounted.")
    }, []);
    return (
        <Stack spacing={2}>
            <SizeSelect />
            <TypeSelect />
            <RangeSelect />
            <BikesSelect />
        </Stack>

    )

}

export default BikeForm