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
export default function BookingsList() {
  const [open, setOpen] = React.useState(true);
  const {startDay, endDay} = bookingDayColors;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CircleIcon sx={{color: startDay}} />
        </ListItemIcon>
        <ListItemText primary="Empiezan" />
        <Typography>ss</Typography>
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
          <Typography>ss</Typography>
        </ListItemButton>
        <ListItemButton sx={{pl: 4, pt: 0}}>
          <ListItemIcon>
            <StoreIcon sx={{color: startDay}} />
          </ListItemIcon>
          <ListItemText primary="Entregas en tienda" />
          <Typography>ss</Typography>
        </ListItemButton>
      </List>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CircleIcon sx={{color: endDay}} />
        </ListItemIcon>
        <ListItemText primary="Finalizan" />
        <Typography>ss</Typography>
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
          <Typography>ss</Typography>
        </ListItemButton>
        <ListItemButton sx={{pl: 4, pt: 0}}>
          <ListItemIcon>
            <StoreIcon sx={{color: endDay}} />
          </ListItemIcon>
          <ListItemText primary="Recogidas en tienda" />
          <Typography>ss</Typography>
        </ListItemButton>
      </List>
    </List>
  );
}
