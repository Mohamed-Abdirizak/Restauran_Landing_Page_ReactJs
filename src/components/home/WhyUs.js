import React from 'react'
import './WhyUs.css'
import foodImg from '../../assets/food.jfif'

const WhyUs = () => {
    return (
        <div className='paddingss WhyHeader'>
            <div className='why-left-side'>
            <div className='brand'>
                <h4>A Reputed Brand</h4>

                </div>

                

                    <div className='whyChoose'>
                         <h1 className='why'>Why</h1>
                    <h1 className='choose'>Choose Us ?  </h1>
                    </div>
                   
                <div className='lorem-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    {/* <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                </div>


                <div className='nums'>
                    <h2 className='num1'>94,000+</h2>
                    <h2 className='num2'>11,000+</h2>
                    <h2 className='num3'>1,500+</h2>

                </div>
                <div className='numsHoosTooda'>
                    <h2 className='num1Hoos'>Orders</h2>
                    <h2 className='num2Hoos'>Customers</h2>
                    <h2 className='num3Hoos'>Chefs</h2>

                </div>




                <div className='why-RgihtTwo'>
                    <div className='why-btnClass'>
                        <button className='btn' >Order now</button>
                    </div>
                </div>
                

            </div>



            <div className='why-right-side'>
                <img src={foodImg} alt='whyImage' />
              







            </div>





        </div>
    )
}

export default WhyUs