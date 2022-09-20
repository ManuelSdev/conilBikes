import Toolbar from "@mui/material/Toolbar"
import Box from '@mui/system/Box'
import React from "react"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import useBreakpoints from "../../hooks/useBreakpoints"


//import useBreakpoints from "../../hooks/useBreakpoints"
/*
import SwitchMode from "./SwitchMode"
import { useSelector } from "react-redux"
import { getAuth } from "../../app/store/selectors"
*/
const BlackToolbar = () => {
    //const { isLogged } = useSelector(getAuth)
    const { sm750Up, xs550Up } = useBreakpoints()

    //console.log(sm750Up)
    return (
        sm750Up ?
            <Toolbar
                sx={{
                    bgcolor: 'corpBlack.main',
                    flexDirection: 'row-reverse',
                    height: "2em",

                    color: "corpWhite.main",

                    '@media (min-width: 600px)': {
                        minHeight: "1em"
                    }

                }}
            >
                <Stack
                    alignItems='center'
                    direction='row'>
                    <Typography
                        mr={3}
                        variant="subtitle1"
                    >
                        Lunes a viernes 10:00-14:00, 15:00-20:30 . Sábado 10:00-14:00
                    </Typography>

                    <LocalPhoneIcon width="1em"
                    />
                    <Typography ml={0.5} variant="subtitle1">956 44 15 36</Typography>
                </Stack>
                {/**isLogged && sm750Up && <SwitchMode />*/}
            </Toolbar>

            :

            <Toolbar
                sx={{
                    bgcolor: 'corpBlack.main',
                    //justifyContent: 'space-between',
                    flexDirection: 'row-reverse',
                    height: "4em",
                    color: "corpWhite.main",


                }}
            >
                <Stack
                    //   justifyContent='flex-start'
                    alignItems='center'
                    direction='row'
                >
                    <LocalPhoneIcon width="1em" />
                    <Typography ml={0.5} variant="subtitle1">956 44 15 36</Typography>
                </Stack>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography
                        //    mr={3}
                        variant="subtitle1"
                    >
                        {xs550Up ? 'Lunes a viernes 10:00-14:00, 15:00-20:30' : 'L-V 10:00-14:00, 15:00-20:30'}
                    </Typography>
                    <Typography
                        //  mr={3}
                        variant="subtitle1"
                    >
                        Sábado 10:00-14:00
                    </Typography>
                </Box>
            </Toolbar>
    )
}

export default BlackToolbar

