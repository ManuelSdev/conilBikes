import {Box, Typography} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {Container} from "@mui/system";
import AdminHeader from "../admin/AdminHeader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useRouter} from "next/router";
const AdminLayout = ({sectionTitle, subsectionTitle, children}) => {
  //const matches = useMediaQuery("(min-width:600px)", { color: 'red', });
  //const lgDown = useMediaQuery(theme.breakpoints.down('lg'));

  // console.log(matches)
  const router = useRouter();
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
            // pt: 3,
            pb: 20,
            mb: 5,
            backgroundColor: "#F4F6FD",
          }}
        >
          <Box
            sx={{
              py: 2,
            }}
          >
            <Typography variant="h5">{sectionTitle}</Typography>
            {subsectionTitle && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  //   alignContent: "center",
                  flexDirection: "row",
                  gap: 2,
                  //  shapeOutside: 'circle(50%)',
                  // color: 'blue',
                  //clipPath: 'circle(6rem at 12rem 8rem)'
                }}
              >
                <ArrowBackIcon
                  onClick={() => router.back()}
                  //fontSize="inherit"
                />

                <Typography variant="h6">{subsectionTitle}</Typography>
              </Box>
            )}
          </Box>

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
