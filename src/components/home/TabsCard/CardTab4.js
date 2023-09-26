
import React, { useState } from 'react';
import './AllCardTab.css'
import {DataCard4} from '../AllCardsData/DataCard4'
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
                        DataCard4.map((item) => (
                                <div className='cards'>

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

