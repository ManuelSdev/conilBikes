import {Button, Dialog, DialogContent} from "@mui/material";
import {useRouter} from "next/router";
import {useState} from "react";
import {useSelector} from "react-redux";
import {getBookingData} from "../../app/store/selectors";
import {useAddBookingMutation} from "../../app/store/services/bookingApi";
import CircularProgress from "@mui/material/CircularProgress";

import Modal from "./Modal";

const ConfirmBookingButton = () => {
  const router = useRouter();
  const data = useSelector(getBookingData);
  const [
    addBooking,
    {status, isUninitialized, isLoading, isSuccess, data: dato, isError, reset},
  ] = useAddBookingMutation({fixedCacheKey: "addBooking-key"});

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    isSuccess && router.push("/");
  };

  const handleSubmit = async () => {
    console.log("mmmmmmmmmmmmmmm", data);
    await addBooking(data).unwrap();
    handleOpen();
  };
  return (
    <>
      <Modal
        handleClose={handleClose}
        open={open}
        title={
          isSuccess
            ? "Hemos registrado tu reserva correctamente"
            : "Hubo un error al procesar tu reserva. Vuelve a intentarlo"
        }
      >
        <Button
          onClick={handleClose}
          autoFocus
        >
          Aceptar
        </Button>
      </Modal>
      <Dialog open={isLoading}>
        <DialogContent sx={{width: "100%"}}>
          <CircularProgress />
        </DialogContent>
      </Dialog>

      <Button
        fullWidth
        onClick={handleSubmit}
        sx={{mb: 2}}
      >
        Confirmar reserva
      </Button>
    </>
  );
};

export default ConfirmBookingButton;
