

import React, { useState } from 'react';
import './AllCardTab.css'
import { Data } from '../AllCardsData/Data'
import {FaStar} from 'react-icons/fa'



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
                    Data.map((item) => (
                        <div className='cards'>
                               <div className='star'>
                                <FaStar size={20} style={{color: 'orange'}} />
                                <h4 className='rate'>{item.rate}</h4>
                                <p className='peo'>({item.peopleRated})</p>
                            </div>

                            <img className='cardImg' src={item.imgPath} alt='image 1' />
                            {/* <button className='bnto' >Button</button> */}
                         
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

