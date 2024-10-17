
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                    {/* Contact Form Section */}
                    <section className="contact-info-section pt_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one">
                                        <h3>Quick Contact</h3>
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-2"></i></div>
                                            <p>Main Office: <br /><Link href="tel:23345678901">(+233)456-789-01</Link>, <Link href="tel:+1045678901">+10456-789-01</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one">
                                        <h3>Email Address</h3>
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-26"></i></div>
                                            <p>Mail: <br /><Link href="mailto:info@example.com">info@example.com</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-block-one">
                                        <h3>Mailing Address</h3>
                                        <div className="inner-box">
                                            <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt="" /></div>
                                            <p>3891 Ranchview Dr. Richardson, <br />California 62639</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section End */}
                    {/* Contact Form Section2 */}
                    <section className="contact-style-three pt_90 pb_120">
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                                    <div className="form-inner mr_40">
                                        <div className="sec-title mb_50">
                                            <h2>Send a Message</h2>
                                        </div>
                                        <form method="post" action="sendemail.php" id="contact-form" className="default-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="username" placeholder="First Name" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="lname" placeholder="Last Name" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="email" name="email" placeholder="Your email" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="phone" required placeholder="Phone" />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <input type="text" name="subject" required placeholder="Subject" />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea name="message" placeholder="Message"></textarea>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button className="theme-btn btn-one" type="submit" name="submit-form"><span>Send Message</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                    <figure className="image-box"><img src="assets/images/resource/contact.jpg" alt="" /></figure>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section2 End */}

                    {/* Google Map Section */}
                    <section className="google-map-section">
                        {/*Map Outer*/}
                        <div className="map-inner">
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.671934832277!2d5.603688015335255!3d6.335048295411633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3b4640debe5%3A0xb86b2f2dd3d5a3b0!2sBenin%20City%2C%20Nigeria!5e0!3m2!1sen!2s!4v1697536905645!5m2!1sen!2s" height={570} style={{ border: 0, width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </section>
                    {/* Google Map Section End */}
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
                </div>

            </Layout>
        </>
    )
}
