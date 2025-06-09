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
            {/* Header Start  */}
            <Header />
            {/* Header End  */}

            {/* Services Section Start  */}
            <Service />
            {/* Services Section End   */}

            {/* About Section Start */}
            <About />
            {/* About Section End  */}

            {/* Menu Section Start  */}
            <Menu />
            {/* Menu Section End  */}

            {/* Reservation Section Start  */}
            <Reservation />
            {/* Reservation Section End   */}

            {/* MasterChefs Section Start  */}
            <Masterchefs />
            {/* MasterChefs Section End   */}

            {/* Testimonial Section Start  */}
            <Testimonial />
            {/* Testimonial Section End   */}

            {/* Footer Start  */}
            <Footer />
            {/* Footer End  */}
        </div>
    )
}

export default Homepage
