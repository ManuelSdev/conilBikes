import AdminHeader from "../../../components/admin/AdminHeader";
import BikeTypes from "../../../components/home/BikeTypes";
import AdminLayout from "../../../components/layouts/AdminLayout";
import AdDrawer from "../../../components/admin/AdDrawer";
import StaticCalendar from "../../../components/admin/calendarPage/StaticCalendar";
import ClientOnly from "../../../components/admin/calendarPage/ClientOnly";
import ContentCard from "../../../components/contentCard/ContentCard";
import ContentCardHeader from "../../../components/contentCard/ContentCardHeader";
import ContentCardBody from "../../../components/contentCard/ContentCardBody";
import CalendarCaptions from "../../../components/admin/calendarPage/CalendarCaptions";
import ContentCardFooter from "../../../components/contentCard/ContentCardFooter";
import SelectedDayInfo from "../../../components/admin/calendarPage/SelectedDayInfo";

export default function CalendarPage() {
  return (
    <AdminLayout>
      <ContentCard>
        <ContentCardHeader>Calendario de reservas</ContentCardHeader>
        <ContentCardBody>
          <CalendarCaptions />
          <ClientOnly>
            <StaticCalendar />
          </ClientOnly>
          <SelectedDayInfo />
        </ContentCardBody>
      </ContentCard>

      <AdDrawer />
    </AdminLayout>
  );
}
