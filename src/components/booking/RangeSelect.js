import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"

import { useEffect, useState } from "react"

import { useDispatch, useSelector } from 'react-redux';
import { getDate, getRange, getSize, getType } from '../../app/store/selectors';
import { useGetRangesQueryState } from "../../app/store/services/filterApi"
import { rangesMap } from "../../lib/utils/detailsMaps"
import { setRange } from "../../app/store/bookingFormSlice"
import { useGetAvaiableBikesQuery, useLazyGetAvaiableBikesQuery } from "../../app/store/services/bikeApi"

const RangeSelect = () => {

    const dispatch = useDispatch()
    const isoDate = useSelector(getDate)
    const selectedSize = useSelector(getSize)
    const selectedType = useSelector(getType)
    const selectedRange = useSelector(getRange)


    const params = (b) => new URLSearchParams(b)
    const [skip, setSkip] = useState(true)

    const handleChange = (event) => {
        dispatch(setRange(event.target.value))

    };


    const { data: avaiableBikes, isSuccess, refetch, isFetching } =
        useGetAvaiableBikesQuery(params({ ...isoDate, size: selectedSize, type: selectedType, range: selectedRange }).toString(), { skip, refetchOnMountOrArgChange: true })
    console.log('avaiableBikes recibidas en rangeSelect', avaiableBikes)
    const [trigger, result, lastPromiseInfo] = useLazyGetAvaiableBikesQuery()


    const { currentData: avaiableRanges, data } = useGetRangesQueryState(params({ ...isoDate, size: selectedSize, type: selectedType }).toString())
    console.log('avaiableClasses', avaiableRanges)


    useEffect(() => {
        skip && selectedRange ?
            setSkip(false)
            :
            selectedRange && trigger()
        // console.log(date)
    }, [selectedRange]);

    return (
        <FormControl fullWidth>
            <InputLabel id="bike-range-select-label">Gama</InputLabel>
            <Select
                required
                labelId="bike-range-select-label"
                id='bike-range-select'
                onChange={handleChange}
                label='Range'
                value={selectedRange}
            >
                {rangesMap.map(range => {
                    const [engRange, spaRange] = range
                    return (
                        <MenuItem
                            disabled={avaiableRanges ? !avaiableRanges.includes(engRange) : true}
                            key={engRange} value={engRange}>
                            {spaRange.charAt(0).toUpperCase() + spaRange.slice(1)}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default RangeSelect