import {baseApi} from "./baseApi";

const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: (filters) => `/bikes?${filters}`,
      // providesTags: ['User'],
    }),
    getBikesById: builder.query({
      query: (arrayOfIds) => ({
        url: "/bikes",
        method: "POST",

        body: arrayOfIds,
      }),
      // providesTags: ['User'],
    }),
    getAvaiableBikes: builder.query({
      query: (dateRange) => `/bikes/avaiable?${dateRange}`,
      // providesTags: ['User'],
    }),
  }),
});
//const [trigger, result, lastPromiseInfo] = baseApi.endpoints.getSizes.useLazyQuery()

export const useGetAvaiableBikesQueryState =
  bikeApi.endpoints.getAvaiableBikes.useQueryState;

export const {
  useGetBikesQuery,
  useGetBikesByIdQuery,
  useGetAvaiableBikesQuery,
  useLazyGetAvaiableBikesQuery,
} = bikeApi;
