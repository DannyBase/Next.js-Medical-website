'use client'
import Layout from "@/components/layout/Layout"

import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Make Appointments">
                {/* Appointments-section */}
                <section className="appointment-section sec-pad-2">
      <div className="outer-container p_relative">
        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/appointment-bg.jpg)" }}></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-7 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <form action="appointments" method="post" className="default-form">
                  <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>Select Department</label>
                      <div className="select-box">
                        <select className="selectmenu">
                          <option>pathology</option>
                          <option>Cardiology</option>
                          <option>Dental Clinic</option>
                          <option>Neurosurgery</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <label>Choose Doctor by Name</label>
                      <div className="select-box">
                        <select className="selectmenu">
                          <option>Haddam Banksy</option>
                          <option>Black Marvin</option>
                          <option>Eleanor Pena</option>
                          <option>Arlene Maccy</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <input type="text" name="fname" placeholder="First Name" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="phone" placeholder="Number" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="date" placeholder="mm/dd/yyyy" id="datepicker" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="time" placeholder="Time" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button type="submit" className="theme-btn btn-one"><span>Send Message</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
                </section>
                {/* Appointments-section end */}


                {/* video */}
                <section className="video-section p_relative">
                    <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{ backgroundImage: 'url(assets/images/background/video-bg.jpg)' }}></div>
                    <figure className="image-layer"><img src="assets/images/resource/video-1.png" alt="" /></figure>
                    <div className="auto-container">
                        <div className="inner-box">
                        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}></div>
                        <div className="video-btn">
                        <a onClick={() => setOpen(true)}><i className="fas fa-play"></i></a>
                        </div>
                        <h2>Online Consultations With <br />Qualified Doctors</h2>
                        <div className="btn-box">
                            <Link href="/" className="theme-btn btn-one"><span>Make an Appointment</span></Link>
                        </div>
                        </div>
                    </div>
                </section>
                {/* video end */}


                {/* team-section */}
               <section className="team-section sec-pad bg-color-1 centred">
            <div className="shape">
                <div className="shape-1 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                <div className="shape-2"></div>
                <div className="shape-3 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
            </div>
            <div className="auto-container">
                <div className="sec-title mb_50">
                    <span className="sub-title">Our Team</span>
                    <h2>Meet our experienced doctors <br />for the best treatment</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Black Marvin</Link></h3>
                                    <span className="designation">Medical Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Eleanor Pena</Link></h3>
                                    <span className="designation">Doctor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Arlene Maccy</Link></h3>
                                    <span className="designation">Nursing Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Jenny Wilson</Link></h3>
                                    <span className="designation">Senior Doctor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
                {/* team-section */}


               


              
                {/* subscibe */}
                <section className="subscribe-section">
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                        <div className="text-box">
                            <h2><span>Subscribe</span> for the exclusive updates!</h2>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                        <div className="form-inner">
                            <form method="post" action="contact">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Enter Your Email Address" required />
                                <button type="submit" className="theme-btn btn-one"><span>Subscribe Now</span></button>
                            </div>
                            <div className="form-group">
                                <div className="check-box">
                                <input className="check" type="checkbox" id="checkbox1" />
                                <label htmlFor="checkbox1">I agree to the <Link href="/">Privacy Policy.</Link></label>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                  {/* subscibe end */}

                  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="nfP5N9Yc72A" onClose={() => setOpen(false)} />
    
               
            </Layout>
        </>
    )
}


