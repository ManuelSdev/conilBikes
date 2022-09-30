import { Box, Paper } from "@mui/material"




const ContentCardBody = ({ children }) => {

    return (

        <Box
            sx={{
                pb: 1,
            }}
        >
            {children}
        </Box>


    )
}

export default ContentCardBody

