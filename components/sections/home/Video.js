'use client'
import Link from 'next/link';
import React, { useState } from 'react';

import ModalVideo from 'react-modal-video'
export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="video-section alternat-2 p_relative">
            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/video-bg.jpg)" }}></div>
            <figure className="image-layer"><img src="assets/images/resource/video.jpg" alt="" /></figure>
            <div className="auto-container">
                <div className="inner-box">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}></div>
                    <div className="video-btn">
                    <a onClick={() => setOpen(true)}><i className="fas fa-play"></i>
                    <span className="border-animation border-1"></span>
                    <span className="border-animation border-2"></span>
                    <span className="border-animation border-3"></span>
                    </a>
                    </div>
                    <h2>Online Consultations with <br />Expert Doctors</h2>
                    <div className="btn-box">
                        <Link href="/" className="theme-btn btn-one"><span>Book Your Appointment</span></Link>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nfP5N9Yc72A" onClose={() => setOpen(false)} />
        </>
    );
};

