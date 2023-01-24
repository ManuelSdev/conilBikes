import {baseApi} from "./baseApi";
const urlParams = (obj) => new URLSearchParams(obj);

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: (filters) => `/bikes?${filters}`,
    }),
    getBikesById: builder.query({
      query: (arrayOfIds) => ({
        url: "/bikes",
        method: "POST",

        body: arrayOfIds,
      }),
    }),

    getAvaiableSizes: builder.query({
      query: ({from, to}) => `/bikes/avaiable-sizes?${urlParams({from, to})}`,
    }),
    getAvaiableTypes: builder.query({
      query: ({from, to, size}) =>
        `/bikes/avaiable-types?${urlParams({from, to, size})}`,
    }),
    getAvaiableRanges: builder.query({
      query: ({from, to, size, type}) =>
        `/bikes/avaiable-ranges?${urlParams({from, to, size, type})}`,
    }),
    getAvaiableBikes: builder.query({
      query: ({from, to, size, type, range}) =>
        `/bikes/avaiable?${urlParams({from, to, size, type, range})}`,
    }),
  }),
});
//const [trigger, result, lastPromiseInfo] = baseApi.endpoints.getSizes.useLazyQuery()

export const useGetAvaiableBikesQueryState =
  bikeApi.endpoints.getAvaiableBikes.useQueryState;

export const {
  useGetBikesQuery,
  useGetBikesByIdQuery,
  useGetAvaiableSizesQuery,
  useGetAvaiableTypesQuery,
  useLazyGetAvaiableTypesQuery,
  useLazyGetAvaiableRangesQuery,
  useGetAvaiableRangesQuery,
  useGetAvaiableBikesQuery,
  useLazyGetAvaiableBikesQuery,
} = bikeApi;
