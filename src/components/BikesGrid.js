import { Stack } from "@mui/material"
import { Container } from "@mui/system"
import BikeCard from "./BikeCard"


const BikesGrid = ({ bikes }) => {
    return (
        <Container>
            <Stack
                alignItems='center'
                spacing={2}
            >
                {bikes.map(bike => <BikeCard key={bike._id} bike={bike}></BikeCard>
                )}

            </Stack>
        </Container>
    )
}

export default BikesGrid