import {Stack, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {useDispatch, useSelector} from "react-redux";
import {
  setAddress,
  setMail,
  setName,
  setPhone,
} from "../../app/store/bookingFormSlice";
import {
  getAddress,
  getMail,
  getName,
  getPhone,
} from "../../app/store/selectors";

const ContactStep = () => {
  const name = useSelector(getName);
  const address = useSelector(getAddress);
  const phone = useSelector(getPhone);
  const mail = useSelector(getMail);

  const dispatch = useDispatch();
  const idMap = {
    name: setName,
    address: setAddress,
    phone: setPhone,
    mail: setMail,
  };
  const handleChange = (event) => {
    const {id, value} = event.target;
    dispatch(idMap[id](value));
  };

  return (
    <Stack
      component="form"
      mb={2}
      spacing={2}
    >
      <TextField
        fullWidth
        id="name"
        label="Nombre completo"
        value={name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="phone"
        label="Teléfono"
        value={phone}
        inputProps={{inputMode: "numeric", pattern: "[0-9]*"}}
        //  inputProps={{ type: 'hidden' }}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="mail"
        label="Correo eléctronico"
        value={mail}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id="address"
        label="Dirección de entrega"
        value={address}
        onChange={handleChange}
        helperText="Indica donde quieres que te entreguemos las bicicletas"
      />
    </Stack>
  );
};

export default ContactStep;
