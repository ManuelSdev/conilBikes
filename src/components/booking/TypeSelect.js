import {
  Box,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
} from "@mui/material";

import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {getDate, getSize, getType} from "../../app/store/selectors";

import {typesMap} from "../../lib/utils/detailsMaps";
import {setType} from "../../app/store/bookingFormSlice";
import {capitalizeFirst} from "../../lib/utils/functions";
import {useLazyGetAvaiableTypesQuery} from "../../app/store/services/bikeApi";

const TypeSelect = () => {
  const dispatch = useDispatch();
  const isoDate = useSelector(getDate);
  const selectedSize = useSelector(getSize);
  const selectedType = useSelector(getType);

  const args = {...isoDate, size: selectedSize};

  const handleChange = (event) => {
    dispatch(setType(event.target.value));
  };

  const [
    trigger,
    {data: avaiableTypes, isLoading, isSuccess, unsubscribe},
    lastPromiseInfo,
  ] = useLazyGetAvaiableTypesQuery();

  useEffect(() => {
    selectedType && dispatch(setType(""));
    selectedSize && trigger(args);
  }, [selectedSize]);

  const loadingLabel = () => (
    <Box>
      Cargando tipos de bicicleta
      <LinearProgress
        sx={
          {
            //      backgroundColor: 'grey',
            //      color: 'red',
            //display: 'flex',
            //       justifySelf: 'center',
            //      position: 'relative',
            //   '&..MuiCircularProgress-root.MuiCircularProgress-svg': { position: 'relative' },
          }
        }
      />
    </Box>
  );

  return (
    <FormControl
      fullWidth
      disabled={!!!selectedSize}
    >
      <InputLabel
        id="bike-type-select-label"
        sx={{width: "100%"}}
      >
        {isLoading ? loadingLabel() : "Tipo"}
      </InputLabel>
      <Select
        required
        labelId="bike-type-select-label"
        id="bike-type-select"
        onChange={handleChange}
        label="Type"
        value={selectedType}
      >
        {typesMap.map((type) => {
          const [engType, spaType] = type;
          return (
            <MenuItem
              disabled={avaiableTypes ? !avaiableTypes.includes(engType) : true}
              key={engType}
              value={engType}
            >
              {capitalizeFirst(spaType)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TypeSelect;
