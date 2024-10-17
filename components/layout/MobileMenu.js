'use client'
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}><span className="far fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/logo-2.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent">
              <ul className="navigation clearfix">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About</Link></li>
                <li><Link href="/service">Our Services</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/faq">Faq's</Link></li>
        
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
          <h4>Contact Info</h4>
          <ul>
            <li>Chicago 12, Melborne City, USA</li>
            <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
            <li><Link href="mailto:info@example.com">info@example.com</Link></li>
          </ul>
        </div>
          {/*Social Links*/}
          <div className="social-links">
          <ul className="clearfix">
            <li><Link href="/"><span className="fab fa-twitter"></span></Link></li>
            <li><Link href="/"><span className="fab fa-facebook-square"></span></Link></li>
            <li><Link href="/"><span className="fab fa-pinterest-p"></span></Link></li>
            <li><Link href="/"><span className="fab fa-instagram"></span></Link></li>
            <li><Link href="/l"><span className="fab fa-youtube"></span></Link></li>
          </ul>
        </div>
      </nav>
    </div>{/* End Mobile Menu */}
      <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />
    </>
  );
};

