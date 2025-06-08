import React, { useEffect } from 'react';
import '../Styles/mainpage.css';

function Masterchefs() {
    const chefs = [{
        img: <img src={require('../img/team-1.jpg')} alt="" />,
        name: "Claire Dubois",
        role: "Sauce Specialist",
    },
    {
        img: <img src={require('../img/team-2.jpg')} alt="" />,
        name: "Emily Carter",
        role: "Pastry Chef",
    },
    {
        img: <img src={require('../img/team-3.jpg')} alt="" />,
        name: "Aiko Tanaka",
        role: "Sushi Master",
    },
    {
        img: <img src={require('../img/team-4.jpg')} alt="" />,
        name: "James Walker",
        role: "Head Chef",

    },]
    useEffect(() => {
        if (typeof window !== 'undefined' && window.WOW) {
            new window.WOW().init();
        }
    }, []);
    return (
        <div>
            <div className="container-xxl pt-3">
                <div className="container">
                    <div className="heading_text py-5 wow animate__fadeInUp"
                        data-wow-delay="0.3s"
                        data-wow-duration="1s">
                        <h5 className='mb-0 fs-3 position-relative mb-3'>Team members</h5>
                        <h1 className='mb-0'>Our Master Chefs</h1>
                    </div>
                    <div className="row row-gap-4">
                        {chefs.map((item) => (
                            <div className="col-md-6 col-lg-3 wow animate__fadeInUp"
                                data-wow-delay="0.3s"
                                data-wow-duration="1s">
                                < div className="team_box p-3 position-relative rounded-3 overflow-hidden" >
                                    <div className="img_box rounded-circle overflow-hidden mb-4">
                                        {item.img}
                                    </div>
                                    <h5 className='mb-0 fs-5 mb-2'>{item.name}</h5>
                                    <p className='mb-0'>{item.role}</p>
                                    <div className="social d-flex align-items-center justify-content-center column-gap-2 mt-3">
                                        <a href="#" className='px-3 py-2 pb-2'><i className="fa-brands fa-facebook-f" /></a>
                                        <a href="#" className='px-3 py-2 pb-2'><i className="fa-brands fa-twitter" /></a>
                                        <a href="#" className='px-3 py-2 pb-2'><i className="fa-brands fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Masterchefs
