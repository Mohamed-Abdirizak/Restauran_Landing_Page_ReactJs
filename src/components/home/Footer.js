import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='paddingss'>

        <div className='mainOneFooter'>
            <div className='main'>
                <h4>Main</h4>
                <p>Blog</p>
                <p>FAQs</p>
                <p>Support</p>
                <p>About us</p>

            </div>
            <div className='pro'>
            <h4>product</h4>
                <p>Log in</p>
                <p>business</p>
                <p>personal</p>
                <p>term</p>

            </div>

            <div className='press'>
            <h4>product</h4>
                <p>Logos</p>
                <p>events</p>
                <p>stories</p>
                <p>office</p>

            </div>

            <div className='legal'>
            <h4>legal</h4>
                <p>gdbr</p>
                <p>privacy policy</p>
                <p>terms of services</p>
                <p>desclaimer</p>

            </div>

            <div className='search'>
                <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                <p>We deliver high quality blog posts written by professionals weekly. And we promise no spam.</p>

                <input type='text' className='input' placeholder='Enter Your Email Address' />
                <button className='lastbtn'>Subcscribe</button>



               




            </div>

             



        </div>

        <hr class="horizontal-line" />
        <br/>
        
        
    </div>
  )
}

export default Footer