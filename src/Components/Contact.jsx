import React, { useEffect } from 'react';
import '../Styles/mainpage.css';

function Contact() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);
    return (
        <div>
            <div className="container-xxl py-5 wow animate__fadeInUp"
                data-wow-delay="0.1s"
                data-wow-duration="1s">
                <div className="container">
                    <div className="heading_text wow animate__fadeInUp"
                        data-wow-delay="0.3s"
                        data-wow-duration="1s">
                        <h5 className='mb-0 fs-3 position-relative'>Contact Us</h5>
                        <h1 className='mb-0 mt-2'>Contact For Any Query</h1>
                    </div>
                    <div className="row mt-5 row-gap-4">
                        <div className="col-12 mb-4">
                            <div className="row">
                                <div className="col-md-4 contact_heading_box">
                                    <div className="contact_heading text-start py-3">
                                        <h5 className='mb-2 fs-4 position-relative'>Booking</h5>
                                        <p className='mb-0'><i className="fa-solid fa-envelope-open me-2 owncolor" />book@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-4 contact_heading_box">
                                    <div className="contact_heading text-start py-3">
                                        <h5 className='mb-2 fs-4 position-relative'>General</h5>
                                        <p className='mb-0'><i className="fa-solid fa-envelope-open me-2 owncolor" />info@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-4 contact_heading_box">
                                    <div className="contact_heading text-start py-3">
                                        <h5 className='mb-2 fs-4 position-relative'>Technical</h5>
                                        <p className='mb-0'><i className="fa-solid fa-envelope-open me-2 owncolor" />tech@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{ minHeight: 350, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-md-6">
                            <div className="reservation_text d-flex flex-column align-items-start wow animate__fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="1s">
                                <form action="#">
                                    <div className="row row-gap-3">
                                        <div className="col-md-6">
                                            <div className="reservation_inputs position-relative rounded-2">
                                                <input type="text" placeholder='' className='col-12 p-3' />
                                                <label For="name" className='p-3' >Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="reservation_inputs position-relative rounded-2">
                                                <input type="email" placeholder='' className='col-12 p-3' />
                                                <label For="EMAIL" className='p-3' >Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="reservation_inputs position-relative rounded-2">
                                                <input type="text" placeholder='' className='col-12 p-3' />
                                                <label For="subject" className='p-3' >Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="reservation_inputs position-relative rounded-2">
                                                <textarea cols="30" rows="5" className='col-12 p-3'></textarea>
                                                <label For="message" className='p-3' >Message</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="reservation_inputs">
                                                <button type='submit' className='w-100 py-3 text-uppercase rounded-2'>SEND MESSAGE</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Contact
