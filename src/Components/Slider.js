import React from 'react';

const Slider = () => {
    return (
     <section className="hero-area bg-primary" id="parallax">
        <div className="container">
            <div className="row">
                <div className="col-lg-11 mx-auto">
                    <h1 className="text-white " > Hi! Iam <br /> M3ATY <br /> Web Developer </h1>
                </div>
            </div>
        </div>
        <div className="layer-bg w-100">
            <img className="img-fluid w-100" src="/images/illustrations/leaf-bg.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l2">
            <img src="/images/illustrations/dots-cyan.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l3">
            <img src="/images/illustrations/leaf-orange.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l4">
            <img src="/images/illustrations/dots-orange.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l5">
            <img src="/images/illustrations/leaf-yellow.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l6">
            <img src="/images/illustrations/leaf-cyan.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l7">
            <img src="/images/illustrations/dots-group-orange.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l8">
            <img src="/images/illustrations/leaf-pink-round.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l9">
            <img src="/images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
        </div>
        <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
            <li className="mb-3"><a style={{fontSize:'25px'}} className="text-white" href="https://www.facebook.com/mo.m3aty"><i className="fa-brands fa-facebook"></i></a></li>
            <li className="mb-3"><a style={{fontSize:'25px'}} className="text-white" href="https://www.instagram.com/mohamed_abo_elm3aty/"><i className="fa-brands fa-instagram"></i></a></li>
            <li className="mb-3"><a style={{fontSize:'25px'}}  className="text-white" href="https://wa.me/+201275844735"><i className="fa-brands fa-whatsapp"></i></a></li>
            <li className="mb-3"><a style={{fontSize:'25px'}} className="text-white" href="https://github.com/moM3aty"><i className="fa-brands fa-github"></i></a></li>
            </ul>
            <div id="Content" ></div>
        </section>
        
    );
}

export default Slider;
