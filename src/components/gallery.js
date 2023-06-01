import gallery1 from '../assets/gallery/gallery-1.png';
import gallery2 from '../assets/gallery/gallery-2.png';
import gallery3 from '../assets/gallery/gallery-3.png';
import gallery4 from '../assets/gallery/gallery-4.png';
import gallery5 from '../assets/gallery/gallery-5.png';
import gallery6 from '../assets/gallery/gallery-6.png';
function Events() {
    return (
        <div className="container gallery-container reveal" id="gallery">
        <div className="wrapper">
          <span className="sub-text">Gallery</span>
          <h2 className="title">Our Activities Gallery</h2>
          <ul className="img-gallery">
            <li>
              <img src={gallery1} alt="aalayamrehabcentre" loading="lazy"/>
            </li>
            <li>
              <img src={gallery2} alt="aalayamrehabcentre" loading="lazy"/>
            </li>
            <li>
              <img src={gallery3} alt="aalayamrehabcentre" loading="lazy"/>
            </li>
            <li>
              <img src={gallery4} alt="aalayamrehabcentre" loading="lazy"/>
            </li>
            <li>
              <img src={gallery5} alt="aalayamrehabcentre" loading="lazy"/>
            </li>
            <li>
              <img src={gallery6} alt="aalayamrehabcentre" loading="lazy"/>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Events;
  