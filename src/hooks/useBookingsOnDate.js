import {useGetBookingsOnDateQuery} from "../app/store/services/bookingApi";
import {ACTIVE, CANCELLED, FINISHED, PENDING} from "../lib/utils/appConsts";

const useBookingsOnDate = (date) => {
  const {
    data: bookingsOnDay,
    isLoading,
    isSuccess,
    refetch,
    isFetching,
  } = useGetBookingsOnDateQuery(date, {
    //  skip,
    // refetchOnMountOrArgChange: true
  });

  const {start: bookingsStarting, end: bookingsEnding} = isSuccess
    ? bookingsOnDay
    : {start: [], end: []};

  const homeStaringBookings = bookingsStarting.filter(
    (booking) => booking.homeDelivery,
  );
  const homeEndingBookings = bookingsEnding.filter(
    (booking) => booking.homePickup,
  );
  const storeStaringBookings = bookingsStarting.filter(
    (booking) => !booking.homeDelivery,
  );
  const storeEndingBookings = bookingsEnding.filter(
    (booking) => !booking.homePickup,
  );

  const startingBookings = {
    home: homeStaringBookings,
    store: storeStaringBookings,
  };

  const endingBookings = {
    home: homeEndingBookings,
    store: storeEndingBookings,
  };
  // console.log("endingBookings: ", endingBookings);

  //Reservas que empiezan
  const getStartingDoneBookings = () =>
    [...startingBookings.home, ...startingBookings.store].filter(
      (booking) => booking.state === ACTIVE,
    );

  const getStartingPendingBookings = () =>
    [...startingBookings.home, ...startingBookings.store].filter(
      (booking) => booking.state === PENDING,
    );

  //Reservas que finalizan
  const getEndingDoneBookings = () =>
    [...endingBookings.home, ...endingBookings.store].filter(
      (booking) => booking.state === FINISHED,
    );

  const getEndingPendingBookings = () =>
    [...endingBookings.home, ...endingBookings.store].filter(
      (booking) => booking.state === ACTIVE,
    );

  const getEndingInactiveBookings = () =>
    [...endingBookings.home, ...endingBookings.store].filter(
      (booking) => booking.state === PENDING,
    );
  const c = [...endingBookings.home, ...endingBookings.store];
  //  console.log("getEndingPendingBookings: ", c);
  const getHomeDoneBookings = () => {
    const homeStartingDone = startingBookings.home.filter(
      (booking) => booking.state === ACTIVE,
    );
    const homeEndingDone = endingBookings.home.filter(
      (booking) => booking.state === FINISHED,
    );
    return [...homeStartingDone, ...homeEndingDone];
  };

  const getHomePendingBookings = () => {
    const homeStartingDone = startingBookings.home.filter(
      (booking) => booking.state === PENDING,
    );
    const homeEndingDone = endingBookings.home.filter(
      (booking) => booking.state === ACTIVE,
    );
    return [...homeStartingDone, ...homeEndingDone];
  };

  const getStoreDoneBookings = () => {
    const storeStartingDone = startingBookings.store.filter(
      (booking) => booking.state === ACTIVE,
    );
    const storeEndingDone = endingBookings.store.filter(
      (booking) => booking.state === FINISHED,
    );
    return [...storeStartingDone, ...storeEndingDone];
  };

  const getStorePendingBookings = () => {
    const storeStartingPending = startingBookings.store.filter(
      (booking) => booking.state === PENDING,
    );
    const storeEndingPending = endingBookings.store.filter(
      (booking) => booking.state === ACTIVE,
    );
    return [...storeStartingPending, ...storeEndingPending];
  };

  return {
    startingBookings,
    endingBookings,
    getStartingDoneBookings,
    getStartingPendingBookings,
    getEndingDoneBookings,
    getEndingPendingBookings,
    getHomeDoneBookings,
    getHomePendingBookings,
    getStoreDoneBookings,
    getStorePendingBookings,
    isLoading,
    isSuccess,
    refetch,
  };
  /*
  const bookingsStartingStats = bookingsStarting.reduce(
    (acc, booking) => {
      if (booking.homeDelivery) {
        acc = {...acc, home: acc.home + 1};
        if (booking.state === BOOKING_STATES_MAP.active) {
          acc = {...acc, homeCompleted: acc.homeCompleted + 1};
        }
      } else {
        acc = {...acc, store: acc.store + 1};
        if (booking.state === BOOKING_STATES_MAP.active) {
          acc = {...acc, storeCompleted: acc.storeCompleted + 1};
        }
      }
      return acc;
    },
    {
      total: bookingsStarting.length,
      home: 0,
      homeCompleted: 0,
      store: 0,
      storeCompleted: 0,
    },
  );
  const bookingsEndingStats = bookingsEnding.reduce(
    (acc, booking) => {
      if (booking.homePickup) {
        acc = {...acc, home: acc.home + 1};
        if (booking.state === BOOKING_STATES_MAP.finished) {
          acc = {...acc, homeCompleted: acc.homeCompleted + 1};
        }
      } else {
        acc = {...acc, store: acc.store + 1};
        if (booking.state === BOOKING_STATES_MAP.finished) {
          acc = {...acc, storeCompleted: acc.storeCompleted + 1};
        }
      }
    },
    {
      total: bookingsEnding.length,
      home: 0,
      homeCompleted: 0,
      store: 0,
      storeCompleted: 0,
    },
  );

  // const homeBookings=[...bookingsStarting].filter(booking=>)
  //const homeBookings = bookingsStartingStats.home + bookingsEndingStats.home;
  //  const storeBookings = bookingsStartingStats.store + bookingsEndingStats.store;



  const homeBookingsStats = {
    total: bookingsStartingStats.home + bookingsEndingStats.home,
    completed:
      bookingsStartingStats.homeCompleted + bookingsEndingStats.homeCompleted,
  };

  const homeBookings = [...homeStaringBookings, ...homeEndingBookings];
  const storeBookings = [...storeStaringBookings, ...storeEndingBookings];

  const bookingsByType = {
    bookingsStarting,
    bookingsEnding,
    homeBookings,
    storeBookings,
  };
  return {
    bookingsStarting,
    bookingsEnding,
    homeBookings,
    storeBookings,
    bookingsStartingStats,
    bookingsEndingStats,
    homeStaringBookings,
    storeStaringBookings,
    storeEndingBookings,
    homeEndingBookings,
    isLoading,
    isSuccess,
    refetch,
  };
  */
};

export default useBookingsOnDate;
