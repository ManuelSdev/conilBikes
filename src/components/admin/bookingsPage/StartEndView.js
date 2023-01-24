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

export default function StartEndView({props}) {
  const {
    bookingsStarting,
    bookingsEnding,
    bookingsStartingStats,
    bookingsEndingStats,
    isLoading,
  } = props;

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
      {
        //!!bookingsStartingStats.total &&
        true && (
          <Box>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <CircleIcon sx={{color: startDay}} />
              </ListItemIcon>
              <ListItemText primary="Empiezan" />
              <Typography>{bookingsStartingStats.total}</Typography>
            </ListItemButton>

            <List
              component="div"
              disablePadding
            >
              <ListItemButton sx={{pl: 4, pt: 0}}>
                <ListItemIcon>
                  <LocalShippingIcon sx={{color: startDay}} />
                </ListItemIcon>
                <ListItemText primary="Entregas a domicilio" />
                <Typography>{bookingsStartingStats.home}</Typography>
              </ListItemButton>
              <ListItemButton sx={{pl: 4, pt: 0}}>
                <ListItemIcon />
                <ListItemText primary="Realizadas" />
                <Typography>{bookingsStartingStats.homeCompleted}</Typography>
              </ListItemButton>

              <ListItemButton sx={{pl: 4, pt: 0}}>
                <ListItemIcon>
                  <StoreIcon sx={{color: startDay}} />
                </ListItemIcon>
                <ListItemText primary="Entregas en tienda" />
                <Typography>{bookingsStartingStats.store}</Typography>
              </ListItemButton>
              <ListItemButton sx={{pl: 4, pt: 0}}>
                <ListItemIcon />
                <ListItemText primary="Realizadas" />
                <Typography>{bookingsStartingStats.storeCompleted}</Typography>
              </ListItemButton>
            </List>
          </Box>
        )
      }

      {
        // !!bookingsEndingStats.total &&
        true && (
          <Box>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <CircleIcon sx={{color: endDay}} />
              </ListItemIcon>
              <ListItemText primary="Finalizan" />
              <Typography>{bookingsEndingStats.total}</Typography>
            </ListItemButton>
            <List
              component="div"
              disablePadding
            >
              <ListItemButton sx={{pl: 4, pt: 0}}>
                <ListItemIcon>
                  <LocalShippingIcon sx={{color: endDay}} />
                </ListItemIcon>
                <ListItemText primary="Recogidas a domicilio" />
                <Typography>{bookingsEndingStats.home}</Typography>
              </ListItemButton>
              <ListItemButton sx={{pl: 4, pt: 0}}>
                <ListItemIcon />
                <ListItemText primary="Realizadas" />
                <Typography>{bookingsStartingStats.homeCompleted}</Typography>
              </ListItemButton>

              <ListItemButton sx={{pl: 4, pt: 0}}>
                <ListItemIcon>
                  <StoreIcon sx={{color: endDay}} />
                </ListItemIcon>
                <ListItemText primary="Recogidas en tienda" />
                <Typography>{bookingsEndingStats.store}</Typography>
              </ListItemButton>
              <ListItemButton sx={{pl: 4, pt: 0}}>
                <ListItemIcon />

                <ListItemText primary="Realizadas" />
                <Typography>{bookingsStartingStats.storeCompleted}</Typography>
              </ListItemButton>
            </List>
          </Box>
        )
      }
    </List>
  );
}
