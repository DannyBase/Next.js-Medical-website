import Link from "next/link"


export default function Features() {
    return (
        <>
           <section className="feature-section pb_90">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-9"></i></div>
                                <h3><Link href="/">Qualified Doctor</Link></h3>
                                <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-10"></i></div>
                                <h3><Link href="/">Emergency Help</Link></h3>
                                <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3><Link href="/">Modern Equipment</Link></h3>
                                <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-12"></i></div>
                                <h3><Link href="/">Family Medicine</Link></h3>
                                <p>Lorem ipsum dolor sit amet ctetur adipiscing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
