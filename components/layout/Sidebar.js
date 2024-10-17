import Link from "next/link"

export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>


            <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : ""}`} >
            <div className="xs-overlay xs-bg-black"></div>
            <div className="xs-overlay xs-overlay-2 xs-bg-black" onClick={handleSidebar}></div>
            <div className="xs-overlay xs-overlay-3 xs-bg-black" onClick={handleSidebar}></div>
            <div className="xs-overlay xs-overlay-4 xs-bg-black" onClick={handleSidebar}></div>
            <div className="xs-overlay xs-overlay-5 xs-bg-black" onClick={handleSidebar}></div>
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading">
                        <a className="close-side-widget" onClick={handleSidebar}><i className="fa fa-times"></i></a>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                            <div className="content-inner">
                                <div className="logo">
                                    <Link href="/"><img src="assets/images/logo.png" alt="" /></Link>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
                                    <p>Research oriented solutions for Data Science and Machine Learning business needs.</p>
                                    <Link href="about-us" className="theme-btn btn-one"><span>About Us</span></Link>
                                </div>
                                <div className="contact-info">
                                    <h4>Contact Info</h4>
                                    <ul>
                                        <li>Chicago 12, Melborne City, USA</li>
                                        <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                                        <li><Link href="mailto:info@example.com">info@example.com</Link></li>
                                    </ul>
                                </div>
                                <ul className="social-box">
                                    <li><Link href="index-2.html"><i className="icon-4"></i></Link></li>
                                    <li><Link href="index-2.html"><i className="icon-5"></i></Link></li>
                                    <li><Link href="index-2.html"><i className="icon-6"></i></Link></li>
                                    <li><Link href="index-2.html"><i className="icon-7"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        </>
    )
}
