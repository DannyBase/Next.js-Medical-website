
'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from "next/link"
export default function WhyChooseUs() {
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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Faq's">        

            {/* faq */}
            <section className="faq-page-section sec-pad">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 accordion-column">
                                <div className="content-box">
                                <ul className="accordion-box">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                            <div className="icon-box"><i className="icon-34"></i></div>
                                                <h4>Is it possible to get my results by mail or over the phone?</h4>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-box"><i className="icon-34"></i></div>
                                                <h4>Can I call directly to make an appointment?</h4></div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                <div className="icon-box"><i className="icon-34"></i></div>
                                                <h4>Do you give phone advice?</h4></div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                            <div className="icon-box"><i className="icon-34"></i></div>
                                                <h4>Can I make appointments by phone?</h4>
                                            </div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                <ul className="accordion-box">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                <div className="icon-box"><i className="icon-34"></i></div>
                                                <h4>Is it possible to get my results by mail or over the phone?</h4></div>
                                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}>
                                                <div className="icon-box"><i className="icon-34"></i></div>
                                                <h4>Can I call directly to make an appointment?</h4></div>
                                            <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}>
                                            <div className="icon-box"><i className="icon-34"></i></div>
                                                <h4>Do you give phone advice?</h4>
                                            </div>
                                            <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(8)}>
                                            <div className="icon-box"><i className="icon-34"></i></div>
                                                <h4>Can I make appointments by phone?</h4>
                                            </div>
                                            <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            {/* faq end */} 

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



