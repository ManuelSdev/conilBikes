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
import {useRouter} from "next/router";
import BookingsList from "../../../components/admin/bookingsPage/BookingList";
import {useGetBookingsOnDateQuery} from "../../../app/store/services/bookingApi";

export default function BookingsPage() {
  const router = useRouter();
  const {date} = router.query;
  console.log(date);
  const {
    data: bookingDatesOnMonth,
    isLoading,
    isSuccess,
    refetch,
    isFetching,
  } = useGetBookingsOnDateQuery(date, {
    //  skip,
    // refetchOnMountOrArgChange: true
  });
  console.log("*****************", bookingDatesOnMonth);
  return (
    <AdminLayout>
      <ContentCard>
        <ContentCardHeader>Lista de reservas</ContentCardHeader>
        <ContentCardBody>
          <BookingsList />
        </ContentCardBody>
      </ContentCard>

      <AdDrawer />
    </AdminLayout>
  );
}
