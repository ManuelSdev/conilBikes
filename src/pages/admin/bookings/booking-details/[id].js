import {CircularProgress, Typography} from "@mui/material";
import {useRouter} from "next/router";
import {useGetBookingQuery} from "../../../../app/store/services/bookingApi";
import AdDrawer from "../../../../components/admin/AdDrawer";
import BookingDetails from "../../../../components/admin/bookingsPage/BookingDetails";
import ContentCard from "../../../../components/contentCard/ContentCard";
import ContentCardBody from "../../../../components/contentCard/ContentCardBody";
import ContentCardHeader from "../../../../components/contentCard/ContentCardHeader";
import AdminLayout from "../../../../components/layouts/AdminLayout";

export default function BookingDetailsPage() {
  const router = useRouter();
  const {id} = router.query;
  const {
    data: booking,
    isLoading,
    isSuccess,
  } = id ? useGetBookingQuery(id) : useGetBookingQuery(id, {skip: true});

  console.log("=============", isLoading);
  console.log("+++++++++++++", booking);
  //TODO: afina esto con isLoading, error, etc
  return (
    <AdminLayout subsectionTitle={"Detalles de reserva"}>
      {isSuccess ? <BookingDetails booking={booking} /> : <CircularProgress />}

      <AdDrawer />
    </AdminLayout>
  );
}
//<BookingDetails booking={booking} />
