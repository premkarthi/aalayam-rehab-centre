import logo from '../assets/logo-dark.svg';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

function Header() {
    const [active, setActive] = useState(true)
    const handler = () =>{
        setActive(!active)
    }
    return (
            <header>
                <div className="wrapper">
                    <Link to='#' className="logo-wrapper">
                        <img src={logo} loading="lazy" alt='aalayam-rehab-centre'/>
                    </Link>
                    <ul className={active ? 'nav-links' : 'nav-links active'}>
                        <li className="active"><HashLink smooth to="/#home" onClick={handler}>Home</HashLink></li>
                        <li><HashLink smooth to="/#about-us" onClick={handler}>About Us</HashLink></li>
                        <li><HashLink smooth to="/#services" onClick={handler}>Services</HashLink></li>
                        <li><HashLink smooth to="/#events" onClick={handler}>Events</HashLink></li>
                        <li><HashLink smooth to="/#gallery" onClick={handler}>Gallery</HashLink></li>
                        <li><HashLink smooth to="/#contact" onClick={handler}>contact</HashLink></li>
                    </ul>
                    <button className={active ? 'hamburger' : 'hamburger active'}  onClick={handler}> 
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
    );
  }
  
  export default Header;
  