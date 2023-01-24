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
import {getDate, getRange, getSize, getType} from "../../app/store/selectors";
import {rangesMap} from "../../lib/utils/detailsMaps";
import {setRange} from "../../app/store/bookingFormSlice";
import {useLazyGetAvaiableRangesQuery} from "../../app/store/services/bikeApi";
import {capitalizeFirst} from "../../lib/utils/functions";

const RangeSelect = () => {
  const dispatch = useDispatch();
  const isoDate = useSelector(getDate);
  const selectedSize = useSelector(getSize);
  const selectedType = useSelector(getType);
  const selectedRange = useSelector(getRange);

  const params = (b) => new URLSearchParams(b);
  const args = {
    ...isoDate,
    size: selectedSize,
    type: selectedType,
  };

  const handleChange = (event) => {
    //  console.log('@@@@@@@@ handleChange rangeSelect')
    dispatch(setRange(event.target.value));
  };

  const [trigger, {data: avaiableRanges, isLoading}, lastPromiseInfo] =
    useLazyGetAvaiableRangesQuery();

  useEffect(() => {
    selectedRange &&
      //  console.log('@@@@@@@@ dispatch rangeSelect') ||
      dispatch(setRange(""));
    selectedType &&
      //   console.log('@@@@@@@@ trigger rangeSelect') ||
      trigger(args);
  }, [selectedType]);

  const loadingLabel = () => (
    <Box>
      Cargando gamas disponibles
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
      disabled={!!!selectedType}
    >
      <InputLabel
        id="bike-range-select-label"
        sx={{width: "100%"}}
      >
        {isLoading ? loadingLabel() : "Gama"}
      </InputLabel>
      <Select
        required
        labelId="bike-range-select-label"
        id="bike-range-select"
        onChange={handleChange}
        label="Range"
        value={selectedRange}
      >
        {rangesMap.map((range) => {
          const [engRange, spaRange] = range;
          return (
            <MenuItem
              disabled={
                avaiableRanges ? !avaiableRanges.includes(engRange) : true
              }
              key={engRange}
              value={engRange}
            >
              {capitalizeFirst(spaRange)}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default RangeSelect;
