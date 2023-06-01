import child from '../assets/about-us/child-3.png';
function About() {
    return (
        <div className="container about-us-container reveal" id="about-us">
            <div className="wrapper">
            <div className="content-container">
                <span className="sub-text">Who We Are</span>
                <h2 className="title"><span>Alayam</span> Rehab Centre</h2>
                <p className="description">
                Alayam Rehab Centre has been established in 2004 to cater to the
                children with all kinds of Developmental disabilities. Alayam Rehab
                Centre is a social initiative, committed to serve the children with
                special needs, their families and the associated social environment.
                We offer multispecialty therapy services such as occupational
                therapy, Special education, physiotherapy, and other physiological
                services for the children with all types of developmental
                disabilities like ASD, ADHD, ADD, CP, MR, Down syndrome and so On.
                </p>
                <p className="description">
                We work with the aim of adding meaning to the life of an individual
                with special needs by inculcating their strength and their abilities
                to achieve maximum independency for a pleasant survival in the
                society they belong. The intervention multi-specialist therapy
                approach paves the way for the barrier free, better future of the
                children with special needs.
                </p>
            </div>

            <div className="img-wrapper">
                <img src={child} alt="child-img" loading="lazy"/>
            </div>
            </div>
        </div>
    );
  }
  
  export default About;
  