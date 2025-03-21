"use client";

import { useState } from "react";
import logoImage from "@images/mainPoster.png";

const slides = [
  {
    url: logoImage,
    title: "The new era of luxury",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    url: logoImage,
    title: "The new era of luxury",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    url: logoImage,
    title: "The new era of luxury",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];

export default function MainScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  return (
    <div className="relative h-screen group">
      <div
        className="absolute inset-0 bg-cover bg-center duration-500 transition-all ease-in-out"
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        style={{ backgroundImage: `url(${logoImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:top-[170px]">
        <div className="max-w-3xl mx-auto sm:mx-0">
          {" "}
          {/* Centered for large screens, left-aligned for small */}
          <p className="text-xl text-white/80 mb-12 text-center sm:text-left">
            KHAWAJA YANNI
          </p>
          <h1 className="text-6xl text-white mb-6 text-center sm:text-left">
            <span className="block mb-2">The new</span>
            <span>era of luxury </span>
          </h1>
          <p className="text-xl max-w-sm  text-white/80 mb-12 text-center sm:text-left">
            {slides[currentIndex].description}
          </p>
          <div className="text-center sm:text-left ">
            <button className="custom-radial-gradient font-bold rounded-[16px] hover:bg-gold/90 text-white/80 px-8 py-4 text-sm uppercase tracking-widest transition-colors">
              Book reservations now
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-gold" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
