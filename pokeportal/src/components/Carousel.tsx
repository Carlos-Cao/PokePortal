"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Carousel: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full mx-auto relative border-4 border-yellow-500">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <img
              src="/images/PokePack.png"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/PokeDeck.png"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/PokeStats.png"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/images/PokeGuesser.png"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </div>
    </div>
  );
};

export default Carousel;
