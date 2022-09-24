import { Stack } from "@mui/material"
import { Box } from "@mui/system"
import DateSelect from "./DateSelect"
import SelectedBikesTable from "./SelectedBikesTable"



const ResumeStep = () => {

    return (
        <Stack
            sx={{ width: '100%' }}
            mb={5} spacing={2}>
            <SelectedBikesTable></SelectedBikesTable>




        </Stack>
    )
}

export default ResumeStep