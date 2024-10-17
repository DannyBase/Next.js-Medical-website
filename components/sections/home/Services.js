import Link from 'next/link';
import React from 'react';

export default function service() {
  return (
    <section className="service-section sec-pad">
    <div className="auto-container">
      <div className="sec-title mb_50 centred">
        <span className="sub-title">Our Services</span>
        <h2>We Provide Medical Care & <br />Life-Saving Services</h2>
      </div>
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
          <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="service-details-3"><img src="assets/images/service/service-1.jpg" alt="" /></Link></figure>
                <div className="icon-box"><i className="icon-15"></i></div>
              </div>
              <div className="lower-content">
                <h3><Link href="service-details-3">Neurosurgery</Link></h3>
                <p>Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
          <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="service-details-6"><img src="assets/images/service/service-2.jpg" alt="" /></Link></figure>
                <div className="icon-box"><i className="icon-16"></i></div>
              </div>
              <div className="lower-content">
                <h3><Link href="service-details-6">Modern Laboratory</Link></h3>
                <p>Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
          <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image"><Link href="service-details"><img src="assets/images/service/service-3.jpg" alt="" /></Link></figure>
                <div className="icon-box"><i className="icon-17"></i></div>
              </div>
              <div className="lower-content">
                <h3><Link href="service-details">Experienced Doctors</Link></h3>
                <p>Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
