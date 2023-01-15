import {Box} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Container} from "@mui/system";
import AdminHeader from "../admin/AdminHeader";

const AdminLayout = ({header, children}) => {
  //const matches = useMediaQuery("(min-width:600px)", { color: 'red', });
  //const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  // console.log(matches)

  return (
    <Box
      sx={{
        minWidth: "400px",

        // background: 'linear-gradient(90deg, blue, red)'
      }}
    >
      <AdminHeader />
      <main>
        <Container
          sx={{
            pt: 3,
            pb: 20,
            mb: 5,
            backgroundColor: "#F4F6FD",
          }}
        >
          {children}
        </Container>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </Box>
  );
};

export default AdminLayout;
