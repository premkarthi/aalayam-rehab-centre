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
                        Our experienced physiotherapists are trained to assess and treat a wide range of musculoskeletal and neurological conditions. Through personalized treatment plans, we aim to reduce pain, restore mobility, and enhance overall physical function.
                        </p>
                    </li>
                    <li>
                        <img src={OccupationalTherapy} alt="icon" loading="lazy"/>
                        <h3>Occupational therapy</h3>
                        <p className="description">
                        Our occupational therapy program focuses on empowering individuals to participate in daily activities and improve their quality of life. Our skilled occupational therapists work closely with clients to address physical, cognitive, and emotional challenges
                        </p>
                    </li>
                    <li>
                        <img src={BehaviourTherapy} alt="icon" loading="lazy"/>
                        <h3>Behaviour therapy</h3>
                        <p className="description">
                        Our behavior therapy services are designed to support individuals with behavioral and emotional difficulties. Our team of licensed therapists utilizes evidence-based techniques to assess, analyze, and modify challenging behaviors
                        </p>
                    </li>
                    <li>
                        <img src={SpecialEducation} alt="icon" loading="lazy"/>
                        <h3>Special education</h3>
                        <p className="description">
                        we understand the unique learning needs of individuals with special needs. Our dedicated special education team provides tailored educational programs that promote academic, social, and emotional development.
                        </p>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
  
  export default Services;
  