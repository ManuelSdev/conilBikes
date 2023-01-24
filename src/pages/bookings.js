import Layout from "../components/layouts/Layout";
import * as React from "react";
import BookingStepper from "../components/booking/BookingStepper";
import Header from "../components/header/Header";

const BookingsPage = () => {
  return (
    <Layout header={<Header />}>
      <BookingStepper></BookingStepper>
    </Layout>
  );
};

export default BookingsPage;
