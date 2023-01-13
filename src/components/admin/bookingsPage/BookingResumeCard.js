import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "../../elements/Link";

export default function BookingResumeCard({booking}) {
  console.log(booking);

  const {name, surname, phone, address, bikes} = booking;
  console.log("oooooooooooooo", bikes.length);
  console.log("vvvvvvvvvvvvvv", bikes.length === 1);
  return (
    <Link href="/">
      <Card sx={{minWidth: 275}}>
        <CardContent sx={{paddingBottom: 0}}>
          <Typography
            variant="subtitle1"
            component="div"
          >
            {`${name} `}
          </Typography>
          <Typography
            // sx={{fontSize: 14}}
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
          >
            {address}
          </Typography>
          <Typography
            //sx={{fontSize: 14}}
            variant="subtitle2"
            color="text.secondary"
            gutterBottom
          >
            {phone}
          </Typography>

          <Typography
            //sx={{fontSize: 14}}
            variant="subtitle2"
            color="text.secondary"
            gutterBottom
          >
            {bikes.length === 1
              ? `${bikes.length} bicicleta para entregar`
              : `${bikes.length} bicicletas para entregar`}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
