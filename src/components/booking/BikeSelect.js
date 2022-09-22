import { Button, Stack } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getDate, getRange, getSize, getType } from "../../app/store/selectors"
import { useGetAvaiableBikesQuery, useLazyGetAvaiableBikesQuery } from "../../app/store/services/bikeApi"
import BikesGrid from "../BikesGrid"

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const BikesSelect = () => {

    const isoDate = useSelector(getDate)
    const selectedSize = useSelector(getSize)
    const selectedType = useSelector(getType)
    const selectedRange = useSelector(getRange)

    const params = (b) => new URLSearchParams(b)
    const args = params({ ...isoDate, size: selectedSize, type: selectedType, range: selectedRange }).toString()


    const [bikes, setBikes] = useState([])

    const [trigger, { data: avaiableBikes, isFetching, isSuccess }, lastPromiseInfo] = useLazyGetAvaiableBikesQuery(a => console.log('0000000000000000', a))


    const handleTrigger = () => trigger(args)


    useEffect(() => {
        !!!selectedRange && setBikes([])
    }, [selectedRange]);

    useEffect(() => {

        isSuccess && setBikes([...avaiableBikes])
    }, [avaiableBikes]);

    return (
        <Container
        >
            <Stack alignItems='center'>
                {selectedRange &&
                    <Button
                        //disabled={!!!selectedRange}
                        onClick={handleTrigger}
                    >Mostrar bicicletas</Button>}
                {isFetching ?
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                    :
                    bikes && < BikesGrid bikes={bikes} />
                }
            </Stack>
        </Container>

    )
}

export default BikesSelect