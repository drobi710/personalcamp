import React from 'react'
import Navbar from './Navbar/Navbar.js';
import '/Users/mac/camp/src/components/Navbar/Navbar.css';
import '/Users/mac/camp/src/App.css';
import Footer from '/Users/mac/camp/src/components/Footer/Footer.js'
import Hero from '/Users/mac/camp/src/components/Hero/Hero.js'

function MainComponent() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Footer/>
        </div>
    )
}

export default MainComponent
