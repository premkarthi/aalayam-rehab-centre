import { Link } from 'react-router-dom';
import class1 from '../assets/events/class-1.png';
import class2 from '../assets/events/class-2.png';
import class3 from '../assets/events/class-3.png';
function Events() {
    return (
        <div className="container events-container reveal" id="events">
    <div className="wrapper">
      <span className="sub-text">Classes</span>
      <h2 className="title">Popular Classes</h2>
      <ul className="cards-container">
        <li>
          <div className="img-wrapper">
            <img src={class1} loading="lazy" alt='events'/>
          </div>
          <span className="price">$880</span>
          <h3>Color Matching</h3>
          <p>Lorem ipsum dolor sit amet consectetur
            adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
          <div className="timings">
            <h4>Age: <span> 3-5 Year</span></h4>
            <h4>Time: <span> 8-10 AM</span></h4>
            <h4>Seat: <span> 25</span></h4>
          </div>
          <Link to='#' className="btn">Join Class</Link>
        </li>
        <li>
          <div className="img-wrapper">
            <img src={class2} loading="lazy" alt='events'/>
          </div>
          <span className="price">$790</span>
          <h3>Learning Disciplines</h3>
          <p>Lorem ipsum dolor sit amet consectetur
            adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
          <div className="timings">
            <h4>Age: <span> 3-5 Year</span></h4>
            <h4>Time: <span> 8-10 AM</span></h4>
            <h4>Seat: <span> 25</span></h4>
          </div>
          <Link to='#' className="btn">Join Class</Link>
        </li>
        <li>
          <div className="img-wrapper">
            <img src={class3} loading="lazy" alt='events'/>
          </div>
          <span className="price">$590</span>
          <h3>Drawing</h3>
          <p>Lorem ipsum dolor sit amet consectetur
            adipiscing elit sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
          <div className="timings">
            <h4>Age: <span> 3-5 Year</span></h4>
            <h4>Time: <span> 8-10 AM</span></h4>
            <h4>Seat: <span> 25</span></h4>
          </div>
          <Link to='#' className="btn">Join Class</Link>
        </li>

      </ul>
    </div>
  </div>
    );
  }
  
  export default Events;
  