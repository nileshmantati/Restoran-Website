import React, { useEffect } from 'react';
import '../Styles/mainpage.css';

function About() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row row-gap-5">
                        <div className="col-lg-6">
                            <div className="row row-gap-4">
                                <div className="col-6">
                                    <img src={require('../img/about-1.jpg')} alt="" className='h-auto w-100 wow animate__zoomIn'
                                        data-wow-delay="0.3s"
                                        data-wow-duration="1s" />
                                </div>
                                <div className="col-6 text-start">
                                    <img src={require('../img/about-2.jpg')} alt="" className='h-auto about_img2 w-75 wow animate__zoomIn'
                                        data-wow-delay="0.3s"
                                        data-wow-duration="1s" />
                                </div>
                                <div className="col-6 text-end">
                                    <img src={require('../img/about-3.jpg')} alt="" className='h-auto w-75 wow animate__zoomIn'
                                        data-wow-delay="0.3s"
                                        data-wow-duration="1s" />
                                </div>
                                <div className="col-6">
                                    <img src={require('../img/about-4.jpg')} alt="" className='h-auto w-100 wow animate__zoomIn'
                                        data-wow-delay="0.3s"
                                        data-wow-duration="1s" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="about_text d-flex flex-column align-items-start">
                                <h5 className='fs-3 position-relative'>About Us</h5>
                                <h1 className='mb-4'>Welcome to <i className="fa-solid fa-utensils me-3" />
                                    Restoran</h1>
                                <p class="mb-4 text-start">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                                <p class="mb-4 text-start">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div className="row col-12 mb-5 row-gap-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex border-5 border-start border_primary px-3">
                                            <h1 className='text_primary display-5'>15</h1>
                                            <div className="d-flex flex-column ps-4 text-start">
                                                <p className='mb-0'>Years of</p>
                                                <h6 className='mb-0 text-uppercase fw-bold'>experience</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex border-5 border-start border_primary px-3">
                                            <h1 className='text_primary display-5'>50</h1>
                                            <div className="d-flex flex-column ps-4 text-start">
                                                <p className='mb-0'>Popular</p>
                                                <h6 className='mb-0 text-uppercase fw-bold'>master chefs</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className='px-5 py-3 rounded-2'>read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
