import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import BikeTypes from '../components/home/BikeTypes'
import Layout from '../components/layouts/Layout'

export default function Home() {
  return (

    <Layout>



      <BikeTypes></BikeTypes>
    </Layout>

  )
}
