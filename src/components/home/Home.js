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
import Darkmode from './Darkmode'
import useLocalStorage from 'use-local-storage'

const Home = () => {

  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () =>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

  }
  return (
    <div>
      {/* <Darkmode /> */}
      <First myTheme={theme}/>
      {/* <Dark */}
      <Second myTheme={theme}/>
      <Tabs myTheme={theme} />
      <Amazing myTheme={theme} />
      <WhyUs />
      <Customers />
      <DownloadApp />
      <Footer />
      <Last />
      <div className='download'>
        {/* <DownloadApp /> */}



      </div>
      {/*       
      <Footer />
      <Last /> */}

    </div>
  )
}

export default Home