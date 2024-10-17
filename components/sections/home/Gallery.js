// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})

import Link from "next/link"
export default function Gallery() {

    return (
        <>
            
            <section className="gallery-section sec-pad">
            <div className="outer-container">
                <div className="sec-title centred mb_30">
                    <span className="sub-title">Gallery</span>
                    <h2>Visit Our Gallery For <br />Latest Info</h2>
                </div>
                        {/*Sortable Galery*/}
                        <div className="sortable-masonry">
                            {/*Filter*/}
                            <PortfolioFilter1/>
                        </div>
                    </div>
                </section>

            
        </>
    )
}