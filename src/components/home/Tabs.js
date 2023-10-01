import React, { useState } from 'react';
import './Tabs.css'
import { Data } from './AllCardsData/Data'
import vg1 from '../../assets/v1.jfif'
import CardTab1 from './TabsCard/CardTab1';
import CardTab2 from './TabsCard/CardTab2';
import CardTab3 from './TabsCard/CardTab3';
import CardTab4 from './TabsCard/CardTab4';

const Tabs = ({myTheme}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='paddingss mainOne' data-theme={myTheme}>
            {/* <h1>dkfjdskl</h1> */}
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
                        Starters
                    </div>
                    <div
                        className={`tab-item ${activeTab === 1 ? 'active' : ''}`}
                        onClick={() => handleTabClick(1)}
                    >
                        Main
                    </div>
                    <div
                        className={`tab-item ${activeTab === 2 ? 'active' : ''}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Diet
                    </div>
                    <div
                        className={`tab-item ${activeTab === 3 ? 'active' : ''}`}
                        onClick={() => handleTabClick(3)}
                    >
                        Drink
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
            {activeTab === 0 && <div className="card"><CardTab1 /></div>}
            {activeTab === 1 && <div className="card"><CardTab2 /></div>}
            {activeTab === 2 && <div className="card"><CardTab3 /></div>}
            {activeTab === 3 && <div className="card"><CardTab4 /></div>}
            {/* </div> */}
        </div>
        // );
    )
};

export default Tabs;

