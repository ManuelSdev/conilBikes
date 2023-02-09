import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import BikeTypes from "../components/home/BikeTypes";
import Layout from "../components/layouts/Layout";

export default function Home() {
  return (
    <Layout header={<Header />}>
      <BikeTypes></BikeTypes>
    </Layout>
  );
}
