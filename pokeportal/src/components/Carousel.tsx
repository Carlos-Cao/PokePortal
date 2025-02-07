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
            <h1 className="mb-4 text-3xl text-center">PokePack</h1>
            <img
              src="/images/PokePack.png"
              alt="PokePack slide 1"
              className="w-full h-full object-cover"
            />
            <p className="mb-4 text-center mt-2">
              Pokemon pack opening simulator.
            </p>
            <div className="text-center mt-4">
              <a
                href="https://pokepack.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-block px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-300"
              >
                View Project
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="mb-4 text-3xl text-center">PokeDeck</h1>
            <img
              src="/images/PokeDeck.png"
              alt="PokeDeck slide 2"
              className="w-full h-full object-cover"
            />
            <p className="text-center mt-2">A Pokedex for Pokemon TCG.</p>
            <div className="text-center mt-4">
              <a
                href="https://pokedexdeck.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-block px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-300"
              >
                View Project
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="mb-4 text-3xl text-center">PokeStats</h1>
            <img
              src="/images/PokeStats.png"
              alt="PokeStats slide 3"
              className="w-full h-full object-cover"
            />
            <p className="text-center mt-2">
              A Pokedex app to search for Pokemon and view their statistics.
            </p>
            <div className="text-center mt-4">
              <a
                href="https://pokedexstats.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-block px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-300"
              >
                View Project
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="mb-4 text-3xl text-center">PokeGuesser</h1>
            <img
              src="/images/PokeGuesser.png"
              alt="PokeGuesser slide 4"
              className="w-full h-full object-cover"
            />
            <p className="text-center mt-2">
              Guess the Pokémon by the sprite image.
            </p>
            <div className="text-center mt-4">
              <a
                href="https://pokedexguesser.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-block px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-300"
              >
                View Project
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </div>
    </div>
  );
};

export default Carousel;
