'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
   
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            //spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    }
}
export default function ProjectSlider0() {
    return (
        <>
            <Swiper {...swiperOptions} className="project-carousel owl-carousel owl-theme owl-dots-none owl-nav-none`   ">
                <SwiperSlide className="slide-item">
                <div className="project-block-one">
                <div className="inner-box">
                    <figure className="image-box">
                    <img src="assets/images/project/project-1.jpg" alt="" />
                    </figure>
                    <div className="content-box">
                    <div className="view-btn">
                        <Link href="assets/images/project/project-1.jpg" className="lightbox-image" data-fancybox="gallery">
                        <i className="icon-23"></i>
                        </Link>
                    </div>
                    <div className="text-box">
                        <p>Waste Pickup</p>
                        <h3><Link href="project-details">Garbage pickup</Link></h3>
                    </div>
                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="project-block-one">
                <div className="inner-box">
                    <figure className="image-box">
                    <img src="assets/images/project/project-2.jpg" alt="" />
                    </figure>
                    <div className="content-box">
                    <div className="view-btn">
                        <Link href="assets/images/project/project-2.jpg" className="lightbox-image" data-fancybox="gallery">
                        <i className="icon-23"></i>
                        </Link>
                    </div>
                    <div className="text-box">
                        <p>Waste Pickup</p>
                        <h3><Link href="project-details">Grocery waste removal</Link></h3>
                    </div>
                    </div>
                </div>
                </div>
                </SwiperSlide>
                
                <SwiperSlide className="slide-item">
                <div className="project-block-one">
      <div className="inner-box">
        <figure className="image-box">
          <img src="assets/images/project/project-3.jpg" alt="" />
        </figure>
        <div className="content-box">
          <div className="view-btn">
            <Link href="assets/images/project/project-3.jpg" className="lightbox-image" data-fancybox="gallery">
              <i className="icon-23"></i>
            </Link>
          </div>
          <div className="text-box">
            <p>Waste Pickup</p>
            <h3><Link href="project-details">Waste collection</Link></h3>
          </div>
        </div>
      </div>
    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="project-block-one">
                <div className="inner-box">
                    <figure className="image-box">
                    <img src="assets/images/project/project-1.jpg" alt="" />
                    </figure>
                    <div className="content-box">
                    <div className="view-btn">
                        <Link href="assets/images/project/project-1.jpg" className="lightbox-image" data-fancybox="gallery">
                        <i className="icon-23"></i>
                        </Link>
                    </div>
                    <div className="text-box">
                        <p>Waste Pickup</p>
                        <h3><Link href="project-details">Garbage pickup</Link></h3>
                    </div>
                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="project-block-one">
                <div className="inner-box">
                    <figure className="image-box">
                    <img src="assets/images/project/project-2.jpg" alt="" />
                    </figure>
                    <div className="content-box">
                    <div className="view-btn">
                        <Link href="assets/images/project/project-2.jpg" className="lightbox-image" data-fancybox="gallery">
                        <i className="icon-23"></i>
                        </Link>
                    </div>
                    <div className="text-box">
                        <p>Waste Pickup</p>
                        <h3><Link href="project-details">Grocery waste removal</Link></h3>
                    </div>
                    </div>
                </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="project-block-one">
      <div className="inner-box">
        <figure className="image-box">
          <img src="assets/images/project/project-3.jpg" alt="" />
        </figure>
        <div className="content-box">
          <div className="view-btn">
            <Link href="assets/images/project/project-3.jpg" className="lightbox-image" data-fancybox="gallery">
              <i className="icon-23"></i>
            </Link>
          </div>
          <div className="text-box">
            <p>Waste Pickup</p>
            <h3><Link href="project-details">Waste collection</Link></h3>
          </div>
        </div>
      </div>
    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
