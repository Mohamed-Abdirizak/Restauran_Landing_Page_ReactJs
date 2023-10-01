import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
const Navbar = ({myTheme,onToggleTheme, onSwitch}) => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

    }





    return (
        <div className=' header ' data-theme={myTheme}>
            <Link className='logo ' to="/">Portfolio</Link>


          


            <div className='navAndDark paddingss'>
                  <ul className={click ? "nav-ul active" : "nav-ul"}>
          
                <li>
                    <Link to="/" onClick={handleClick} >Home</Link>
                </li>
                <li>
                    <Link to="/designs" onClick={handleClick}>Designs</Link>
                </li>
                <li>
                    <Link to="/about" onClick={handleClick} >About</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={handleClick} >Contact</Link>
                </li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: 'var(--textColorBlackorWhite)' }} />) : (<FaBars size={20} style={{ color: 'var(--textColorBlackorWhite)' }} />)}



            </div>

            {/* light here.. */}

            <div onClick={onToggleTheme} >
                <span className="toggle-btn">
                    <FaMoon color='red' size={16} />
                    <FaSun color='orange' size={16} />
                    <div className={onSwitch ? "ball move" :  "ball"}></div>
                </span>

            </div>
            </div>
          







        </div>

    )
}

export default Navbar