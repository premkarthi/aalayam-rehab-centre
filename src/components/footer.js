import logo from '../assets/logo-white.svg';
import facebook from '../assets/footer/facebook.png';
import twitter from '../assets/footer/twitter.png';
import pintrest from '../assets/footer/pintrest.png';
import linkedin from '../assets/footer/linkedin.png';
import phone from '../assets/footer/phone.png';
import mail from '../assets/footer/mail.png';
import location from '../assets/footer/location.png';
import { Link } from "react-router-dom"

function Footer() {
    return (
            <footer className="container footer">
              <div className="wrapper">
                <div className="first-section">
                  <div className="logo-wrapper">
                    <img src={logo} alt="logo" loading="lazy" />
                  </div>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua.</p>
                  <ul className="links-container">
                    <li><Link to=''>
                        <img src={facebook} alt="fb-icon" loading="lazy" />
                      </Link></li>
                    <li><Link to=''>
                        <img src={twitter} alt="twitter-icon" loading="lazy" />
                      </Link></li>
                    <li><Link to=''>
                        <img src={pintrest} alt="pintrest-icon" loading="lazy" />
                      </Link></li>
                    <li><Link to=''>
                        <img src={linkedin} alt="linkedin-icon" loading="lazy" />
                      </Link></li>
                  </ul>
                </div>
                <div className="contact-us-section">
                  <h3 className="sub-title">Contact Us</h3>
                  <ul>
                    <li>
                      <div className="content">
                        <img src={phone} alt="phone-icon" loading="lazy" />
                        <h4>Phone</h4>
                      </div>
                      <Link to='tel:6374688843'>6374688843</Link>
                    </li>
                    <li>
                      <div className="content">
                        <img src={mail} alt="mail-icon" loading="lazy" />
                        <h4>Email</h4>
                      </div>
                      <Link to='mailto:aalayamrehabcentre@gmail.com'>alayamrehabcentre@gmail.com</Link>
                    </li>
                    <li>
                      <div className="content">
                        <img src={location} alt="location-icon" loading="lazy" />
                        <h4>Address</h4>
                      </div>
                      <p>Pandy illam, #55, customs colony, thoraipakkam ,Chennai-97.</p>
                    </li>
                  </ul>
                </div>
                <div className="activities-section">
                  <h3 className="sub-title">Activities</h3>
                  <ul className="links-container">
                    <li>
                      <Link to=''>Maths Olympiad</Link>
                    </li>
                    <li>
                      <Link to=''>Art Competition</Link>
                    </li>
                    <li>
                      <Link to=''>English Novels</Link>
                    </li>
                    <li>
                      <Link to=''>Science Competition</Link>
                    </li>
                    <li>
                      <Link to=''>Teachers Day</Link>
                    </li>
                    <li>
                      <Link to=''>World Kids Day</Link>
                    </li>
                  </ul>
                </div>
                <div className="information-section">
                  <h3 className="sub-title">Information</h3>
                  <ul>
                    <li>
                      <Link to=''>privacy policy</Link>
                    </li>
                    <li>
                      <Link to=''>Terms and conditions</Link>
                    </li>
                    <li>
                      <Link to=''>site maps</Link>
                    </li>
                  </ul>
                </div>
              </div>
        </footer>
    );
  }
  
  export default Footer;
  