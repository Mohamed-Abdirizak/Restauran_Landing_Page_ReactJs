import React, { useState } from 'react';
import './Tabs.css'
import { Data } from '../../components/home/Data'
import vg1 from '../../assets/v1.jfif'
import Card from './Card';
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='paddingss'>
            {/*start  tabs... */}
            <div className='tabsAndTopic'>
                <div className='tTopic'>
                    <h3 className='check'>Checkout Our</h3>
                    <h2 className='menu'>Menu.</h2>

                </div>


                <div className="tab-list">
                    <div
                        className={`tab-item ${activeTab === 0 ? 'active' : ''}`}
                        onClick={() => handleTabClick(0)}
                    >
                        Tab 1
                    </div>
                    <div
                        className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}
                    >
                        Tab 2
                    </div>
                    <div
                        className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Tab 3
                    </div>
                    <div
                        className={`tab-item ${activeTab === 3 ? 'active' : ''}`}
                        onClick={() => handleTabClick(3)}
                    >
                        Tab 4
                    </div>
                </div>
            </div>
            {/* tabs end.... */}
            {/* <Card /> */}
            {/* <div className="card-container">
                    
                                <div className='rowOne'>

                                    <img className='cardImg' src={vg1} alt='image 1' />
                                    <div className='card-details'>
                                        <h3 className='veg'>Veg Mixer</h3>
                                        <h5 className='tom'>Tomato, Salat & Carrot</h5>

                                        <h3 className='price'>$9.8</h3>
                                    </div>



                                </div>

        </div> */}
                






                {/* </div>} */}
                {activeTab === 0 && <div className="card">
                    {/* <Card /> */}
                    fdsaf
                </div>}
                {activeTab === 1 && <div className="card">Card 2</div>}
                {activeTab === 2 && <div className="card">Card 3</div>}
                {activeTab === 3 && <div className="card">Card 4</div>}
            {/* </div> */}
         </div>
    // );
)};

export default Tabs;

