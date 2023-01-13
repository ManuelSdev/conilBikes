import {baseApi} from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBookingsOnDate: builder.query({
      query: (date) => `/bookings/onDate?date=${date}`,
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
  useGetBookingsOnRangeQuery,
  useGetBookingsOnDateQuery,
  useLazyGetBookingsOnDateQuery,
  useAddBookingMutation,
} = bookingApi;
