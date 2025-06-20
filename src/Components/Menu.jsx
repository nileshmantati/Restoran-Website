import React, { useEffect } from 'react';
import '../Styles/mainpage.css';
import { NavLink } from 'react-router-dom';

function Menu() {
    const menu = [{
        img: <img src={require('../img/sushi.avif')} alt="" style={{ width: 80, height: 80 }} />,
        title: "Salmon Sushi",
        contant: "Fresh salmon with seasoned rice and seaweed",
        price: '$140',
    },
    {
        img: <img src={require('../img/tacos.avif')} alt="" style={{ width: 80, height: 80 }} />,
        title: "Beef Tacos",
        contant: "Spicy beef with veggies wrapped in soft tortillas",
        price: '$110',
    },
    {
        img: <img src={require('../img/pasta.avif')} alt="" style={{ width: 80, height: 80 }} />,
        title: "Creamy Alfredo Pasta",
        contant: "Rich cream sauce with fettuccine and herbs",
        price: '$130',
    },
    {
        img: <img src={require('../img/biryani.avif')} alt="" style={{ width: 80, height: 80 }} />,
        title: "Chicken Biryani",
        contant: "Aromatic rice with tender chicken and spices",
        price: '$125',
    },
    {
        img: <img src={require('../img/noodles.avif')} alt="" style={{ width: 80, height: 80 }} />,
        title: "Veg Hakka Noodles",
        contant: "Stir-fried noodles with crunchy vegetables",
        price: '$100',
    },
    {
        img: <img src={require('../img/pancake.avif')} alt="" style={{ width: 80, height: 80 }} />,
        title: "Maple Pancakes",
        contant: "Fluffy pancakes served with maple syrup",
        price: '$130',
    },
    {
        img: <img src={require('../img/pizza.avif')} alt="" style={{ width: 80, height: 80 }} />,
        title: "Margherita Pizza",
        contant: "Classic pizza with tomato, mozzarella, and basil",
        price: '$130',
    },
    {
        img: <img src={require('../img/burger.avif')} alt="" style={{ width: 80, height: 80 }} />,
        title: "Double Cheese Burger",
        contant: "Juicy beef patty with double cheese and fries",
        price: '$150',
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
                                            {item.img}
                                            <div className="nav_content_text w-100 ps-4">
                                                <NavLink to="/Menupage">
                                                    <h5 className='d-flex justify-content-between align-items-center border-1 border-bottom pb-2'>
                                                        <span>{item.title}</span>
                                                        <span className='text_primary'>{item.price}</span>
                                                    </h5>
                                                </NavLink>
                                                <p className='mb-0 text-start'>{item.contant}</p>
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
