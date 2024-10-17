import React from 'react';
import Link from "next/link"
export default function Pricing() {
  return (
    <section className="pricing-section sec-pad">
      <div className="auto-container">
        <div className="sec-title mb_50 centred">
          <span className="sub-title">Our Pricing</span>
          <h2>Affordable care options for <br />all patients</h2>
        </div>
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
                  <Link href="/#" className="theme-btn btn-three"><span>Choose Plan <i className="icon-25"></i></span></Link>
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
                  <Link href="/#" className="theme-btn btn-three"><span>Choose Plan <i className="icon-25"></i></span></Link>
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
                  <Link href="/#" className="theme-btn btn-three"><span>Choose Plan <i className="icon-25"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

