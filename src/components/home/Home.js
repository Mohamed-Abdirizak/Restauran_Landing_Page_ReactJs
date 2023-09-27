import React from 'react'
import First from './First'
import Second from './Second'
import Tabs from './Tabs'
import Amazing from './Amazing'
import WhyUs from './WhyUs'
import Customers from './Customers'

const Home = () => {
  return (
    <div>
      <First />
      <Second />
      <Tabs />
      {/* <Card /> */}
      <Amazing />
      <WhyUs />
      {/* <Customers /> */}
      
    </div>
  )
}

export default Home