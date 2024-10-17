import React from 'react';
import Link from 'next/link';
export default function Subscribe() {
  return (
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
  );
};

