import React from 'react'
import './Last.css'
import fatihIcon from '../../assets/cus/f-removebg-preview.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
const Last = ({myTheme}) => {
  return (
    <div className=' mainLast' data-theme={myTheme}>
        <div className='one  paddingss'>
            <img src={fatihIcon} alt='fatih image' />
            <p>Trading Co.</p>

        </div>
        <div className='two paddingss'>
            <p>© 2018 Treact Inc. All Rights Reserved.</p>

        </div>
        <div className='three'>
            <FaFacebook className='fbicon' size={30} />
            <FaTwitter className='twicon' size={30} />
            <FaYoutube  size={30}/>
        </div>



    </div>
  )
}

export default Last