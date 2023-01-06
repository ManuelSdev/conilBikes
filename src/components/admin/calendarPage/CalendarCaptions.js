import {Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React from "react";

import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import {bookingDayColors} from "../../../lib/utils/colors";

export default function CalendarCaptions() {
  const {startDay, endDay, startEndDay} = bookingDayColors;

  return (
    <Box sx={{pl: 5}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          //  shapeOutside: 'circle(50%)',
          // color: 'blue',
          //clipPath: 'circle(6rem at 12rem 8rem)'
        }}
      >
        {}
        <Box
          sx={{
            background: startDay,
            borderRadius: "50%",
            width: "1rem",
            height: "1rem",
          }}
        ></Box>
        <Typography>Empiezan</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          //  shapeOutside: 'circle(50%)',
          // color: 'blue',
          //clipPath: 'circle(6rem at 12rem 8rem)'
        }}
      >
        {}
        <Box
          sx={{
            background: endDay,
            borderRadius: "50%",
            width: "1rem",
            height: "1rem",
          }}
        ></Box>
        <Typography>Finalizan</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          //  shapeOutside: 'circle(50%)',
          // color: 'blue',
          //clipPath: 'circle(6rem at 12rem 8rem)'
        }}
      >
        {}
        <Box
          sx={{
            background: startEndDay,
            borderRadius: "50%",
            width: "1rem",
            height: "1rem",
          }}
        ></Box>
        <Typography>Empiezan y finalizan</Typography>
      </Box>
    </Box>
  );
}
