import React,{useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Feature from '../components/FeatureSection';
import Support from '../components/SupportSection';
import About from '../components/AboutSection';
import Contact from '../components/ContactSection';
import Footer from '../components/Footer';
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return( 
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <Feature/>
            <Support/>
            <About/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;
