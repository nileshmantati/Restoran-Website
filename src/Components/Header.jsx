import React, { useEffect } from 'react';
import '../Styles/mainpage.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

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
            <header>
                <div className="col-12" id='mainHeader'>
                    <div className="container-xxl px-0">
                        <Navbar expand="lg" className='px-4 px-lg-5 py-3'>
                            <Navbar.Brand href="#home"><i className="fa-solid fa-utensils me-3" />
                                Restoran</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#home" className='active'>Home</Nav.Link>
                                    <Nav.Link href="#about">About</Nav.Link>
                                    <Nav.Link href="#about">services</Nav.Link>
                                    <Nav.Link href="#about">menu</Nav.Link>
                                    <NavDropdown title="pages" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">Booking</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Our Team</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Testimonial</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#about">contact</Nav.Link>
                                    <Nav.Link href="#" className='option_btn px-4 ms-3 rounded-2'>book a table</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
                <section className="container-xxl px-0" id="home">
                    <div className="home_section">
                        <div className="d-flex align-items-center flex-wrap">
                            <div className="col-12 col-lg-6 home_text text-center text-lg-start px-0 px-lg-4 wow animate__slideInLeft"
                                data-wow-delay="0.3s"
                                data-wow-duration="1s">
                                <h1 className="text-white display-3">Enjoy Our <br />
                                    Delicious Meal</h1>
                                <p className='mb-0 lh-base pb-5 col-11'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <a href="#" className='px-5 py-3 rounded-2'>Book A Table</a>
                            </div>
                            <div className="col-12 col-lg-6 text-center text-lg-start px-0 px-lg-4">
                                <img src={require('../img/hero.png')} alt="Hero Img" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </div >
    )
}

export default Header
