import { baseApi } from "./baseApi";


const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBookings: builder.query({
            query: (filters) => `/booking?${filters}`,
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
                body: data
            }),
            // invalidatesTags: ['Orders'],
        }),
    }),
})

export const {
    useGetBookingsQuery,
    useAddBookingMutation, } = bookingApi