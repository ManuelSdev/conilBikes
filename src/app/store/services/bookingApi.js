import {baseApi} from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: (id) => `/bookings?_id=${id}`,
      providesTags: ["Booking"],
    }),
    getBookingsOnDate: builder.query({
      query: (date) => `/bookings/onDate?date=${date}`,
      providesTags: ["Booking"],
    }),
    getBookingDatesOnRange: builder.query({
      query: (dateRange) => `/bookings/datesOnRange?${dateRange}`,
      // providesTags: ['User'],
    }),
    addBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
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
    updateBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "PATCH",
        /*
                headers: {
                    //'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8"
                },
                */
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
  }),
});

export const {
  useGetBookingQuery,
  useGetBookingDatesOnRangeQuery,
  useLazyGetBookingDatesOnRangeQuery,
  useGetBookingsOnDateQuery,
  useLazyGetBookingsOnDateQuery,
  useAddBookingMutation,

  useUpdateBookingMutation,
} = bookingApi;
