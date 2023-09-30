import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
const Navbar = ({myTheme,onToggleTheme}) => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }




    return (
        <div className='paddingss header ' data-theme={myTheme}>
            <Link className='logo' to="/">Portfolio</Link>


          


            <div className='navAndDark'>
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
                {click ? (<FaTimes size={20} style={{ color: 'black' }} />) : (<FaBars size={20} style={{ color: 'black' }} />)}



            </div>

            {/* light here.. */}

            <div onClick={onToggleTheme} >
                <span className="toggle-btn">
                    <FaMoon color='pink' size={16} />
                    <FaSun color='yellow' size={16} />
                    <div className='ball'></div>
                </span>

            </div>
            </div>
          







        </div>

    )
}

export default Navbar