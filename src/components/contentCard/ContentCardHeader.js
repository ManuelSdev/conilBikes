import { Box, Paper, Typography } from "@mui/material"




const ContentCardHeader = ({ children }) => {

    return (

        <Box
            sx={{
                pb: 1,
            }}
        ><Typography variant="h5">
                {children}
            </Typography>

        </Box>


    )
}

export default ContentCardHeader