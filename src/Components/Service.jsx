import React, { useEffect } from 'react';
import '../Styles/mainpage.css';

function Service() {
    const service = [{
        icon: <i className="fa-solid fa-user-tie fa-3x" />,
        title: "Master Chefs",
        contant: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
        icon: <i className="fa-solid fa-utensils fa-3x" />,
        title: "Quality Food",
        contant: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
        icon: <i className="fa-solid fa-cart-plus fa-3x" />,
        title: "Online Order",
        contant: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    },
    {
        icon: <i className="fa-solid fa-headset fa-3x" />,
        title: "24/7 Service",
        contant: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    }]
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);
    return (
        <div className='pt-5'>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row row-gap-4">
                        {service.map((item) => (
                            <div className="col-sm-6 col-lg-3 wow animate__fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="1s" >
                                < div className="service_box px-4 py-5 rounded-3 text-start" >
                                    {item.icon}
                                    < h5 className='mt-4 mb-2' > {item.title}</h5>
                                    <p className='mb-0'>{item.contant}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Service
