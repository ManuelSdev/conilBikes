import AdminLayout from "../../../../../components/layouts/AdminLayout";
import AdDrawer from "../../../../../components/admin/AdDrawer";

import ContentCard from "../../../../../components/contentCard/ContentCard";
import ContentCardHeader from "../../../../../components/contentCard/ContentCardHeader";
import ContentCardBody from "../../../../../components/contentCard/ContentCardBody";

import {useRouter} from "next/router";
import BookingDetails from "../../../../../components/admin/bookingsPage/BookingDetails";

export default function BookingsListPage() {
  const router = useRouter();

  return (
    <AdminLayout>
      <ContentCard>
        <ContentCardHeader>Detalles de reserva</ContentCardHeader>
        <ContentCardBody>
          <BookingDetails />
        </ContentCardBody>
      </ContentCard>

      <AdDrawer />
    </AdminLayout>
  );
}
