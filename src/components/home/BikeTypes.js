import { Box, Button, Skeleton, Stack } from "@mui/material"
import Image from "next/image";
import { bikeLogos } from "../../lib/utils/temp";
import Link from "../elements/Link";

const loading = false

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
                    variant="contained"
                >
                    RESERVAR
                </Button>
                {bikeLogos.map((arr, index) => {
                    const [category, url] = arr
                    return loading ?
                        <Skeleton key={index} variant="rectangular" width={210} height={118} />
                        :


                        <Link
                            href={`/category/${category}`}
                            key={category}
                        >
                            <Image

                                src={url}
                                alt='cambia alt'
                                width={220}
                                height={172}
                            />
                        </Link>
                }




                )}
            </Stack>
        </Box >

    )
}

export default BikeTypes