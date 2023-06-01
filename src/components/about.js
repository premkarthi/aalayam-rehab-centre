import child from '../assets/about-us/child-3.png';
function About() {
    return (
        <div className="container about-us-container reveal" id="about-us">
            <div className="wrapper">
            <div className="content-container">
                <span className="sub-text">Who We Are</span>
                <h2 className="title"><span>Alayam</span> Rehab Centre</h2>
                <p className="description">
                Aalayam Rehab Centre was established 2004 to provide comprehensive support for children with a diverse range of developmental disabilities. As a social initiative, our core commitment lies in serving children with special needs, as well as their families and the wider social environment. We deliver a wide array of multispecialty therapy services, including occupational therapy, special education, physiotherapy, and other physiological interventions, catering to children with various developmental disabilities such as Autism Spectrum Disorder (ASD), Attention Deficit Hyperactivity Disorder (ADHD), Attention Deficit Disorder (ADD), Cerebral Palsy (CP), Mental Retardation (MR), Down syndrome, and more.
                </p>
                <br></br>
                <p className="description">
                Our primary goal is to imbue the lives of individuals with special needs with meaning, by nurturing their strengths and abilities, empowering them to achieve maximum independence for a fulfilling existence within their own communities. Through our multi-specialist therapy approach, we pave the way for a future that is devoid of barriers, allowing children with special needs to thrive and flourish.
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
  