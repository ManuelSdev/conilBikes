import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {bookingDayColors} from "../../../lib/utils/colors";
import {Typography} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import {useRouter} from "next/router";
import {CircularProgress} from "@mui/material";
import {Box} from "@mui/system";
import useBookingsOnDate from "../../../hooks/useBookingsOnDate";
import OutputIcon from "@mui/icons-material/Output";
import PendingIcon from "@mui/icons-material/Pending";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  START,
  END,
  HOME,
  STORE,
  DONE,
  PENDING,
} from "../../../lib/utils/appConsts";

export default function BookingsResumeList() {
  const router = useRouter();
  const {date} = router.query;
  const {startDay, endDay} = bookingDayColors;

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
  console.log("---------------", getEndingPendingBookings());
  const handleClick = (filter) => () =>
    router.push(`/admin/calendar/${date}/${filter}`);

  const listBlocks = [
    {
      title: "Empiezan",
      icon: OutputIcon,
      iconColor: startDay,
      number: startingBookings.home.length + startingBookings.store.length,
      doneNumber: getStartingDoneBookings().length,
      pendingNumber: getStartingPendingBookings().length,
      path: START,
    },
    {
      title: "Finalizan",
      icon: ExitToAppIcon,
      iconColor: endDay,
      number: endingBookings.home.length + endingBookings.store.length,
      doneNumber: getEndingDoneBookings().length,
      pendingNumber: getEndingPendingBookings().length,
      path: END,
    },
    {
      title: "A domicilio",
      icon: LocalShippingIcon,
      number: startingBookings.home.length + endingBookings.home.length,
      doneNumber: getHomeDoneBookings().length,
      pendingNumber: getHomePendingBookings().length,
      path: HOME,
    },
    {
      title: "En tienda",
      icon: StoreIcon,
      number: startingBookings.store.length + endingBookings.store.length,
      doneNumber: getStoreDoneBookings().length,
      pendingNumber: getStorePendingBookings().length,
      path: STORE,
    },
  ];
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
      <List>
        {listBlocks.map((block) => {
          const Icon = block.icon;
          return (
            <Box key={block.path}>
              <ListItemButton
                disabled={!!!block.number}
                onClick={handleClick(block.path)}
              >
                <ListItemIcon>
                  <Icon
                    sx={{color: block.iconColor}}
                    fontSize="large"
                  />
                </ListItemIcon>
                <ListItemText primary={<strong>{block.title}</strong>} />
                <Typography>
                  <strong>{block.number}</strong>
                </Typography>
              </ListItemButton>

              <ListItemButton
                disabled={!!!block.doneNumber}
                onClick={handleClick(block.path + "-" + DONE)}
                sx={{pl: 4, pt: 0}}
              >
                <ListItemIcon>
                  <CheckCircleIcon
                    sx={{color: "green"}}
                    fontSize="small"
                  />
                </ListItemIcon>
                <ListItemText primary="Gestionadas" />
                <Typography>{block.doneNumber}</Typography>
              </ListItemButton>

              <ListItemButton
                disabled={!!!block.pendingNumber}
                onClick={handleClick(block.path + "-" + PENDING)}
                sx={{pl: 4, pt: 0}}
              >
                <ListItemIcon>
                  <PendingIcon
                    sx={{color: "DarkSalmon"}}
                    fontSize="small"
                  />
                </ListItemIcon>
                <ListItemText primary="Pendientes" />
                <Typography>{block.pendingNumber}</Typography>
              </ListItemButton>
            </Box>
          );
        })}
      </List>
    </List>
  );
}
