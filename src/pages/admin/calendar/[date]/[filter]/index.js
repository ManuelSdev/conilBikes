import AdminLayout from "../../../../../components/layouts/AdminLayout";
import AdDrawer from "../../../../../components/admin/AdDrawer";

import ContentCard from "../../../../../components/contentCard/ContentCard";
import ContentCardHeader from "../../../../../components/contentCard/ContentCardHeader";
import ContentCardBody from "../../../../../components/contentCard/ContentCardBody";

import {useRouter} from "next/router";
import BookingCardsList from "../../../../../components/admin/bookingsPage/BookingCardsList";
import {
  DONE,
  END,
  HOME,
  PENDING,
  START,
  STORE,
} from "../../../../../lib/utils/appConsts";

export default function BookingsListPage() {
  const router = useRouter();
  const {filter} = router.query;
  const composedFilter = (constA, constB) => `${constA}-${constB}`;

  const getTargetBookings = () => {
    if (filter === START) return "Reservas que empiezan";
    if (filter === composedFilter(START, DONE)) return "Inicios completados";
    if (filter === composedFilter(START, PENDING)) return "Inicios pendientes";

    if (filter === END) return "Reservas que finalizan";
    if (filter === composedFilter(END, DONE)) return "Cierres completados";
    if (filter === composedFilter(END, PENDING)) return "Cierres pendientes";

    if (filter === HOME) return "Desplazamientos";
    if (filter === composedFilter(HOME, DONE))
      return "Desplazamientos completados";
    if (filter === composedFilter(HOME, PENDING))
      return "Desplazamientos pendientes";

    if (filter === STORE) return "En tienda";
    if (filter === composedFilter(STORE, DONE)) return "En tienda completados";
    if (filter === composedFilter(STORE, PENDING))
      return "En tienda pendientes";
  };
  console.log(filter);
  return (
    <AdminLayout>
      <ContentCard>
        <ContentCardHeader>{getTargetBookings()}</ContentCardHeader>
        <ContentCardBody>
          <BookingCardsList />
        </ContentCardBody>
      </ContentCard>

      <AdDrawer />
    </AdminLayout>
  );
}
