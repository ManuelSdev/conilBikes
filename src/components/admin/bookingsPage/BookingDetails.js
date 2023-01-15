import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import {useSelector} from "react-redux";
import {getCurrentBooking} from "../../../app/store/selectors";
import {BOOKING_STATES_MAP} from "../../../lib/utils/detailsMaps";
import {CircularProgress} from "@mui/material";

const BookingDetails = () => {
  console.log("=============", new Date().valueOf());
  const booking = useSelector(getCurrentBooking);
  const {
    name,
    mail,
    phone,
    address,
    from,
    to,
    bikes,
    price,
    state,
    homeDelivery,
    homePickup,
  } = booking;

  const modBookingState =
    BOOKING_STATES_MAP[state]?.charAt(0).toUpperCase() +
    BOOKING_STATES_MAP[state]?.slice(1);

  const modBookingPrice = price + "€";
  console.log(BOOKING_STATES_MAP[state]);
  const listStructure = [
    ["Nombre", name],
    ["Correo eléctronico", mail],
    ["Teléfono", phone],
    ["Dirección", address],
    ["Desde", from],
    ["Hasta", to],
    ["Importe total", modBookingPrice],
    ["Estado", modBookingState],
    ["Entrega de bicicletas", homeDelivery ? "A domicilio" : "En tienda"],
    ["Devolución de bicicletas", homePickup ? "A domicilio" : "En tienda"],
  ];
  return booking ? (
    <List dense>
      {listStructure.map((pair, index) => {
        const [title, info] = pair;
        return (
          <ListItem
            key={index}
            disablePadding
          >
            <ListItemText
              primaryTypographyProps={{
                variant: "body2",
                sx: {color: "rgba(0, 0, 0, 0.6)"},
              }}
              secondaryTypographyProps={{
                variant: "body1",
                sx: {color: "black"},
              }}
              primary={title}
              secondary={info}
            />
          </ListItem>
        );
      })}
    </List>
  ) : (
    <CircularProgress />
  );
};

export default BookingDetails;
