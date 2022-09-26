import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import { sizesMap } from '../../lib/utils/detailsMaps';
import { useGetSizesQuery, usePrefetch, useLazyGetSizesQuery, useGetSizesQueryState, useGetTypesQuery, useLazyGetTypesQuery } from '../../app/store/services/filterApi';
import { useDispatch, useSelector } from 'react-redux';
import { getDate, getDateError, getSize } from '../../app/store/selectors';
import { setSize } from '../../app/store/bookingFormSlice';
import compareAsc from "date-fns/compareAsc";
export default function SizeSelect() {
    const dispatch = useDispatch()
    const isoDate = useSelector(getDate)
    const dateError = useSelector(getDateError)
    const selectedSize = useSelector(getSize)

    const params = (b) => new URLSearchParams(b)

    const [skip, setSkip] = React.useState(true)
    const handleChange = (event) => {
        //setAge(event.target.value);
        dispatch(setSize(event.target.value))
    };



    const { data: avaiableSizes, isSuccess, refetch, isFetching } = useGetSizesQuery(
        params(isoDate).toString(),
        {
            skip,
            // refetchOnMountOrArgChange: true
        })

    const [trigger, result, lastPromiseInfo] = useLazyGetSizesQuery()

    const dateIsCorrect = () =>
        (!!isoDate.from
            && !!isoDate.to
            && (compareAsc(new Date(isoDate.to), new Date(isoDate.from)) === 1)
            && !!!dateError) ?
            true : false

    React.useEffect(() => {

        if (dateIsCorrect())
            skip ?
                console.log('skip----------------------') || setSkip(false)
                :
                console.log('dispatch+++++++++++++++++++++') || dispatch(setSize(''))
    }, [isoDate]);


    console.log(isoDate)


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth disabled={!!!avaiableSizes}>
                <InputLabel id="bike-size-select-label">Talla</InputLabel>
                <Select

                    labelId="bike-size-select-label"
                    id="bike-size-select"
                    value={selectedSize}
                    label="Size"
                    onChange={handleChange}
                >
                    {sizesMap.map(elem => {
                        const [size, [min, max]] = elem
                        return <MenuItem
                            disabled={avaiableSizes ? !avaiableSizes.includes(size) : true}
                            key={size} value={size}>
                            {`${size.toUpperCase()} - si mides entre ${min} y ${max} cm `}
                        </MenuItem>
                    })
                    }

                </Select>
                <FormHelperText>Selecciona una talla en función de tu altura</FormHelperText>

            </FormControl>
        </Box>
    );
}
