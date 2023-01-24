import AdminLayout from "../../../../components/layouts/AdminLayout";
import AdDrawer from "../../../../components/admin/AdDrawer";

import ContentCard from "../../../../components/contentCard/ContentCard";
import ContentCardHeader from "../../../../components/contentCard/ContentCardHeader";
import ContentCardBody from "../../../../components/contentCard/ContentCardBody";

import BookingsResumeList from "../../../../components/admin/bookingsPage/BookingsResumeList";
import {Typography} from "@mui/material";
export default function BookingsDayResumePage() {
  return (
    <AdminLayout subsectionTitle={"Lista de reservas"}>
      <BookingsResumeList />

      <AdDrawer />
    </AdminLayout>
  );
}
