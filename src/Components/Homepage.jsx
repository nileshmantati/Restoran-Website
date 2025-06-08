import React from 'react'
import Header from './Header';
import Service from './Service';
import About from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import Masterchefs from './Masterchefs';
import Testimonial from './Testimonial';
import Footer from './Footer';

function Homepage() {
    return (
        <div>
            <Header />
            <Service />
            <About />
            <Menu />
            <Reservation />
            <Masterchefs />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Homepage
