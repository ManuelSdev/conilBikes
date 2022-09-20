import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material"

import { useEffect, useState } from "react"

import { useDispatch, useSelector } from 'react-redux';
import { getDate, getSize, getType } from '../../app/store/selectors';
import { useGetRangesQuery, useGetTypesQueryState, useLazyGetRangesQuery } from "../../app/store/services/filterApi"
import { typesMap } from "../../lib/utils/detailsMaps"
import { setType } from "../../app/store/bookingFormSlice"

const TypeSelect = () => {

    const dispatch = useDispatch()
    const isoDate = useSelector(getDate)
    const selectedSize = useSelector(getSize)
    const selectedType = useSelector(getType)

    const params = (b) => new URLSearchParams(b)
    const [skip, setSkip] = useState(true)
    const handleChange = (event) => {
        dispatch(setType(event.target.value))
    };
    const { data: avaiableRanges, isSuccess, refetch, isFetching } =
        useGetRangesQuery(params({ ...isoDate, size: selectedSize, type: selectedType }).toString(), { skip, refetchOnMountOrArgChange: true })

    console.log('avaiablRanges en typeselec', avaiableRanges)

    const [trigger, result, lastPromiseInfo] = useLazyGetRangesQuery()


    const { currentData: avaiableTypes, data } = useGetTypesQueryState(params({ ...isoDate, size: selectedSize }).toString())
    console.log('avaiableTypes', avaiableTypes)

    useEffect(() => {
        skip && selectedType ?
            setSkip(false)
            :
            selectedType && trigger()
        // console.log(date)
    }, [selectedType]);

    return (
        <FormControl fullWidth>
            <InputLabel id="bike-type-select-label">Tipo</InputLabel>
            <Select
                required
                labelId="bike-type-select-label"
                id='bike-type-select'
                onChange={handleChange}
                label='Type'
                value={selectedType}
            >
                {typesMap.map(type => {
                    const [engType, spaType] = type
                    return (
                        < MenuItem
                            disabled={avaiableTypes ? !avaiableTypes.includes(engType) : true}
                            key={engType} value={engType}>
                            {spaType.charAt(0).toUpperCase() + spaType.slice(1)}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl >
    )
}

export default TypeSelect