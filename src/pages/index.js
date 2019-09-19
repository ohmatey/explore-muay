import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import AppBar from '../modules/common/components/AppBar'
import Hero from '../modules/common/components/Hero'
import Product from '../modules/common/components/Product'
import FeatureList from '../modules/common/components/FeatureList'
// import UserInterest from '../components/UserInterest'
// import Footer from '../components/Footer'

// hero
//
// product
// features list
//
// athlete/gym

// footer

const Home = () => (
  <>
    <AppBar />

    <Hero />
    <Product />
    <FeatureList />
  </>
)

export default Home
