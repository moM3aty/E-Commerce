/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark footer-section">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <h5 className="text-light">Email</h5>
                                <p className="text-white paragraph-lg Details-Font ">YourWebsite@email.com</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <h5 className="text-light">Phone</h5>
                                <p className="text-white paragraph-lg  Details-Font">+123 456 7890</p>
                            </div>
                            <div className="col-md-12 text-center">
                                <h5 className="text-light">Address</h5>
                                <p className="text-white paragraph-lg Details-Font">Egypt, Port-Said, Omar Ebn AbdElaziz</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-top text-center border-dark py-3">
                    <p className="mb-0 text-cr">Copyright &copy;
                        {new Date().getFullYear()} Designed &amp; Developed by <a className="text-white-50" href="#">Mohamed Abo-Elmaaty</a></p>
                </div>
            </footer>
            <a href='#Content' className='Button-Top'><i className="fa-solid fa-circle-up"></i></a>
        </div>
    );
}

export default Footer;
