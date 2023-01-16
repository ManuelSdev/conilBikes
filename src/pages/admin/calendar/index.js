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
import {Typography} from "@mui/material";

export default function CalendarPage() {
  return (
    <AdminLayout sectionTitle={"Calendario de reservas"}>
      <CalendarCaptions />
      <ClientOnly>
        <StaticCalendar />
      </ClientOnly>
      <SelectedDayInfo />

      <AdDrawer />
    </AdminLayout>
  );
}
