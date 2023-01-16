import {baseApi} from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: (id) =>
        console.log("IDDDDDDDDDDDDDDDDDDDDDDD", id) || `/bookings/${id}`,
      // providesTags: ['User'],
    }),
    getBookingsOnDate: builder.query({
      query: (date) =>
        console.log("DATEEEEEEEE", date) || `/bookings/onDate?date=${date}`,
      // providesTags: ['User'],
    }),
    getBookingsOnRange: builder.query({
      query: (dateRange) => `/bookings/onDateRange?${dateRange}`,
      // providesTags: ['User'],
    }),
    addBooking: builder.mutation({
      query: (data) => ({
        url: "/booking",
        method: "POST",
        /*
                headers: {
                    //'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8"
                },
                */
        body: data,
      }),
      // invalidatesTags: ['Orders'],
    }),
  }),
});

export const {
  useGetBookingQuery,
  useGetBookingsOnRangeQuery,
  useGetBookingsOnDateQuery,
  useLazyGetBookingsOnDateQuery,
  useAddBookingMutation,
} = bookingApi;
