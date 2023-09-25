import React from 'react'
import vg1 from '../../assets/v1.jfif'
import './Card.css'
import { FiArrowRight } from 'react-icons/fi';

import map from '../../assets/map.png'
import chef from '../../assets/cooking.png'
import birthday from '../../assets/confetti.png'
const Card = () => {
    return (
        <div className="card-container">
            {/* 1aad */}





            <div className='allColls'>
                <div className='fands'>


                    {/* col 1 */}
                    <div className='col1_1'>
                        <div className='col1Image'>
                            <img src={map} alt='man one' />
                        </div>
                        <div className='loca'>
                            <h5>Veg Mixer</h5>
                        </div>
                        <div className='plorem1'>
                            <p>Tomato, Salat & Carrot </p>


                        </div>
                        <div className='lea'>
                            <p className='pl'>$5.99</p>
                            {/* < FiArrowRight size={20} /> */}
                        </div>

                    </div>

                    {/* col 1 */}
                 
                </div>
                {/* col 2 */}

                <div className='col1_2'>
                        <div className='col2Image'>
                            <img src={map} alt='man one' />
                        </div>
                        <div className='loca'>
                            <h5>Maccaroni</h5>
                        </div>
                        <div className='plorem2'>
                            <p>Pizza and Chips </p>


                        </div>
                        <div className='lea'>
                            <p className='pl'>$5.89</p>
                            {/* < FiArrowRight size={20} /> */}
                        </div>

                    </div>



                    {/*  3 one */}


                    <div className='col1_3'>
                        <div className='col3Image'>
                            <img src={map} alt='man one' />
                        </div>
                        <div className='loca'>
                            <h5>Jelapeno Propers</h5>
                        </div>
                        <div className='plorem3'>
                            <p>Cryspo serio points </p>


                        </div>
                        <div className='lea'>
                            <p className='pl'>Learn More</p>
                            {/* < FiArrowRight size={20} /> */}
                        </div>

                    </div>





               
               


            </div>






            {/* <div className='rowOne'>
            // 1 aad 
                <div className='row1and2'>


                    <div className='row1_1'>
                        <img className='cardImg1' src={vg1} alt='image 1' />
                        <div className='card-details'>
                            <h3 className='veg'>Veg Mixer</h3>
                            <h5 className='tom'>Tomato, Salat & Carrot</h5>

                            <h3 className='price'>$9.8</h3>
                        </div>
                    </div>



    //2aad 
                    <div className='row1_2'>
                        <img className='cardImg2' src={vg1} alt='image 1' />
                        <div className='card-details'>
                            <h3 className='veg'>Veg Mixer</h3>
                            <h5 className='tom'>Tomato, Salat & Carrot</h5>

                            <h3 className='price'>$9.8</h3>
                        </div>
                    </div>
                </div>
                /////3 aad 

                <div className='row1_3'>
                    <img className='cardImg3' src={vg1} alt='image 1' />
                    <div className='card-details'>
                        <h3 className='veg'>Veg Mixer</h3>
                        <h5 className='tom'>Tomato, Salat & Carrot</h5>

                        <h3 className='price'>$9.8</h3>
                    </div>
                </div>

    



            </div> */}

            {/* 
            <div className='rowTwo'>
                // 1 aad 
                <div className='insideRowTwo'>
                    <img className='cardImg' src={vg1} alt='image 1' />
                    <div className='card-details'>
                        <h3 className='veg'>Veg Mixer</h3>
                        <h5 className='tom'>Tomato, Salat & Carrot</h5>

                        <h3 className='price'>$9.8</h3>
                    </div>
                </div>


                // 2aad *
                <div className='insideRowTwo'>
                    <img className='cardImg' src={vg1} alt='image 1' />
                    <div className='card-details'>
                        <h3 className='veg'>Veg Mixer</h3>
                        <h5 className='tom'>Tomato, Salat & Carrot</h5>

                        <h3 className='price'>$9.8</h3>
                    </div>
                </div>
                // 3 aad 

                <div className='insideRowTwo'>
                    <img className='cardImg' src={vg1} alt='image 1' />
                    <div className='card-details'>
                        <h3 className='veg'>Veg Mixer</h3>
                        <h5 className='tom'>Tomato, Salat & Carrot</h5>

                        <h3 className='price'>$9.8</h3>
                    </div>
                </div >


            // 4 aad 

                <div className='insideRowTwo'>
                    <img className='cardImg' src={vg1} alt='image 1' />
                    <div className='card-details'>
                        <h3 className='veg'>Veg Mixer</h3>
                        <h5 className='tom'>Tomato, Salat & Carrot</h5>

                        <h3 className='price'>$9.8</h3>
                    </div>
                </div>




            </div>  */}


        </div>
    )
}

export default Card