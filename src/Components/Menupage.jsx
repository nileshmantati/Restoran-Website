import React, { useEffect } from 'react';
import '../Styles/mainpage.css';
import '../Styles/header.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';

function Menupage() {
    useEffect(() => {
        const header = document.getElementById("mainHeader");

        if (!header) return;

        const handleScroll = () => {
            if (window.scrollY > 200) {
                header.classList.add("shrink");
            } else {
                header.classList.remove("shrink");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);
    return (
        <div>
            {/* Header Start  */}
            <header className='mb-4'>
                <div className="col-12" id='mainHeader'>
                    <div className="container-xxl px-0">
                        <Navbar expand="lg" className='px-4 px-lg-5 py-3'>
                            <Navbar.Brand href="#home"><i className="fa-solid fa-utensils me-3" />
                                Restoran</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                                    <NavLink to="/Aboutuspage" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
                                    <NavLink to="/Servicepage" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>services</NavLink>
                                    <NavLink to="/Menupage" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>menu</NavLink>
                                    <NavDropdown title="pages" id="basic-nav-dropdown">
                                        <NavLink to="/Bookingpage" className={({ isActive }) => isActive ? 'nav-dropdown active' : 'nav-dropdown'}>Booking</NavLink>
                                        <NavLink to="/Teampage" className={({ isActive }) => isActive ? 'nav-dropdown active' : 'nav-dropdown'}>Our Team</NavLink>
                                        <NavLink to="/Testimonialpage" className={({ isActive }) => isActive ? 'nav-dropdown active' : 'nav-dropdown'}>Testimonial</NavLink>
                                    </NavDropdown>
                                    <NavLink to="/ContactPage" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>contact</NavLink>
                                    <Nav.Link href="#" className='option_btn px-4 ms-3 rounded-2'>book a table</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <section className="container-xxl px-0" id="home">
                    <div className="home_section">
                        <div className="d-flex align-itemFs-center flex-wrap">
                            <div className="col-12 home_text text-center px-0 px-lg-4 wow animate__fadeInDown"
                                data-wow-delay="0.3s"
                                data-wow-duration="1s">
                                <h1 className="text-white display-3">Food Menu</h1>
                                <nav className='about_nav mt-3'>
                                    <ul className='mb-0 ps-0 d-flex justify-content-center'>
                                        <li><NavLink to="/" className="px-2">Home</NavLink></li>
                                        <li className='px-2'>MENU</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            {/* Header End  */}

            {/* Menu Section Start  */}
            <Menu />
            {/* Menu Section End  */}

            {/* Footer Start  */}
            <Footer />
            {/* Footer End  */}
        </div>
    )
}

export default Menupage
