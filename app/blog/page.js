
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
                <div>
                    {/* news-style-two */}
                    <section className="news-section sec-pad bg-color-1">
                        <div className="auto-container">
                            <div className="sec-title mb_50 centred">
                                <span className="sub-title">Our Blog</span>
                                <h2>Take a look at our most <br />recent articles</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                                    <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-1.jpg" alt="" /></Link></figure>
                                            <div className="lower-content">
                                                <ul className="post-info mb_15 clearfix">
                                                    <li><Link href="blog-details">Admin</Link></li>
                                                    <li>12 Jan 2022</li>
                                                    <li>03 Comt</li>
                                                </ul>
                                                <h3><Link href="blog-details">How do Inherited Retinal of Diseases Happen?</Link></h3>
                                                <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                                <div className="link">
                                                    <Link href="blog-details"><span>Read More</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-2.jpg" alt="" /></Link></figure>
                                <div className="lower-content">
                                    <ul className="post-info mb_15 clearfix">
                                        <li><Link href="blog-details">Admin</Link></li>
                                        <li>11 Jan 2022</li>
                                        <li>0 Comt</li>
                                    </ul>
                                    <h3><Link href="blog-details">Prepare to Speak with Your Eye Specialist.</Link></h3>
                                    <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    <div className="link">
                                        <Link href="blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-3.jpg" alt="" /></Link></figure>
                                <div className="lower-content">
                                    <ul className="post-info mb_15 clearfix">
                                        <li><Link href="blog-details">Admin</Link></li>
                                        <li>11 Jan 2022</li>
                                        <li>02 Comt</li>
                                    </ul>
                                    <h3><Link href="blog-details">How reliece can help you manage diabetes</Link></h3>
                                    <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    <div className="link">
                                        <Link href="blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-4.jpg" alt="" /></Link></figure>
                                <div className="lower-content">
                                    <ul className="post-info mb_15 clearfix">
                                        <li><Link href="blog-details">Admin</Link></li>
                                        <li>12 Jan 2022</li>
                                        <li>03 Comt</li>
                                    </ul>
                                    <h3><Link href="blog-details">What Causes Inherited Retinal Diseases?</Link></h3>
                                    <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    <div className="link">
                                        <Link href="blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-5.jpg" alt="" /></Link></figure>
                                <div className="lower-content">
                                    <ul className="post-info mb_15 clearfix">
                                        <li><Link href="blog-details">Admin</Link></li>
                                        <li>10 Jan 2022</li>
                                        <li>7 Comt</li>
                                    </ul>
                                    <h3><Link href="blog-details">Get The Exercise Limited Mobility</Link></h3>
                                    <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    <div className="link">
                                        <Link href="blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-6.jpg" alt="" /></Link></figure>
                                <div className="lower-content">
                                    <ul className="post-info mb_15 clearfix">
                                        <li><Link href="blog-details">Admin</Link></li>
                                        <li>08 Jan 2022</li>
                                        <li>02 Comt</li>
                                    </ul>
                                    <h3><Link href="blog-details">What Leads to Inherited Eye Conditions?</Link></h3>
                                    <p>Tincidunt Maur nemi sit Interdum praesento eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                    <div className="link">
                                        <Link href="blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            </div>
                        </div>
                    </section>
                    {/* news-style-two end */}
                    {/* subscribe-two */}
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
                    {/* subscribe end */}
             </div>

            </Layout>
        </>
    )
}