import React from 'react';
import '../Styles/mainpage.css';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='pt-5 mt-5'>
            <footer className='container-xxl pt-5'>
                <div className="container py-5 border-1 border-bottom">
                    <div className="row row-gap-5 pb-5">
                        <div className="col-md-6 col-lg-3 text-start">
                            <h4 className='footer_title position-relative'>Company</h4>
                            <ul className="company_ul mb-0 ps-0 mt-4 row-gap-2">
                                {/* <li><a href="#"><i className="fa-solid fa-angle-right me-2" />About Us</a></li>
                                <li><a href="#"><i className="fa-solid fa-angle-right me-2" />Contact Us</a></li>
                                <li><a href="#"><i className="fa-solid fa-angle-right me-2" />Reservation</a></li>
                                <li><a href="#"><i className="fa-solid fa-angle-right me-2" />Privacy Policy</a></li>
                                <li><a href="#"><i className="fa-solid fa-angle-right me-2" />Terms & Condition</a></li> */}
                                <li><NavLink to="/Aboutuspage"><i className="fa-solid fa-angle-right me-2" />About us</NavLink></li>
                                <li><NavLink to="/ContactPage"><i className="fa-solid fa-angle-right me-2" />Contact Us</NavLink></li>
                                <li><NavLink to="/Bookingpage"><i className="fa-solid fa-angle-right me-2" />Reservation</NavLink></li>
                                <li><NavLink to="#"><i className="fa-solid fa-angle-right me-2" />Privacy Policy</NavLink></li>
                                <li><NavLink to="#"><i className="fa-solid fa-angle-right me-2" />Terms & Condition</NavLink></li>
                            </ul>
                        </div >
                        <div className="col-md-6 col-lg-3 text-start">
                            <h4 className='footer_title position-relative'>Contact</h4>
                            <p className='mb-2 mt-4'><i className="fa-solid fa-location-dot me-3" /><span>123 Street, New York, USA</span></p>
                            <p className='mb-2'><i className="fa-solid fa-phone me-3" /><span>+012 345 67890</span></p>
                            <p className='mb-2'><i className="fa-solid fa-envelope me-3" /><span>info@example.com</span></p>
                            <ul className="footer_social_ul mb-0 ps-0 mt-3 d-flex row-gap-2 column-gap-2">
                                <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                                <li><a href="#"><i className="fa-brands fa-youtube" /></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin-in" /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 text-start">
                            <h4 className='footer_title position-relative'>Opening</h4>
                            <h5 className='mb-1 mt-4'>Monday - Saturday</h5>
                            <p className='mb-3'>09AM - 09PM</p>
                            <h5 className='mb-1'>Sunday</h5>
                            <p className='mb-0'>10AM - 08PM</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-start">
                            <h4 className='footer_title position-relative'>Newsletter</h4>
                            <p className='mb-3'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="newsltter mx-auto">
                                <input type="text" className='ps-4 pe-5 py-3 col-12 rounded-2' placeholder='Your Email' />
                                <button className='py-2 px-3 mt-2 me-2 rounded-2'>SIGNUP</button>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="container">
                    <div className="copyright py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <p className='mb-0'>© <a href="#" className='border-bottom'>Your Site Name</a>, All Right Reserved. Designed By <a href="#" className='border-bottom'>HTML Codex</a></p>
                            </div>
                            <div className="col-md-6">
                                <div className="footer_menu d-flex align-items-center justify-content-end">
                                    <a href="#" className='px-3'>Home</a>
                                    <a href="#" className='px-3'>Cookies</a>
                                    <a href="#" className='px-3'>Help</a>
                                    <a href="#" className='ps-3 border-0'>FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer
