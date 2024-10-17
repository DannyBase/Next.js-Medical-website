'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
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
    <section className="faq-section sec-pad">
       <figure className="image-layer"><img src="assets/images/resource/faq-1.png" alt="" /></figure>
      <div className="auto-container">
      <div className="sec-title centred mb_50">
                    <span className="sub-title">FAQ'S</span>
                    <h2>Do You Have Any Medical <br />Questions?</h2>
                </div>
        <div className="row clearfix">
          <div className="col-xl-7 col-lg-12 col-md-12 offset-xl-5 content-column">
            <div className="content-box">
             
              <ul className="accordion-box">
              <li className="accordion block active-block">
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
          <li className="accordion block active-block">
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
          <li className="accordion block active-block">
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
          <li className="accordion block active-block">
              <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                <div className="icon-box"><i className="icon-34"></i></div>
                  <h4>Can I make appointments by phone?</h4></div>
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
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_four">
              <div className="image-box ml_30">
                <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-22.png)' }}></div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

