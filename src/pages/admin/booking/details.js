import {Typography} from "@mui/material";
import {useRouter} from "next/router";
import AdDrawer from "../../../components/admin/AdDrawer";
import BookingDetails from "../../../components/admin/bookingsPage/BookingDetails";
import ContentCard from "../../../components/contentCard/ContentCard";
import ContentCardBody from "../../../components/contentCard/ContentCardBody";
import ContentCardHeader from "../../../components/contentCard/ContentCardHeader";
import AdminLayout from "../../../components/layouts/AdminLayout";

export default function BookingDetailsPage() {
  const router = useRouter();

  return (
    <AdminLayout>
      <Typography>Detalles de reserva</Typography>
      <BookingDetails />

      <AdDrawer />
    </AdminLayout>
  );
}
