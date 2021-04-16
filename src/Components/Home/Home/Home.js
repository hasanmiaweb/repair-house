import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import ExtraBenefit from '../ExtraBenefit/ExtraBenefit';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ExtraBenefit></ExtraBenefit>
            <About></About>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;