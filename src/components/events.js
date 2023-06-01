import { HashLink } from 'react-router-hash-link';
import class1 from '../assets/events/class-1.png';
import class2 from '../assets/events/class-2.png';
import class3 from '../assets/events/class-3.png';
function Events() {
    return (
        <div className="container events-container reveal" id="events">
    <div className="wrapper">
      <span className="sub-text">Events</span>
      <h2 className="title">Popular Events</h2>
      <ul className="cards-container">
        <li>
          <div className="img-wrapper">
            <img src={class1} loading="lazy" alt='events'/>
          </div>
          <h3>Special Education Event</h3>
          <p>Gain insights into different learning styles and discover effective teaching strategies at our "Understanding Learning Styles Seminar." Our team will share valuable information and practical techniques to support individuals with diverse learning needs. Whether you are a parent, educator, or professional working with individuals with special needs, this seminar will provide valuable knowledge and tools to enhance learning outcomes and create inclusive learning environments.</p>
          {/* <div className="timings">
            <h4>Age: <span> 3-5 Year</span></h4>
            <h4>Time: <span> 8-10 AM</span></h4>
            <h4>Seat: <span> 25</span></h4>
          </div> */}
          <HashLink smooth to="/#contact" className="btn">Join Class</HashLink>
        </li>
        <li>
          <div className="img-wrapper">
            <img src={class2} loading="lazy" alt='events'/>
          </div>
          <h3>Occupational Therapy Event</h3>
          <p>Enhance your independence and learn valuable life skills at our "Independent Living Skills Training" event. Our occupational therapists will guide you through practical activities and techniques to improve self-care, home management, and community integration. This event is open to individuals seeking to gain or regain independence in their daily lives. Join us and unlock your potential for a more fulfilling and independent lifestyle.</p>
          {/* <div className="timings">
            <h4>Age: <span> 3-5 Year</span></h4>
            <h4>Time: <span> 8-10 AM</span></h4>
            <h4>Seat: <span> 25</span></h4>
          </div> */}
          <HashLink smooth to="/#contact" className="btn">Join Class</HashLink>
        </li>
        <li>
          <div className="img-wrapper">
            <img src={class3} loading="lazy" alt='events'/>
          </div>
          <h3>Behaviour Therapy Event</h3>
          <p>Join us for a fun and interactive workshop focused on parent-child bonding and positive behavior management techniques. Our behavior therapy experts will provide valuable strategies to enhance communication, strengthen parent-child relationships, and manage challenging behaviors effectively. This workshop is open to parents, caregivers, and professionals seeking practical tools to promote healthy interactions and positive behavior patterns in children.</p>
          {/* <div className="timings">
            <h4>Age: <span> 3-5 Year</span></h4>
            <h4>Time: <span> 8-10 AM</span></h4>
            <h4>Seat: <span> 25</span></h4>
          </div> */}
          <HashLink smooth to="/#contact" className="btn">Join Class</HashLink>
        </li>

      </ul>
    </div>
  </div>
    );
  }
  
  export default Events;
  