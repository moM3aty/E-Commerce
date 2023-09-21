/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Team = () => {
    return (
        <>
        <section className="section bg-Team" >
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="section-title-cont">Our Team</h2>
                        </div>
                    <div className="col-md-6 col-sm-12 mb-4 mb-md-0 Team-Card">
                        <div className="card text-center">
                            <img src="/images/team/member1.png" className="card-img-top"/>
                            <div className="card-body">
                                <h4 className="card-title-Team">Mohamed Abo-Elmaaty</h4>
                                <p className="text-light font-secondary">Front-End</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4 mb-md-0 Team-Card">
                        <div className="card text-center">
                            <img src="/images/team/Member2.png" className="card-img-top"/>
                            <div className="card-body">
                                <h4 className="card-title-Team">M3aty</h4>
                                <p className="text-light font-secondary">Back-End</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Contact"></div>
                </div>
            </section>
        </>
    );
}

export default Team;
