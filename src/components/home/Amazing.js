import React from 'react'
import './Amazing.css'
import { FiArrowRight } from 'react-icons/fi';

import map from '../../assets/map.png'
import chef from '../../assets/cooking.png'
import birthday from '../../assets/confetti.png'

const Amazing = () => {
    return (
        <>

            <div className='paddingss additonaPaddings amaHeader  '>
                {/* <div className='amaser'> */}
                <h2 className='ama'>Amazing</h2>
                <h2 className='ser'>Services</h2>
                {/* </div> */}

            </div>

            <div className='allCols'>
                <div className='firstAndSecond'>


                    {/* col 1 */}
                    <div className='col1'>
                        <div className='col1Img'>
                            <img src={map} alt='man one' />
                        </div>
                        <div className='loca'>
                            <h5>240+ Locations</h5>
                        </div>
                        <div className='plorem'>
                            <p>Lorem ipsumw aaye qoraalkan waxaana logu alagalay  in wax </p>


                        </div>
                        <div className='lea'>
                            <p className='pl'>Learn More</p>
                            < FiArrowRight size={20} />
                        </div>

                    </div>

                    {/* col 2 */}
                    <div className='col2'>
                        <div className='col2Img'>
                            <img src={chef} alt='man one' />
                        </div>
                        <div className='pro'>
                            <h5>Professional Chefs</h5>
                        </div>
                        <div className='plorem2'>
                            <p>Lorem ipsumw aaye qoraalkan waxaana logu alagalay  in wax </p>


                        </div>
                        <div className='lea'>
                            <p className='pl'>Learn More</p>
                            < FiArrowRight size={20} />
                        </div>

                    </div>
                </div>
                {/* col 3 */}
                <div className='col3'>
                    <div className='col3Img'>
                        <img src={birthday} alt='man one' />
                    </div>
                    <div className='bir'>
                        <h5>Birthday Catering</h5>
                    </div>
                    <div className='plorem3'>
                        <p>Lorem ipsumw aaye qoraalkan waxaana logu alagalay  in wax </p>


                    </div>
                    <div className='lea'>
                        <p className='pl'>Learn More</p>
                        < FiArrowRight size={20} />
                    </div>

                </div>




            </div>







        </>
    )
}

export default Amazing