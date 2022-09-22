import { Stack } from "@mui/material"
import { Container } from "@mui/system"
import BikeCard from "./BikeCard"


const BikesGrid = ({ bikes, ...props }) => {
    //bikes && console.log(bikes.lenght)
    return (
        <Stack
            alignItems='center'
            spacing={2}
        >
            {bikes.map(bike => <BikeCard key={bike._id} bike={bike}></BikeCard>
            )}

        </Stack>
    )
}

export default BikesGrid