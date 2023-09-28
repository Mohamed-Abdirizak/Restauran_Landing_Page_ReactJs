import React from 'react'
import './Customers.css'
import img1 from '../../assets/beard.png'
import { CustomerData } from './AllCardsData/CustomersData'
const Customers = () => {
    return (
        <div className='paddingss '>
            <div className='cusText'>
                <h2 className='cus'>Customers</h2>
                <h2 className='love'>Love Us.</h2>
            </div>

            {/* <div className='mainCard'>
                {
                    CustomerData.map((item) => (

                            <div className='cad'>
                                <div className='imagess'>
                                    <img src={item.img} alt='image' />
                                </div>

                            <div className='des'>
                                    <p>{item.des}</p>
                                </div>


                        </div>
                    ))
                }
            </div> */}

            <div className='mainCard'>
                {CustomerData.map((item) => (
                    <div className='cad' key={item.id}>
                        <div className='imagess'>
                            <img src={item.img} alt='image' />
                        </div>
                        <div className='des'>
                            <p>{item.des}</p>
                        </div>
                        <div className='name'>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>





        </div>
    )
}

export default Customers