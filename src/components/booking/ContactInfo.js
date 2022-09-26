import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { getContactInfo } from "../../app/store/selectors"



const ContactInfo = () => {
    const info = useSelector(getContactInfo)
    const data = ['Nombre', 'Email', 'Teléfono', 'Dirección']
    return (
        <Box >
            {info.map((elem, index) => <Typography key={elem}><strong>{data[index]}:</strong>{elem}</Typography>
            )}
        </Box>
    )
}

export default ContactInfo