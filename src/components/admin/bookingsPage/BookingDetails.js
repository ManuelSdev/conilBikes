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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import {useSelector} from "react-redux";
import {getCurrentBooking} from "../../../app/store/selectors";
import {BOOKING_STATES_MAP} from "../../../lib/utils/detailsMaps";
import {Button, CircularProgress} from "@mui/material";
import {useRouter} from "next/router";
import {
  useGetBookingQuery,
  useUpdateBookingMutation,
} from "../../../app/store/services/bookingApi";

import {ACTIVE, FINISHED, PENDING} from "../../../lib/utils/appConsts";
import format from "date-fns/format";
import {useGetBikesByIdQuery} from "../../../app/store/services/bikeApi";

const BookingDetails = ({booking}) => {
  const router = useRouter();
  // const {id} = router.query;
  console.log("++++++++----------", booking);
  //const {data, idLoading, isSuccess} = useGetBookingQuery(id);
  // if (!booking) return <div>MIERDA</div>;
  // console.log("=============", booking);

  //const [booking, setBooking] = React.useState({});
  //isSuccess && setBooking({...data});
  //const booking = useSelector(getCurrentBooking);

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
    _id,
  } = booking;

  //const arrayOfBikesIds = new URLSearchParams({a: [...bikes]});

  const {
    data: bikesData,
    isLoading: isLoadingBikes,
    isSuccess: isSuccessBikes,
    refetch,
    isFetching,
  } = useGetBikesByIdQuery({arrayOfBikesIds: [...bikes]}, {skip: !!!booking});
  console.log(bikesData);

  const modBookingState =
    BOOKING_STATES_MAP[state]?.charAt(0).toUpperCase() +
    BOOKING_STATES_MAP[state]?.slice(1);

  const modBookingPrice = price + "€";

  const listStructure = [
    ["Nombre", name],
    ["Correo eléctronico", mail],
    ["Teléfono", phone],
    ["Dirección", address],
    [
      "Fecha",
      `Del ${format(new Date(from), "dd/MM/yyyy")} al ${format(
        new Date(to),
        "dd/MM/yyyy",
      )} `,
    ],
    ["Importe total", modBookingPrice],
    ["Estado", modBookingState],
    ["Entrega de bicicletas", homeDelivery ? "A domicilio" : "En tienda"],
    ["Devolución de bicicletas", homePickup ? "A domicilio" : "En tienda"],
  ];

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [
    modBooking,
    {status, isUninitialized, isLoading, isSuccess, data, isError, reset},
  ] = useUpdateBookingMutation({fixedCacheKey: "addBooking-key"});

  const changeBookingState = () => {
    if (state === PENDING) return ACTIVE;
    if (state === ACTIVE) return FINISHED;
  };
  const handleSubmit = async () => {
    const newState = changeBookingState();
    const result = await modBooking({_id, state: newState}).unwrap();
    console.log("___________", result);
  };
  const getButtonText = () => {
    if (state === PENDING) return "Iniciar";
    if (state === ACTIVE) return "Finalizar";
  };
  return isLoadingBikes ? (
    <CircularProgress />
  ) : (
    <Box>
      <List
        disablePadding
        dense
      >
        <ListItemButton
          //disablePadding
          sx={{p: 0}}
          onClick={handleClick}
        >
          <ListItemIcon>
            <PedalBikeIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              variant: "body1",
              sx: {color: "black"},
            }}
            primary={`x ${bikes.length}`}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            disablePadding
          >
            {bikesData.map((bike) => (
              <ListItemButton
                key={bike._id}
                sx={{pl: 4, py: 0}}
              >
                <ListItemText
                  primary={`x 1 ${bike.brand} ${bike.model}`}
                  secondary={`Talla ${bike.size.toUpperCase()}`}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <Divider />
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          pt: 2,
        }}
      >
        <Button onClick={handleSubmit}>{getButtonText()} reserva</Button>
        <Button disabled>Modificar reserva</Button>
      </Box>
    </Box>
  );
};

export default BookingDetails;
