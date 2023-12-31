

import React, { useState } from 'react';
import './AllCardTab.css'
import { DataCard3 } from '../AllCardsData/DataCard3'
import {FaStar} from 'react-icons/fa'

// import { Data } from './Data'
// import vg1 from '../../assets/v1.jfif'
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='paddingss '>
            {/*start  tabs... */}

            {/* tabs end.... */}
            {/* <div className="card-container"> */}
            <div className="parentDiv">
                {
                    DataCard3.map((item) => (
                        <div className='cards'>

                            <div className='star'>
                                <FaStar size={20} style={{ color: 'orange' }} />
                                <h4 className='rate'>{item.rate}</h4>
                                <p className='peo'>({item.peopleRated})</p>
                            </div>

                            <img className='cardImg' src={item.imgPath} alt='image 1' />
                            <div className='card-details'>
                                <h3 className='topic'>{item.name}</h3>
                                <h5 className='desc'>{item.desc}</h5>

                                <h3 className='price'>{item.price}</h3>
                            </div>



                        </div>

                        // </div>
                    ))
                }






            </div>
            {/* {activeTab === 1 && <div className="card">Card 2</div>}
                {activeTab === 2 && <div className="card">Card 3</div>}
                {activeTab === 3 && <div className="card">Card 4</div>} */}
            {/* </div> */}
        </div>
    );
};

export default Tabs;

