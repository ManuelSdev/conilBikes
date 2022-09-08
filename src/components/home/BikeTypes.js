import { Box, Button, Skeleton, Stack } from "@mui/material"
import Image from "next/image";
import { bikesUrls } from "../../assets/images/temp/bikesURLs";
import Link from "../elements/Link";

const loading = false
const bikesLink = ['paseo', 'electricas', 'montana', 'carretera']
const BikeTypes = () => {

    return (
        <Box
            sx={{ display: 'block' }}
            mt={4}
        >
            <Stack
                alignItems='center'
                spacing={2}
            >
                <Button
                    href="/reservas"
                    variant="contained">RESERVAR</Button>
                {bikesUrls.map((url, index) =>
                    loading ?
                        <Skeleton key={index} variant="rectangular" width={210} height={118} />
                        :
                        <Link
                            href="/reservas"
                            key={index}
                        >
                            <Image

                                src={url}
                                alt='cambia alt'
                                width={220}
                                height={172}
                            />
                        </Link>

                )}
            </Stack>
        </Box >

    )
}

export default BikeTypes