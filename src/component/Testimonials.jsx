"use client";

import React, { useRef, useEffect } from "react";
import Tittle from "./Tittle";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { MdFormatQuote, MdStar } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonials } from '@/app/store/Slice/testimonialSlice';

export default function Testimonials() {
    const swiperRef = useRef(null);

    const { data, status } = useSelector((state) => state.testimonials);
    const dispatch = useDispatch();

    console.log(data);

    useEffect(() => {
        dispatch(getTestimonials());
    }, [dispatch]);

    return (
        <div className="Testimonials py-6 px-5">
            <Tittle HeaderTittle="Testimonials" SubTittle="What our clients say about us" />
            <div className="my-10">
                <div className="slider w-full h-auto my-10 relative">
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={10}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                        data-aos="fade-up"
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="bg-white shadow-xl rounded-lg p-6">
                                    <div className="flex justify-center mb-4">
                                        <Image
                                            src={item.img}
                                            className="rounded-full"
                                            width={100}
                                            height={100}
                                            alt={item.name}
                                        />
                                    </div>
                                    <h5 className="font-bold text-center text-sm mb-2 lg:text-lg">
                                        {item.name}
                                    </h5>
                                    <h6 className="font-semibold text-center my-2">
                                        {item.position}
                                    </h6>
                                    <div className="flex justify-center mb-4 text-blue-500">
                                        {[...Array(item.rate)].map((_, index) => (
                                            <MdStar key={index} />
                                        ))}
                                        <MdStar className="text-gray-400" />
                                    </div>
                                    <p className="mb-2 flex">
                                        <sup>
                                            <MdFormatQuote className="text-[35px] mx-2 text-blue-600" />
                                        </sup>
                                        {item.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10">
                        <FaArrowLeft />
                    </button>
                    <button className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
