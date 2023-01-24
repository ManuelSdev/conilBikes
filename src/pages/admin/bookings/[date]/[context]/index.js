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
  const {context} = router.query;
  const composedcontext = (constA, constB) => `${constA}-${constB}`;

  const getTitle = () => {
    if (context === START) return "Reservas que empiezan";
    if (context === composedcontext(START, DONE)) return "Inicios completados";
    if (context === composedcontext(START, PENDING))
      return "Inicios pendientes";

    if (context === END) return "Reservas que finalizan";
    if (context === composedcontext(END, DONE)) return "Cierres completados";
    if (context === composedcontext(END, PENDING)) return "Cierres pendientes";

    if (context === HOME) return "Desplazamientos";
    if (context === composedcontext(HOME, DONE))
      return "Desplazamientos completados";
    if (context === composedcontext(HOME, PENDING))
      return "Desplazamientos pendientes";

    if (context === STORE) return "En tienda";
    if (context === composedcontext(STORE, DONE))
      return "En tienda completados";
    if (context === composedcontext(STORE, PENDING))
      return "En tienda pendientes";
  };
  console.log(context);
  return (
    <AdminLayout subsectionTitle={getTitle()}>
      <BookingCardsList />

      <AdDrawer />
    </AdminLayout>
  );
}
