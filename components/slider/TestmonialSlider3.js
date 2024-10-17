'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="single-item-carousel">
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia coequat duis enim velit mollit.</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia coequat duis enim velit mollit.</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia coequat duis enim velit mollit.</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia coequat duis enim velit mollit.</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia coequat duis enim velit mollit.</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia coequat duis enim velit mollit.</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
