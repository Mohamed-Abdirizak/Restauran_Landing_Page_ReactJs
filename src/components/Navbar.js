import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {

    const [click,setClick] = useState(false);

    const handleClick = () =>{
        setClick(!click)
    }




  return (
    <div className='paddingss header '>
        <Link className='logo' to="/">Portfolio</Link>


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
                {click ?( <FaTimes size={20} style={{color: 'black'}}/>) :(<FaBars size={20} style={{color: 'black'}}  />)}
               
                
               
            </div>

            light here..
        </div>

  )
}

export default Navbar