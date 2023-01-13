import AdminLayout from "../../../../components/layouts/AdminLayout";
import AdDrawer from "../../../../components/admin/AdDrawer";

import ContentCard from "../../../../components/contentCard/ContentCard";
import ContentCardHeader from "../../../../components/contentCard/ContentCardHeader";
import ContentCardBody from "../../../../components/contentCard/ContentCardBody";

import BookingsResumeList from "../../../../components/admin/bookingsPage/BookingsResumeList";

export default function BookingsPage() {
  return (
    <AdminLayout>
      <ContentCard>
        <ContentCardHeader>Lista de reservas</ContentCardHeader>
        <ContentCardBody>
          <BookingsResumeList />
        </ContentCardBody>
      </ContentCard>

      <AdDrawer />
    </AdminLayout>
  );
}
