import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"

import { useEffect, useState } from "react"

import { useDispatch, useSelector } from 'react-redux';
import { getDate, getRange, getSize, getType } from '../../app/store/selectors';
import { useGetRangesQuery, useGetRangesQueryState, useLazyGetRangesQuery } from "../../app/store/services/filterApi"
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
    const args = params({ ...isoDate, size: selectedSize, type: selectedType }).toString()

    const handleChange = (event) => {
        //  console.log('@@@@@@@@ handleChange rangeSelect')
        dispatch(setRange(event.target.value))

    };

    const [trigger, { data: avaiableRanges }, lastPromiseInfo] = useLazyGetRangesQuery()

    useEffect(() => {

        selectedRange &&
            //  console.log('@@@@@@@@ dispatch rangeSelect') || 
            dispatch(setRange(''))
        selectedType &&
            //   console.log('@@@@@@@@ trigger rangeSelect') ||
            trigger(args)

    }, [selectedType]);


    return (
        <FormControl fullWidth disabled={!!!selectedType}>
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