import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftImage from './LeftSection';
import RightImage from './RightSection';
import Universee from './Universe';
import Footer from '../Footer';

function ProdcutPage() {
    return (  
        <>
            <Navbar/>
            <Hero/>
            <LeftSection/>
            <RightSection/>
            <Universee/>
            <Footer/>

        </>
    );
}

export default ProdcutPage;