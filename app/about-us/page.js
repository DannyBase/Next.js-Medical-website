'use client'
import Layout from "@/components/layout/Layout"
import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'
import Link from "next/link"
import { useState } from 'react'

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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
                {/* about-section */}
                <section className="about-style-two pt_120 pb_120">
                <div className="pattern-layer">
                  <div className="pattern-1 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                  <div className="pattern-2 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                  <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                  <div className="pattern-4" style={{ backgroundImage: "url(assets/images/shape/shape-35.png)" }}></div>
                </div>
                <div className="auto-container">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image_block_one">
                        <div className="image-box">
                          <div className="shape float-bob-x" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                          <div className="image-shape" style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}></div>
                          <figure className="image-2"><img src="assets/images/resource/about.jpg" alt="" /></figure>
                          <div className="icon-one"><i className="icon-13"></i></div>
                          <div className="icon-two"><i className="icon-14"></i></div>
                          <div className="text-box">
                            <h3>Paul Ward</h3>
                            <span>Medical Assistant</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content_block_one">
                        <div className="content-box ml_30">
                          <div className="sec-title mb_15">
                            <span className="sub-title">About Us</span>
                            <h2>Medical services & diagnostics</h2>
                          </div>
                          <div className="text-box mb_40">
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <ul className="list-style-one clearfix">
                              <li>Refresing to get such a personal touch.</li>
                              <li>Duis aute irure dolor in reprehenrit in voluptate.</li>
                              <li>Velit esse cillum dolore eu fugiat nua pariatur.</li>
                            </ul>
                          </div>
                          <div className="lower-box">
                            <div className="experience-box">
                              <div className="icon-box"><i className="icon-29"></i></div>
                              <h3>32 Years</h3>
                              <span className="designation">Of Medical Experience</span>
                            </div>
                            <figure className="author-thumb"><img src="assets/images/resource/dr-paul.jpg" alt="" /></figure>
                            <div className="signature"><img src="assets/images/icons/signature-1.png" alt="" /></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
                {/* about-section end */}


                {/* process */}
                <section className="process-section sec-pad bg-color-1">
                    <div className="shape">
                      <div className="shape-1 float-bob-x" style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}></div>
                      <div className="shape-2 float-bob-y" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
                      <div className="shape-3"></div>
                    </div>
                    <div className="auto-container">
                      <div className="sec-title mb_50 centred">
                        <span className="sub-title">Process</span>
                        <h2>How it Helps You to <br />Keep Healthy</h2>
                      </div>
                      <div className="inner-container">
                        <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}></div>
                        <div className="processing-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                            <span className="count-text">01</span>
                            <figure className="image-box"><img src="assets/images/resource/process-1.jpg" alt="" /></figure>
                            <div className="lower-content">
                              <h3>Get Appointment</h3>
                              <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. </p>
                            </div>
                          </div>
                        </div>
                        <div className="processing-block-one wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                            <span className="count-text">02</span>
                            <figure className="image-box"><img src="assets/images/resource/process-2.jpg" alt="" /></figure>
                            <div className="lower-content">
                              <h3>Start Check-Up</h3>
                              <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. </p>
                            </div>
                          </div>
                        </div>
                        <div className="processing-block-one wow fadeInLeft animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                            <span className="count-text">03</span>
                            <figure className="image-box"><img src="assets/images/resource/process-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                              <h3>Enjoy Healthy Life</h3>
                              <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                {/* process end */}


                {/* testimonial-section */}
                 <section className="testimonial-style-two p_relative">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }}></div>
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 thumb-column">
            <div className="thumb-box">
              <div className="thumb thumb-1"><img src="assets/images/resource/thumb-1.jpg" alt="" /></div>
              <div className="thumb thumb-2"><img src="assets/images/resource/thumb-2.jpg" alt="" /></div>
              <div className="thumb thumb-3"><img src="assets/images/resource/thumb-3.jpg" alt="" /></div>
              <div className="thumb thumb-4"><img src="assets/images/resource/thumb-4.jpg" alt="" /></div>
              <div className="thumb thumb-5"><img src="assets/images/resource/thumb-5.jpg" alt="" /></div>
              <div className="thumb thumb-6"><img src="assets/images/resource/thumb-6.jpg" alt="" /></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 content-column">
            <div className="content-box">
              <div className="sec-title mb_50">
                <span className="sub-title">TESTIMONIALS</span>
                <h2>What Our Client Say About medimart</h2>
              </div>
                      <div className="content-box">
                          {/*Theme Carousel*/}
                          <TestimonialSlider1 />                          
                      </div>
                  </div>
                  
                  </div>
                </div>
              </div>
              </section>
                {/* testimonial-section */}


               


                {/* team-section-style-two */}
                <section className="team-section sec-pad centred bg-color-1">
                  <div className="shape">
                    <div className="shape-1 float-bob-y" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
                    <div className="shape-2"></div>
                    <div className="shape-3 float-bob-x" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
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
                              <h3><Link href="team-details/">Black Marvin</Link></h3>
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
                {/* team-section-style-two end */}
                {/* subscibe */}
                <section className="subscribe-section bg-color-1">
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


               
            </Layout>
        </>
    )
}


