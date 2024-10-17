import Link from "next/link"

export default function Footer2() {
    return (
        <>           
            
            <footer className="main-footer">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
        <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
        <div className="pattern-4"></div>
      </div>
      <div className="widget-section pt_120 pb_100">
      <div className="auto-container">
          <div className="row clearfix">
                          <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><Link href="/"><img src="assets/images/footer-logo.png" alt="" /></Link></figure>
                                <p>Lorem ipsum dolor sit amet constetur adipiscing elit. Etiam eu turpis mostie dictum est a, mattis tellus.</p>
                                <ul className="social-links clearfix">
                                    <li><Link href="/"><i className="icon-4"></i></Link></li>
                                    <li><Link href="/"><i className="icon-5"></i></Link></li>
                                    <li><Link href="/"><i className="icon-6"></i></Link></li>
                                    <li><Link href="/"><i className="icon-7"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget ml_110">
                                <div className="widget-title">
                                    <h3>Quick Link</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="about">About Us</Link></li>
                                        <li><Link href="service">Services</Link></li>
                                        <li><Link href="/">Elements</Link></li>
                                        <li><Link href="contact">Contacts Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget ml_55">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/">Privacy Policy</Link></li>
                                        <li><Link href="/">Terms &</Link></li>
                                        <li><Link href="/">Condition</Link></li>
                                        <li><Link href="/">Support</Link></li>
                                        <li><Link href="/">Disclaimer</Link></li>
                                        <li><Link href="/">Faq</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contact us</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="info-list">
                                        <li><img src="assets/images/icons/icon-1.png" alt="" />3891 Ranchview Dr. Richardson, California USA</li>
                                        <li><i className="icon-2"></i><Link href="tel:01989526503">0198-9526503</Link></li>
                                        <li><i className="icon-26"></i><Link href="mailto:example@info.com">example@info.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="bottom-inner">
            <ul className="footer-nav clearfix">
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Terms of Use</Link></li>
              <li><Link href="/">Sales and Refunds</Link></li>
              <li><Link href="/">Legal</Link></li>
              <li><Link href="/">Site Map</Link></li>
            </ul>
            <div className="copyright">
              <p>&copy; 2024 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>


        </>
    )
}
