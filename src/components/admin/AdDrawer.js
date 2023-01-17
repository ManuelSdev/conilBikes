import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  ChevronLeftOutlined,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";

import Collapse from "@mui/material/Collapse";

import PedalBikeOutlinedIcon from "@mui/icons-material/PedalBikeOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import {ClickAwayListener} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getDrawerState} from "../../app/store/selectors";
import {closeDrawer} from "../../app/store/drawerSlice";
const sections = [
  {
    icon: <PedalBikeOutlinedIcon />,
    name: "Bicicletas",
    subSections: [
      "Resumen",
      "Añadir bicicletas",
      "Eliminar bicicletas",
      "Modificar estado",
    ],
  },
  {
    icon: <AutoStoriesOutlinedIcon />,
    name: "Reservas",
    subSections: [
      "Resumen",
      "Crear reserva",
      "Modificar reserva",
      "Eliminar reserva",
    ],
  },
  {
    icon: <InsightsOutlinedIcon />,
    name: "Estadísticas",
    subSections: ["Resumen"],
  },
];

export default function AdDrawer() {
  const dispatch = useDispatch();
  const isOpen = useSelector(getDrawerState);
  const handleCloseDrawer = () => dispatch(closeDrawer());

  const [openList, setOpenList] = React.useState({
    0: false,
    1: false,
    2: false,
  });

  const toogleList = (sectionIndex) => (ev) => {
    setOpenList({
      0: false,
      1: false,
      2: false,
      [sectionIndex]: !openList[sectionIndex],
    });
  };

  React.useEffect(() => {
    return () =>
      setOpenList({
        0: false,
        1: false,
        2: false,
      });
  }, [isOpen]);

  const list = () => (
    <Box
      // sx={{ width: '100%' }}
      role="presentation"
    >
      <List>
        {sections.map((section, sectionIndex) => (
          <Box key={section.name}>
            <ListItem
              onClick={toogleList(sectionIndex)}
              disablePadding
              sx={{pr: 2}}
            >
              <ListItemButton sx={{pr: 5}}>
                <ListItemIcon>{section.icon}</ListItemIcon>
                <ListItemText primary={section.name} />
              </ListItemButton>
              {openList.sectionIndex ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {section.subSections.map((subSection) => (
              <ListItem
                key={subSection}
                disablePadding
              >
                <Collapse
                  in={openList[sectionIndex]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                  >
                    <ListItemButton sx={{pl: 4}}>
                      <ListItemIcon>
                        <RemoveOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={subSection} />
                    </ListItemButton>
                  </List>
                </Collapse>
              </ListItem>
            ))}
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      anchor={"left"}
      open={isOpen}
      onClose={handleCloseDrawer}
    >
      <ListItem
        button
        onClick={handleCloseDrawer}
      >
        <ListItemText primary="Volver" />
        <ChevronLeftOutlined />
      </ListItem>
      <Divider />

      {list()}
    </Drawer>
  );
}
