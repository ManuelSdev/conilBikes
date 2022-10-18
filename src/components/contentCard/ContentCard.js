import { Box, Paper } from "@mui/material"
import ContentCardBody from "./ContentCardBody"
import ContentCardHeader from "./ContentCardHeader"





export default function ContentCard({ children }) {


    return (

        <Paper
            sx={{
                borderRadius: '15px 15px',
                // backgroundColor: 'red',
                //  pt: 2, pr: 1, pb: 2, pl: 1,
                p: 2,



            }}
        >
            {children}
        </Paper>

    )
}

