import React from 'react';
import logo from '../assets/logo.png';

const Footer = () =>{
    return(
        <footer>
            <img className='logo' src={logo} alt='logo'/>
            {/* <p>&copy; Isidora Korac 2019</p> */}
        </footer>
    )
}

export default Footer;