

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Page Not Found">
            <section className="error-section sec-pad-2 centred">
            <div className="auto-container">
                <div className="inner-box">
                    <figure className="error-image"><img src="assets/images/icons/error-1.png" alt="" /></figure>
                    <h2>Oops, page not <br />found!</h2>
                    <p>Mauris urna velit in fermentum in in natoque. Tincidunt pellentesque et risus tincidunt <br />dignissim proin auctor.</p>
                    <Link href="/" className="theme-btn btn-one"><span>Back To Home</span></Link>
                </div>
            </div>
        </section>
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

            </Layout>
        </>
    )
}
