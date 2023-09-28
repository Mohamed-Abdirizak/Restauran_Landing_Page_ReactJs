import React from 'react'
import './Amazing.css'
import { FiArrowRight } from 'react-icons/fi';
import { ServicesData } from './AllCardsData/ServicesData';
import map from '../../assets/map.png'
import chef from '../../assets/cooking.png'
import birthday from '../../assets/confetti.png'
import { FaArrowRight } from 'react-icons/fa';

const Amazing = () => {
    return (
        <>

            {/* <div className='paddingss additonaPaddings amaHeader  '>
                <h2 className='ama'>Amazing</h2>
                <h2 className='ser'>Services</h2>


            </div> */}

<div className='paddingss additonaPaddings amaHeader'>
  <div className='text-row'>
    <h2 className=' ama'>Amazing</h2>
    <h2 className=' ser'>Services</h2>
  </div>
</div>

            <div className='mainOnne paddingss'>

                {
                    ServicesData.map((items) => (

                        <div className='car' key={items.id}>

                            <div className='imgDiv'>
                                <img src={items.img} alt='image 1 is here' />



                            </div>
                            <div className='des'>
                                <p>{items.desc}</p>
                            </div>
                            <div className='learn'>
                                {/* <div className='h4Text'> */}

                                    <h4>{items.likeButton}</h4>
                                {/* </div> */}
                                {/* <div className='arrowIcon'> */}

                                    <FaArrowRight  size={20}/>
                                {/* </div> */}
                            </div>








                        </div>





                    ))
                }


            </div>









        </>
    )
}

export default Amazing