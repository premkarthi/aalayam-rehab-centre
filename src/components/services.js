import child4 from '../assets/services/child-4.png';
import Physiotherapy from '../assets/services/Physiotherapy.png';
import OccupationalTherapy from '../assets/services/Occupational-therapy.png';
import BehaviourTherapy from '../assets/services/Behaviour-therapy.png';
import SpecialEducation from '../assets/services/Special-education.png';

function Services() {
    return (
        <div className="container services-container reveal" id="services">
            <div className="wrapper">
                <span className="sub-text">Why Choose Us</span>
                <h2 className="title">Our Services</h2>
                <div className="content-wrapper">
                    <div className="img-wrapper">
                    <img src={child4} alt="child-4-img" loading="lazy"/>
                    </div>
                    <ul className="text-wrapper">
                    <li>
                        <img src={Physiotherapy} alt="icon" loading="lazy"/>
                        <h3>Physiotherapy</h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor incididunt
                        </p>
                    </li>
                    <li>
                        <img src={OccupationalTherapy} alt="icon" loading="lazy"/>
                        <h3>Occupational therapy</h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor incididunt
                        </p>
                    </li>
                    <li>
                        <img src={BehaviourTherapy} alt="icon" loading="lazy"/>
                        <h3>Behaviour therapy</h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor incididunt
                        </p>
                    </li>
                    <li>
                        <img src={SpecialEducation} alt="icon" loading="lazy"/>
                        <h3>Special education</h3>
                        <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor incididunt
                        </p>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
  
  export default Services;
  