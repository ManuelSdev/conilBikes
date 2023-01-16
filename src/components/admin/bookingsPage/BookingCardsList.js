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
import {Stack, Typography} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import {useRouter} from "next/router";
import {useGetBookingsOnDateQuery} from "../../../app/store/services/bookingApi";
import {CircularProgress} from "@mui/material";
import {Box} from "@mui/system";
import {BOOKING_STATES_MAP} from "../../../lib/utils/detailsMaps";
import useBookingsOnDate from "../../../hooks/useBookingsOnDate";
import BookingResumeCard from "./BookingResumeCard";
import {
  START,
  END,
  HOME,
  STORE,
  DONE,
  PENDING,
} from "../../../lib/utils/appConsts";
import {useDispatch} from "react-redux";
import {setCurrentBooking} from "../../../app/store/currentBookingSlice";

export default function BookingCardsList() {
  const router = useRouter();
  const {date, type} = router.query;
  const composedType = (constA, constB) => `${constA}-${constB}`;
  const {
    startingBookings,
    endingBookings,
    getStartingDoneBookings,
    getStartingPendingBookings,
    getEndingDoneBookings,
    getEndingPendingBookings,
    getHomeDoneBookings,
    getHomePendingBookings,
    getStoreDoneBookings,
    getStorePendingBookings,
    isLoading,
  } = useBookingsOnDate(date);

  const getTargetBookings = () => {
    if (type === START)
      return [...startingBookings.home, ...startingBookings.store];
    if (type === composedType(START, DONE)) return getStartingDoneBookings();
    if (type === composedType(START, PENDING))
      return getStartingPendingBookings();

    if (type === END) return [...endingBookings.home, ...endingBookings.store];
    if (type === composedType(END, DONE)) return getEndingDoneBookings();
    if (type === composedType(END, PENDING)) return getEndingPendingBookings();

    if (type === HOME)
      return [...startingBookings.home, ...endingBookings.home];
    if (type === composedType(HOME, DONE)) return getHomeDoneBookings();
    if (type === composedType(HOME, PENDING)) return getHomePendingBookings();

    if (type === STORE)
      return [...startingBookings.store, ...endingBookings.store];
    if (type === composedType(STORE, DONE)) return getStoreDoneBookings();
    if (type === composedType(STORE, PENDING)) return getStorePendingBookings();
  };
  const targetBookings = getTargetBookings();

  const {startDay, endDay} = bookingDayColors;

  //console.log("***************", bookingsStarting);

  return isLoading ? (
    <CircularProgress />
  ) : type ? (
    <Stack spacing={2}>
      {targetBookings.map(
        (booking) =>
          console.log("oooooooooooooo", booking) || (
            <BookingResumeCard
              //    onClick={handleClick}
              key={booking._id}
              booking={booking}
            />
          ),
      )}
    </Stack>
  ) : (
    <CircularProgress />
  );
}
