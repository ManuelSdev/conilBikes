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
import {Typography} from "@mui/material";

export default function BookingsListPage() {
  const router = useRouter();
  const {type} = router.query;
  const composedtype = (constA, constB) => `${constA}-${constB}`;

  const getTargetBookings = () => {
    if (type === START) return "Reservas que empiezan";
    if (type === composedtype(START, DONE)) return "Inicios completados";
    if (type === composedtype(START, PENDING)) return "Inicios pendientes";

    if (type === END) return "Reservas que finalizan";
    if (type === composedtype(END, DONE)) return "Cierres completados";
    if (type === composedtype(END, PENDING)) return "Cierres pendientes";

    if (type === HOME) return "Desplazamientos";
    if (type === composedtype(HOME, DONE)) return "Desplazamientos completados";
    if (type === composedtype(HOME, PENDING))
      return "Desplazamientos pendientes";

    if (type === STORE) return "En tienda";
    if (type === composedtype(STORE, DONE)) return "En tienda completados";
    if (type === composedtype(STORE, PENDING)) return "En tienda pendientes";
  };
  console.log(type);
  return (
    <AdminLayout subsectionTitle={getTargetBookings()}>
      <BookingCardsList />

      <AdDrawer />
    </AdminLayout>
  );
}
