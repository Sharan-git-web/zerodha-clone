import React from 'react';

import Hero from './Hero';
import People from './Team';
import Navbar from '../Navbar';

function About() {
    return ( 
        <>  
            <Navbar/>
            <Hero/>
            <Team/>
            <Footer/>
        </>
     );
}

export default AboutPage;