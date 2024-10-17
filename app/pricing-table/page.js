
'use client'
import Layout from "@/components/layout/Layout"
import { useState } from 'react'
import Link from 'next/link';
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
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pricing Table">        

            {/* gallery */}
            <section className="pricing-section sec-pad">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
                                <div className="table-header">
                                    <h5>Standard Consultation</h5>
                                    <h2>$49.99</h2>
                                    <span>Monthly</span>
                                </div>
                                <div className="table-content">
                                    <ul className="feature-list clearfix">
                                        <li>Virtual visit</li>
                                        <li>Up to 30 minutes</li>
                                        <li>Securely conducted online</li>
                                        <li>Discuss and receive guidance</li>
                                        <li>Rate varies on specific needs</li>
                                        <li>Healthcare provider Consult</li>
                                    </ul>
                                </div>
                                <div className="table-footer">
                                    <Link href="/" className="theme-btn btn-three"><span>Choose Plan <i className="icon-25"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one active-block wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
                                <div className="table-header">
                                    <h5>Annual Physical</h5>
                                    <h2>$149.99</h2>
                                    <span>Monthly</span>
                                </div>
                                <div className="table-content">
                                    <ul className="feature-list clearfix">
                                        <li>In-person examination</li>
                                        <li>Up to 60 minutes</li>
                                        <li>Various tests and assessments</li>
                                        <li>In-person service</li>
                                        <li>Rate varies on specific needs</li>
                                        <li>Healthcare provider Consult</li>
                                    </ul>
                                </div>
                                <div className="table-footer">
                                    <Link href="/" className="theme-btn btn-three"><span>Choose Plan <i className="icon-25"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
                                <div className="table-header">
                                    <h5>Extended Consultation</h5>
                                    <h2>$99.99</h2>
                                    <span>Monthly</span>
                                </div>
                                <div className="table-content">
                                    <ul className="feature-list clearfix">
                                        <li>Virtual visit</li>
                                        <li>Up to 60 minutes</li>
                                        <li>Discuss more details</li>
                                        <li>Receive in-depth guidance</li>
                                        <li>Rate varies on specific needs</li>
                                        <li>Healthcare provider Consult</li>
                                    </ul>
                                </div>
                                <div className="table-footer">
                                    <Link href="/" className="theme-btn btn-three"><span>Choose Plan <i className="icon-25"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* gallery end */} 

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



