import React from 'react';
import About from '../About/About';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;