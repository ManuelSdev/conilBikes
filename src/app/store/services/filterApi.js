import { baseApi } from "./baseApi";


const filterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSizes: builder.query({
            query: (filters) => console.log('??????????????', filters.toString()) || `/sizes?${filters}`,
            // providesTags: ['User'],
        }),
        getTypes: builder.query({
            query: (filters) => `/types?${filters}`,
            // providesTags: ['User'],
        }),
        getRanges: builder.query({
            query: (filters) => `/ranges?${filters}`,
            // providesTags: ['User'],
        }),


    }),
})
//const [trigger, result, lastPromiseInfo] = baseApi.endpoints.getSizes.useLazyQuery()

export const useGetSizesQueryState = filterApi.endpoints.getSizes.useQueryState
export const useGetTypesQueryState = filterApi.endpoints.getTypes.useQueryState
export const useGetRangesQueryState = filterApi.endpoints.getRanges.useQueryState
//console.log('@@@@@@@@@@@@@@@@@@@@@', useQueryState)
export const {
    useGetSizesQuery, useLazyGetSizesQuery,
    useGetTypesQuery, useLazyGetTypesQuery,
    useGetRangesQuery, useLazyGetRangesQuery
} = filterApi