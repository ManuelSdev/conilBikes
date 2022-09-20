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
import { getDate, getSize } from '../../app/store/selectors';
import { setSize } from '../../app/store/bookingFormSlice';

export default function SizeSelect() {
    const dispatch = useDispatch()
    const isoDate = useSelector(getDate)
    const selectedSize = useSelector(getSize)

    const params = (b) => new URLSearchParams(b)

    const [skip, setSkip] = React.useState(true)
    const handleChange = (event) => {
        //setAge(event.target.value);
        dispatch(setSize(event.target.value))
    };
    const { data: avaiableTypes, isSuccess, refetch, isFetching } =
        useGetTypesQuery(params({ ...isoDate, size: selectedSize }).toString(), { skip, refetchOnMountOrArgChange: true })

    const [trigger, result, lastPromiseInfo] = useLazyGetTypesQuery()

    const { currentData: avaiableSizes, data } = useGetSizesQueryState(params(isoDate).toString())
    React.useEffect(() => {
        skip && selectedSize ?
            setSkip(false)
            :
            selectedSize && trigger()
        // console.log(date)
    }, [selectedSize]);
    //useLazyGetTypesQuery



    console.log('avaiableSizes', avaiableSizes)
    console.log('data', data)



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
