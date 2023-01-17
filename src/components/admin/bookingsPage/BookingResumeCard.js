import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "../../elements/Link";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setCurrentBooking} from "../../../app/store/currentBookingSlice";

export default function BookingResumeCard({booking}) {
  console.log(booking);
  const router = useRouter();
  const dispatch = useDispatch();
  const {name, surname, phone, address, bikes, state} = booking;

  const handleClick = () => {
    console.log(booking);
    dispatch(setCurrentBooking(booking));
    router.push(`/admin/bookings/booking-details/${booking._id}`);
  };
  return (
    <Card
      onClick={handleClick}
      sx={{minWidth: 275}}
    >
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
            ? `${bikes.length} bicicleta`
            : `${bikes.length} bicicletas`}
        </Typography>
        <Typography
          //sx={{fontSize: 14}}
          variant="subtitle2"
          color="text.secondary"
          gutterBottom
        >
          {state}
        </Typography>
      </CardContent>
    </Card>
  );
}
