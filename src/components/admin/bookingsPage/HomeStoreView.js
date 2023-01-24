import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import CircleIcon from "@mui/icons-material/Circle";
import {bookingDayColors} from "../../../lib/utils/colors";
import {Typography} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import {useRouter} from "next/router";
import {
  useGetBookingsOnDateQuery,
  useLazyGetBookingsOnDateQuery,
} from "../../../app/store/services/bookingApi";
import {CircularProgress} from "@mui/material";
import {Box} from "@mui/system";
import {BOOKING_STATES_MAP} from "../../../lib/utils/detailsMaps";
import {useSelector} from "react-redux";
import {getCalendarBookingsOnDate} from "../../../app/store/selectors";
import useBookingsOnDate from "../../../hooks/useBookingsOnDate";

export default function HomeStoreView() {
  const router = useRouter();
  //const bookingDate =useSelector(getCalendarSelectedDay)
  /*
  const {bookingsStarting, bookingsEnding} = useSelector(
    getCalendarBookingsOnDate,
  );*/
  const {date} = router.query;
  const {
    bookingsStarting,
    bookingsEnding,
    bookingsStartingStats,
    bookingsEndingStats,
    isLoading,
  } = useBookingsOnDate(date);

  const [open, setOpen] = React.useState(true);
  const {startDay, endDay} = bookingDayColors;

  const handleClick = () =>
    router.push(`/admin/calendar/${bookingDate}/bookings-list`);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <List
      //   disablePadding
      sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        >
          Nested List Items
        </ListSubheader>
      }
    >
      <Box>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary="A domicilio" />
          <Typography>
            {bookingsStartingStats.home + bookingsEnding.home}
          </Typography>
        </ListItemButton>

        <List
          component="div"
          disablePadding
        >
          <ListItemButton sx={{pl: 4, pt: 0}}>
            <ListItemIcon>
              <CircleIcon sx={{color: startDay}} />
            </ListItemIcon>
            <ListItemText primary="Entregas" />
            <Typography>{bookingsStartingStats.home}</Typography>
          </ListItemButton>
          <ListItemButton sx={{pl: 4, pt: 0}}>
            <ListItemIcon />
            <ListItemText primary="Realizadas" />
            <Typography>{bookingsStartingStats.homeCompleted}</Typography>
          </ListItemButton>

          <ListItemButton sx={{pl: 4, pt: 0}}>
            <ListItemIcon>
              <CircleIcon sx={{color: endDay}} />
            </ListItemIcon>
            <ListItemText primary="Recogidas" />
            <Typography>{bookingsEnding.home}</Typography>
          </ListItemButton>
          <ListItemButton sx={{pl: 4, pt: 0}}>
            <ListItemIcon />
            <ListItemText primary="Realizadas" />
            <Typography>{bookingsEnding.homeCompleted}</Typography>
          </ListItemButton>
        </List>
      </Box>

      <Box>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="En tienda" />
          <Typography>
            {bookingsStartingStats.store + bookingsEndingStats.store}
          </Typography>
        </ListItemButton>
        <List
          component="div"
          disablePadding
        >
          <ListItemButton sx={{pl: 4, pt: 0}}>
            <ListItemIcon>
              <CircleIcon sx={{color: startDay}} />
            </ListItemIcon>
            <ListItemText primary="Entregas" />
            <Typography>{bookingsStartingStats.store}</Typography>
          </ListItemButton>
          <ListItemButton sx={{pl: 4, pt: 0}}>
            <ListItemIcon />
            <ListItemText primary="Realizadas" />
            <Typography>{bookingsStartingStats.storeCompleted}</Typography>
          </ListItemButton>

          <ListItemButton sx={{pl: 4, pt: 0}}>
            <ListItemIcon>
              <CircleIcon sx={{color: endDay}} />
            </ListItemIcon>
            <ListItemText primary="Recogidas" />
            <Typography>{bookingsEndingStats.store}</Typography>
          </ListItemButton>
          <ListItemButton sx={{pl: 4, pt: 0}}>
            <ListItemIcon />

            <ListItemText primary="Realizadas" />
            <Typography>{bookingsEndingStats.storeCompleted}</Typography>
          </ListItemButton>
        </List>
      </Box>
    </List>
  );
}
