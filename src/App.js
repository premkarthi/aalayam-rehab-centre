import Header from "./components/header";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";
import Events from "./components/events";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Copyright from "./components/copyright";
import Footer from "./components/footer";

import './assets/css/style.scss'
import { ToastContainer } from "react-toastify";



function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <About />
        <Services />
        <Events />
        <Gallery />
        <Contact />
        <Footer />
        <Copyright />
        <ToastContainer position="top-center"/>
    </div>
  );
}

export default App;
