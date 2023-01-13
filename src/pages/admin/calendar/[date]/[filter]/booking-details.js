import AdminLayout from "../../../../../components/layouts/AdminLayout";
import AdDrawer from "../../../../../components/admin/AdDrawer";

import ContentCard from "../../../../../components/contentCard/ContentCard";
import ContentCardHeader from "../../../../../components/contentCard/ContentCardHeader";
import ContentCardBody from "../../../../../components/contentCard/ContentCardBody";

import {useRouter} from "next/router";
import BookingsList from "../../../../../components/admin/bookingsPage/BookingsList";

export default function BookingsListPage() {
  const router = useRouter();

  return (
    <AdminLayout>
      <ContentCard>
        <ContentCardHeader>Detalles de reserva</ContentCardHeader>
        <ContentCardBody>
          <BookingsList />
        </ContentCardBody>
      </ContentCard>

      <AdDrawer />
    </AdminLayout>
  );
}
