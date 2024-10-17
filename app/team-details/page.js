import React from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
const ProgressBar = ({ label, percent }) => (
    <div className="progress-box">
      <p>{label}</p>
      <div className="bar">
        <div className="bar-inner count-bar" style={{ width: `${percent}%` }}></div>
        <div className="count-text">{`${percent}%`}</div>
      </div>
    </div>
  );
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Details">
            <section className="team-details sec-pad-2">
            <div className="auto-container">
                <div className="team-details-content mb_50">
                    <div className="row clearfix">
                        <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                            <figure className="image-box mr_15"><img src="assets/images/team/dr-paul.jpg" alt="" /></figure>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <h2>Paul Ward</h2>
                                <span className="designation">Senior Doctor</span>
                                <p>Eget lorem dolor sed viverra. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. consectetur adipiscing elit. Libero turpis blandit blandit mauris aliquam condimentum quam suspendisse Pellentesque habitant morbi tristique senectus et netus</p>
                                <ul className="info-list mb_30 clearfix">
                                    <li><strong>Experience: </strong>20 Years</li>
                                    <li><strong>Email: </strong><Link href="mailto:tanya.hill@example.com">tanya.hill@example.com</Link></li>
                                    <li><strong>Phone: </strong><Link href="tel:3035550105">(303) 555-0105</Link></li>
                                </ul>
                                <ul className="social-links clearfix">
                                    <li><Link href="/"><i className="icon-4"></i></Link></li>
                                    <li><Link href="/"><i className="icon-5"></i></Link></li>
                                    <li><Link href="/"><i className="icon-6"></i></Link></li>
                                    <li><Link href="/"><i className="icon-7"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="experience-details mb_50">
                    <h2>Personal Experience</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="two-column">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 skills-column">
                            <div className="skills-box">
                                <div className="text-box mb_30">
                                    <h2>Expertise & Skills</h2>
                                    <p>Consectetur adipiscing elit. Semper sagittis dolor aliquet quam feugiat ultrices feugiat Viverra facilisi turpis.</p>
                                </div>
                                <div className="progress-inner">
                                    <ProgressBar label="Waste management" percent={85} />
                                    <ProgressBar label="Recycling" percent={90} />
                                    <ProgressBar label="Customer support" percent={80} />
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 appointment-column">
                            <div className="appointment-inner">
                                <h2>Book An Appointment</h2>
                                <form method="post" action="team-details" className="default-form">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="fname" placeholder="First Name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone Number" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="subject" placeholder="Subject" required />
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
            </Layout>
        </>
    )
}

