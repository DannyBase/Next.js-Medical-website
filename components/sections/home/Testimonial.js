import React from 'react';
import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'
export default function Testimonial() {
    return (
        <section className="testimonial-style-two bg-color-1">
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
    );
};

