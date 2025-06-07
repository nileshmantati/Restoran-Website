import React, { useEffect } from 'react';
import '../Styles/mainpage.css';

function Menu() {
    const menu = [{
        img: '../img/menu-1.jpg',
        title: "Chicken Burger",
        contant: "Ipsum ipsum clita erat amet dolor justo diam",
    },
    {
        img: '../img/menu-2.jpg',
        title: "Chicken Slice",
        contant: "Ipsum ipsum clita erat amet dolor justo diam",
    },
    {
        img: '../img/menu-3.jpg',
        title: "Home Made Pizza",
        contant: "Ipsum ipsum clita erat amet dolor justo diam",
    },
    {
        img: '../img/menu-4.jpg',
        title: "Me",
        contant: "Ipsum ipsum clita erat amet dolor justo diam",
    },
    {
        img: '../img/menu-3.jpg',
        title: "Home Made Pizza",
        contant: "Ipsum ipsum clita erat amet dolor justo diam",
    },
    {
        img: '../img/menu-3.jpg',
        title: "Home Made Pizza",
        contant: "Ipsum ipsum clita erat amet dolor justo diam",
    },
    {
        img: '../img/menu-3.jpg',
        title: "Home Made Pizza",
        contant: "Ipsum ipsum clita erat amet dolor justo diam",
    },
    {
        img: '../img/menu-3.jpg',
        title: "Home Made Pizza",
        contant: "Ipsum ipsum clita erat amet dolor justo diam",
    },]
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);
    return (
        <div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="heading_text wow animate__fadeInUp"
                        data-wow-delay="0.3s"
                        data-wow-duration="1s">
                        <h5 className='mb-0 fs-3 position-relative'>Food menu</h5>
                        <h1 className='mb-0'>Most Popular Items</h1>
                    </div>
                    <div className="tab_class d-flex flex-column align-items-center wow animate__fadeInUp"
                        data-wow-delay="0.3s"
                        data-wow-duration="1s">
                        <ul className='tab_ul mb-0 ps-0 d-flex column-gap-4 mb-5 flex-wrap row-gap-3'>
                            <li><a href="#" className='pb-3 active'><i className="fa-solid fa-mug-saucer fa-2x" />
                                <div className="ps-3 text-start">
                                    <span>Popular</span>
                                    <h6 className='mb-0'>Breakfast</h6>
                                </div>
                            </a></li>
                            <li><a href="#" className='pb-3'><i className="fa-solid fa-burger fa-2x" />
                                <div className="ps-3 text-start">
                                    <span>Special</span>
                                    <h6 className='mb-0'>Launch</h6>
                                </div>
                            </a></li>
                            <li><a href="#" className='pb-3'><i className="fa-solid fa-utensils fa-2x" />
                                <div className="ps-3 text-start">
                                    <span>Lovely</span>
                                    <h6 className='mb-0'>Dinner</h6>
                                </div>
                            </a></li>
                        </ul>
                        <div className="nav_content col-12">
                            <div className="row row-gap-4">
                                {menu.map((item) => (
                                    <div className="col-lg-6">
                                        <div className="nav_content_box d-flex align-items-center justify-content-between">
                                            <img src={require('../img/menu-1.jpg')} alt="" style={{ width: 80 }} />
                                            <div className="nav_content_text w-100 ps-4">
                                                <h5 className='d-flex justify-content-between align-items-center border-1 border-bottom pb-2'>
                                                    <span>Chicken Burger</span>
                                                    <span className='text_primary'>$115</span>
                                                </h5>
                                                <p className='mb-0 text-start'>Ipsum ipsum clita erat amet dolor justo diam</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Menu
