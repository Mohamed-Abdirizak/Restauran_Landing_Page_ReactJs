import React from 'react'
import First from './First'
import Second from './Second'
import Tabs from './Tabs'
import Amazing from './Amazing'
import WhyUs from './WhyUs'
import Customers from './Customers'
import DownloadApp from '../DownloadApp'
import './Home.css'
import Footer from './Footer'
import Last from './Last'

const Home = () => {
  return (
    <div>
      <First />
      <Second />
      <Tabs />
      {/* <Card /> */}
      <Amazing />
      <WhyUs />
      <Customers />
      <div className='download'>
      <DownloadApp />



      </div>
      
      <Footer />
      <Last />
      
    </div>
  )
}

export default Home