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

export default function BookingCardsList() {
  const router = useRouter();
  const {date, filter} = router.query;
  const composedFilter = (constA, constB) => `${constA}-${constB}`;
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
    if (filter === START)
      return [...startingBookings.home, ...startingBookings.store];
    if (filter === composedFilter(START, DONE))
      return getStartingDoneBookings();
    if (filter === composedFilter(START, PENDING))
      return getStartingPendingBookings();

    if (filter === END)
      return [...endingBookings.home, ...endingBookings.store];
    if (filter === composedFilter(END, DONE)) return getEndingDoneBookings();
    if (filter === composedFilter(END, PENDING))
      return getEndingPendingBookings();

    if (filter === HOME)
      return [...startingBookings.home, ...endingBookings.home];
    if (filter === composedFilter(HOME, DONE)) return getHomeDoneBookings();
    if (filter === composedFilter(HOME, PENDING))
      return getHomePendingBookings();

    if (filter === STORE)
      return [...startingBookings.store, ...endingBookings.store];
    if (filter === composedFilter(STORE, DONE)) return getStoreDoneBookings();
    if (filter === composedFilter(STORE, PENDING))
      return getStorePendingBookings();
  };
  const targetBookings = getTargetBookings();
  console.log("oooooooooooooo", targetBookings);
  const {startDay, endDay} = bookingDayColors;

  //console.log("***************", bookingsStarting);
  const handleClick = () => router.push("/admin/date/bookings-list");

  return isLoading ? (
    <CircularProgress />
  ) : filter ? (
    <Stack spacing={2}>
      {targetBookings.map((booking) => (
        <BookingResumeCard booking={booking} />
      ))}
    </Stack>
  ) : (
    <CircularProgress />
  );
}
