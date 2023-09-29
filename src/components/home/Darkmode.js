import React, { useState } from 'react';
import './Darkmode.css'
import { FiSun, FiMoon } from 'react-icons/fi'; // Example icons, you can choose your preferred icon library
import First from './First'
import Second from './Second'
import Tabs from './Tabs'
import Amazing from './Amazing'
import WhyUs from './WhyUs'
import Customers from './Customers'
import DownloadApp from '../DownloadApp'
import Footer from './Footer'
import Last from './Last'


const Darkmode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <button className="toggle-button" onClick={handleDarkModeToggle}>
                <div className="icon-container">
                    {darkMode ? <FiSun size={30} /> : <FiMoon size={30} />}
                </div>
            </button>
            {/* Your app content here */}
            <First />

            <Second />
            <Tabs />
            <Amazing />
            <WhyUs />
            <Customers />
            <DownloadApp />
            <Footer />
            <Last />
        </div>
    );
};

export default Darkmode;