import React from 'react';

export default function Process() {
    return (
        <section className="process-section sec-pad">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }}></div>
            <div className="shape">
                <div className="shape-1 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-20.png)' }}></div>
                <div className="shape-2 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                <div className="shape-3"></div>
            </div>
            <div className="auto-container">
                <div className="sec-title mb_50 centred">
                    <span className="sub-title">Process</span>
                    <h2>How it Helps You to <br />Keep Healthy</h2>
                </div>
                <div className="inner-container">
                    <div className="arrow-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-18.png)' }}></div>
                    <div className="processing-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <span className="count-text">01</span>
                            <figure className="image-box"><img src="assets/images/resource/process-1.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <h3>Get Appointment</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                    </div>
                    <div className="processing-block-one wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <span className="count-text">02</span>
                            <figure className="image-box"><img src="assets/images/resource/process-2.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <h3>Start Check-Up</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                    </div>
                    <div className="processing-block-one wow fadeInLeft animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <span className="count-text">03</span>
                            <figure className="image-box"><img src="assets/images/resource/process-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <h3>Enjoy Healthy Life</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

