import React, { useEffect } from 'react';
import '../Styles/mainpage.css';

function Reservation() {
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
                <div className="row">
                    <div className="col-md-6 px-0">
                        <div className="video d-flex justify-content-center align-items-center">
                            <button><i className="fa-solid fa-play fa-2x" /></button>
                        </div>
                    </div>
                    <div className="col-md-6 main_form_box px-0">
                        <div className="reservation_text d-flex flex-column align-items-start p-5 wow animate__fadeInUp"
                            data-wow-delay="0.3s"
                            data-wow-duration="1s">
                            <h5 className='fs-3 position-relative'>Reservation</h5>
                            <h1 className='mb-4 text-white'>Book A Table Online</h1>
                            <form action="#">
                                <div className="row row-gap-3">
                                    <div className="col-md-6">
                                        <div className="reservation_inputs position-relative rounded-2 overflow-hidden">
                                            <input type="text" placeholder='' className='col-12 p-3' required />
                                            <label For="name" className='p-3' >Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="reservation_inputs position-relative rounded-2 overflow-hidden">
                                            <input type="email" placeholder='' className='col-12 p-3' required />
                                            <label For="EMAIL" className='p-3' >Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="reservation_inputs position-relative rounded-2 overflow-hidden">
                                            <input type="text" placeholder='' className='col-12 p-3' />
                                            <label For="datetime" className='p-3' >Date & Time</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="reservation_inputs position-relative rounded-2 overflow-hidden">
                                            <select className='select col-12 px-3 '>
                                                <option value="1">People 1</option>
                                                <option value="2">People 2</option>
                                                <option value="3">People 3</option>
                                            </select>
                                            <label For="select" className='people_label p-3' >No Of People</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="reservation_inputs position-relative rounded-2 overflow-hidden">
                                            <textarea cols="30" rows="3" className='col-12 p-3'></textarea>
                                            <label For="message" className='p-3' >Special Request</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="reservation_inputs">
                                            <button type='submit' className='w-100 py-3 text-uppercase rounded-2'>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Reservation
