import {Stack, TextField, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {useDispatch, useSelector} from "react-redux";
import {
  setAddress,
  setHomeDelivery,
  setHomePickup,
  setMail,
  setName,
  setPhone,
} from "../../app/store/bookingFormSlice";
import {
  getAddress,
  getHomeDelivery,
  getHomePickup,
  getMail,
  getName,
  getPhone,
} from "../../app/store/selectors";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ContactStep = () => {
  const name = useSelector(getName);
  const address = useSelector(getAddress);
  const phone = useSelector(getPhone);
  const mail = useSelector(getMail);
  const homeDelivery = useSelector(getHomeDelivery);
  const homePickup = useSelector(getHomePickup);

  const dispatch = useDispatch();
  const idMap = {
    name: setName,
    address: setAddress,
    phone: setPhone,
    mail: setMail,
    homeDelivery: setHomeDelivery,
    homePickup: setHomePickup,
  };
  const handleChange = (event) => {
    const {name, value} = event.target;
    if (value === "true") value = true;
    if (value === "false") value = false;
    dispatch(idMap[name](value));
  };

  return (
    <Stack
      component="form"
      mb={2}
      spacing={2}
    >
      <TextField
        fullWidth
        name="name"
        label="Nombre completo"
        value={name}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        name="phone"
        label="Teléfono"
        value={phone}
        inputProps={{inputMode: "numeric", pattern: "[0-9]*"}}
        //  inputProps={{ type: 'hidden' }}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        name="mail"
        label="Correo eléctronico"
        value={mail}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        name="address"
        label="Dirección de entrega"
        value={address}
        onChange={handleChange}
        helperText="Indica donde quieres que te entreguemos las bicicletas"
      />
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          ¿Recogerás las bicis en nuestra tienda o prefieres que te las
          entreguemos en otra dirección?
        </FormLabel>
        <RadioGroup
          aria-labelledby="homeDelivery-radio-buttons-group"
          name="homeDelivery"
          value={homeDelivery}
          onChange={handleChange}
        >
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="Recogida en tienda"
          />
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Entrega a domicilio"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Entrega de bicicletas al finalizar la reserva
        </FormLabel>
        <RadioGroup
          aria-labelledby="homePickup-radio-buttons-group"
          name="homePickup"
          value={homePickup}
          onChange={handleChange}
        >
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="Entrega en tienda"
          />
          <FormControlLabel
            value="true"
            control={<Radio />}
            label="Recogida a domicilio"
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default ContactStep;
