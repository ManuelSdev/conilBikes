import { baseApi } from "./baseApi";


const bikeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAvaiableBikes: builder.query({
            query: (filters) => `/bikes/avaiable?${filters}`,
            // providesTags: ['User'],
        }),



    }),
})
//const [trigger, result, lastPromiseInfo] = baseApi.endpoints.getSizes.useLazyQuery()

export const useGetAvaiableBikesQueryState = bikeApi.endpoints.getAvaiableBikes.useQueryState

//console.log('@@@@@@@@@@@@@@@@@@@@@', useQueryState)
export const {
    useGetAvaiableBikesQuery, useLazyGetAvaiableBikesQuery

} = bikeApi