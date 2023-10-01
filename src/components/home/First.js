import React from 'react'
import './First.css'
// import foodImg from '../assets/food.jfif'
import foodImg from '../../assets/food.jfif'
// import playIcon from '../assets/play.png'
import playIcon from '../../assets/play.png'
import Navbar from '../Navbar'

const First = ({myTheme}) => {
  return (
    <div className=' homeMain' data-theme={myTheme}>
      {/* left side starts here.. */}
      <div className=' paddingss left-side'>
        <div className='leftOne'>
          <h1 className='del'>Delicious & Affordable food</h1>
          <h1 className='mea'>Meals  Near You.</h1>
        </div>
        <div className='lorem'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      <div className='leftTwo'>
        <div className='btnClass'>
        <button className='btn' >Order now</button>

        </div>
        <div className='lastTwo'>
        <img className='playImg' src={playIcon} alt='play icon' />
        <h4>Meet The Chefs</h4>
        </div>
      </div>
        


      </div>
      <div className='paddingss right-side'>
      <img src={foodImg} alt='foodImage'/>
      </div>
    </div>
  )
}

export default First