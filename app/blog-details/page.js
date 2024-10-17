
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
                {/* sidebar-page-container */}
                <section className="sidebar-page-container sec-pad-2">
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="blog-sidebar default-sidebar mr_10">
                        <div className="sidebar-widget search-widget">
                            <div className="search-form">
                            <form method="post" action="blog-2">
                                <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search here" required />
                                <button type="submit"><i className="icon-27"></i></button>
                                </div>
                            </form>
                            </div>
                        </div>
                        {/* Add more sidebar widgets as needed */}
                        <div className="sidebar-widget category-widget">
                                <div className="widget-title">
                                    <h3>Categories</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link href="blog-details">Cardiology</Link></li>
                                        <li><Link href="blog-details">Dental Clinic</Link></li>
                                        <li><Link href="blog-details">Neurosurgery</Link></li>
                                        <li><Link href="blog-details">Medical</Link></li>
                                        <li><Link href="blog-details">Pediatrics</Link></li>
                                        <li><Link href="blog-details">Modern Laboratory</Link></li>
                                    </ul>
                                </div>
                            </div>
                        {/* Add more sidebar widgets as needed */}
                        <div className="sidebar-widget category-widget archives-widget">
                                <div className="widget-title">
                                    <h3>Archives</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="category-list clearfix">
                                        <li><Link href="blog-details">December 2021</Link></li>
                                        <li><Link href="blog-details">October 2021</Link></li>
                                        <li><Link href="blog-details">January 2022</Link></li>
                                        <li><Link href="blog-details">October 2022</Link></li>
                                    </ul>
                                </div>
                            </div>
                        {/* Add more sidebar widgets as needed */}
                        <div className="sidebar-widget post-widget">
                                <div className="widget-title">
                                    <h3>Latest Post</h3>
                                </div>
                                <div className="widget-content post-inner">
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/news/post-1.jpg" alt="" /></Link></figure>
                                        <h6><Link href="blog-details">How do Inherited Retinal of Diseases Happen?</Link></h6>
                                        <ul className="post-info clearfix">
                                            <li>09 Jan 2022</li>
                                            <li>03 Comt</li>
                                        </ul>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/news/post-2.jpg" alt="" /></Link></figure>
                                        <h6><Link href="blog-details">How reliece can help you manage diabetes</Link></h6>
                                        <ul className="post-info clearfix">
                                            <li>10 Jan 2022</li>
                                            <li>05 Comt</li>
                                        </ul>
                                    </div>
                                    <div className="post">
                                        <figure className="post-thumb"><Link href="blog-details"><img src="assets/images/news/post-3.jpg" alt="" /></Link></figure>
                                        <h6><Link href="blog-details">Prepare to Speak with Your Eye Specialist.</Link></h6>
                                        <ul className="post-info clearfix">
                                            <li>11 Jan 2022</li>
                                            <li>01 Comt</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        {/* Add more sidebar widgets as needed */}
                        <div className="sidebar-widget gallery-widget">
                                <div className="widget-title">
                                    <h3>Gallery</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="image-list clearfix">
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-1.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-2.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-3.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-4.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-5.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-5.jpg" alt="" /></Link></figure>
                                        </li>
                                        <li>
                                            <figure className="image"><Link href="assets/images/news/gallery-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/news/gallery-6.jpg" alt="" /></Link></figure>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        {/* Add more sidebar widgets as needed */}
                        <div className="sidebar-widget tags-widget">
                                <div className="widget-title">
                                    <h3>Tags</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="tags-list clearfix">
                                        <li><Link href="blog-details">Adventures</Link></li>
                                        <li><Link href="blog-details">Health</Link></li>
                                        <li><Link href="blog-details">Care</Link></li>
                                        <li><Link href="blog-details">Cardiac</Link></li>
                                        <li><Link href="blog-details">Doctors</Link></li>
                                        <li><Link href="blog-details">Cardiac</Link></li>
                                        <li><Link href="blog-details">Hospital</Link></li>
                                    </ul>
                                </div>
                            </div>
                        {/* Add more sidebar widgets as needed */}
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="blog-details-content">
                        <div className="news-block-one">
                            <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/news/news-details.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <ul className="post-info mb_15 clearfix">
                                <li><Link href="blog-details">Admin</Link></li>
                                <li>15 Jan 2022</li>
                                <li>03 Comt</li>
                                </ul>
                                <h2>What Causes Inherited Retinal Diseases?</h2>
                                <p>The abbreviation IRD refers to a group of hereditary conditions called retinal diseases...</p>
                                <p>of the retinal cells in our bodies. A “mistake” or alteration in one or more genes causes IRDs. Because of this, retinal cells don’t function properly, which eventually results in vision loss. Already, 250 genes have been linked to IRD.</p>
                                        <p>There are many more genes, but they haven’t all been discovered. Each IRD may be passed down differently within a family from one generation to the next. It’s possible that you or a member of your family has an IRD. You might be the oldest member of your family.</p>
                                        <h3>Results Are Easy To Obtain</h3>
                                        <p>Nullam elit elit, vehicula sit amet lobortis quis, luctus vitae purus. Etiam vitae leo non magna venenatis congue. Ut commodo, tellus id gravida ultricies, libero mauris aliquam enim, in luctus nunc nisi eu neque. Aenean lacinia, tortor ac sagittis venenatis, massa velit fringilla tortor, a venenatis mi sapien. Maecenas a tellus at justo molestie pulvinar</p>
                                        <div className="two-image">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image mb_30"><img src="assets/images/news/news-d1.jpg" alt="" /></figure>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image mb_30"><img src="assets/images/news/news-d2.jpg" alt="" /></figure>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Nullam elit elit, vehicula sit amet lobortis quis, luctus vitae purus. Etiam vitae leo non magna venenatis congue. Ut commodo, tellus id gravida ultricies, libero mauris aliquam enim, in luctus nunc nisi eu neque. Aenean lacinia, tortor ac sagittis venenatis, massa velit fringilla tortor, a venenatis mi sapien. Maecenas a tellus at justo molestie pulvinar</p>
                                        <blockquote>
                                            <div className="icon-box"><i className="icon-23"></i></div>
                                            <p>“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.“</p>
                                            <h4>Ralph Edwards</h4>
                                            <span className="designation">Dog Trainer</span>
                                        </blockquote>
                                        <p>Nullam elit elit, vehicula sit amet lobortis quis, luctus vitae purus. Etiam vitae leo non magna venenatis congue. Ut commodo, tellus id gravida ultricies, libero mauris aliquam enim, in luctus nunc nisi eu neque. Aenean lacinia, tortor ac sagittis venenatis, massa velit fringilla tortor, a venenatis mi sapien. Maecenas a tellus at justo molestie pulvinar</p>
                            </div>
                            </div>
                        </div>
                        {/* Repeat similar blocks for other content */}
                        <div className="post-tags mb_60">
                            <ul className="tags-list clearfix">
                            <li><h3>Popular Tags:</h3></li>
                            <li><Link href="blog-details">Adventures</Link></li>
                            <li><Link href="blog-details">Health</Link></li>
                            <li><Link href="blog-details">Care</Link></li>
                            <li><Link href="blog-details">Hospital</Link></li>
                            </ul>
                        </div>
                        <div className="comment-form-box mb_60">
                            <h2>Leave A Comment</h2>
                            <form method="post" action="blog-details" className="default-form">
                            <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="text" name="text" placeholder="Name" required />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea name="message" placeholder="Type Comment here"></textarea>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                            <button type="submit" className="theme-btn btn-one"><span>Post Comment</span></button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                        <div className="comment-box">
                            <h3>2 Comments</h3>
                            <div className="comment-inner">
                            <div className="comment">
                            <div className="comment-thumb">
                                            <figure className="thumb-box"><img src="assets/images/news/comment-1.jpg" alt="" /></figure>
                                            <span className="date">08 Jan 2023</span>
                                        </div>
                                        <h4>Jane Cooper</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ornare non non massa elit rutrum. Eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse.</p>
                                        <Link href="blog-details" className="reply-btn">Reply</Link>
                            </div>
                            {/* Additional comments if any */}
                            </div>
                            <div className="comment">
                                        <div className="comment-thumb">
                                            <figure className="thumb-box"><img src="assets/images/news/comment-2.jpg" alt="" /></figure>
                                            <span className="date">07 Jan 2023</span>
                                        </div>
                                        <h4>Marvin McKinney</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus ornare non non massa elit rutrum. Eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendisse.</p>
                                        <Link href="blog-details" className="reply-btn">Reply</Link>
                                    </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                {/* sidebar-page-container end */}
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

            </Layout>
        </>
    )
}
