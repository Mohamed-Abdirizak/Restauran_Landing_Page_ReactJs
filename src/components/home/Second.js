import React from 'react'
import './Second.css'
import foodImg from '../../assets/food.jfif'

const Second = ({myTheme}) => {
    return (
        <div className='paddingss secondHeader' data-theme={myTheme}>
            <div className='s-left-side'>
                <img src={foodImg} alt='foodImage' />

            </div>



            <div className='s-right-side'>
                <div className='est'>
                <h4>Established Since 2014</h4>

                </div>

                


                {/* <div className='s-rightOne'> */}
                    <h1 className='we'>We've been serving for</h1>
                    <h1 className='over'>Over 5 years.</h1>
                {/* </div> */}
                <div className='s-lorem'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='s-RgihtTwo'>
                    <div className='s-btnClass'>
                        <button className='btn' >Order now</button>
                    </div>
                </div>







            </div>





        </div>
    )
}

export default Second