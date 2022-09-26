
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container } from "@mui/system";

const Layout = ({ children }) => {
    //const matches = useMediaQuery("(min-width:600px)", { color: 'red', });
    //const lgDown = useMediaQuery(theme.breakpoints.down('lg'));


    // console.log(matches)

    return (
        <Box
            sx={{ minWidth: '400px' }}
        >
            <Header />
            <main>
                <Container sx={{ mb: 5 }}>
                    {children}
                </Container>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </Box>
    )
}

export default Layout

