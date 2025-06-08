import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/mainpage.css';

function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const testimonial = [{
        icon: <i class="fa-solid fa-quote-left fa-3x owncolor"></i>,
        img: <img src={require('../img/testimonial-1.jpg')} alt="" style={{ width: 50, height: 50 }} />,
        name: "Samantha Lee",
        profession: "Marketing Specialist",
        review: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
    },
    {
        icon: <i class="fa-solid fa-quote-left fa-3x owncolor"></i>,
        img: <img src={require('../img/testimonial-2.jpg')} alt="" style={{ width: 50, height: 50 }} />,
        name: "Michael Clarke",
        profession: "Software Engineer",
        review: 'Quick service, cozy seating, and amazing taste. A perfect place to unwind after work',
    },
    {
        icon: <i class="fa-solid fa-quote-left fa-3x owncolor"></i>,
        img: <img src={require('../img/testimonial-3.jpg')} alt="" style={{ width: 50, height: 50 }} />,
        name: "David Martinez",
        profession: "Interior Designer",
        review: 'Loved the grilled platter and fresh juices. Great options for health-conscious diners too.',
    },
    {
        icon: <i class="fa-solid fa-quote-left fa-3x owncolor"></i>,
        img: <img src={require('../img/testimonial-4.jpg')} alt="" style={{ width: 50, height: 50 }} />,
        name: "Joshua Kim",
        profession: "Marketing Specialist",
        review: 'The kids loved their pasta, and I appreciated the healthy options. Family-friendly and delicious.',

    },]
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);
    return (
        <div>
            <div className="container-xxl pt-3 wow animate__fadeInUp"
                data-wow-delay="0.3s"
                data-wow-duration="1s">
                <div className="container">
                    <div className="heading_text py-5 wow animate__fadeInUp"
                        data-wow-delay="0.3s"
                        data-wow-duration="1s">
                        <h5 className='mb-0 fs-3 position-relative mb-3'>Testimonial</h5>
                        <h1 className='mb-0'>Our Clients Say!!!</h1>
                    </div>
                    <Slider {...settings} className='testimonial_slider py-4 py-lg-0 mt-4'>
                        {testimonial.map((item, index) => (
                            <div className="px-3">
                                <div key={index} className='item p-3 rounded-2 d-flex flex-column align-items-start'>
                                    {item.icon}
                                    <p className='text-start mt-3'>{item.review}</p>
                                    <div className="d-flex align-items-center mt-3">
                                        {item.img}
                                        <div className="name ps-3 d-flex flex-column align-items-start">
                                            <h5 className='mb-1'>{item.name}</h5>
                                            <span>{item.profession}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div >
            </div >
        </div >
    )
}

export default Testimonial
