"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";

const slides = {
  title: "Mall Of: Endless Possibilities",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  imageUrl: "/images/mainGateImg.png",
};

const VideoComponent = () => {
  return (
    <>
      <div className="pt-16 md:pt-24">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="inline">{slides.title}</span>
          </h1>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80">
            {slides.description}
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 bg-cover bg-center">
          <div className="relative flex justify-center items-center">
            <Image
              src={slides.imageUrl}
              alt="The Groves Logo"
              width={1200}
              height={900}
              className="w-full h-auto object-cover max-w-7xl" 
            />

            <div className="absolute flex justify-center items-center">
              <PlayCircle className="text-white text-6xl hover:text-gold cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#34450a94] text-white rounded-[25px] shadow-lg p-8 relative">
          <div className="mb-6 max-w-[45rem]">
            <div className="text-lg font-semibold uppercase text-gray-400 mb-4">
              25 SR/Guest
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Get your General Access Ticket
            </h2>
            <p className="text-lg text-white/80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              since the 1500s.
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            {/* <ChevronRight className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl hover:text-yellow-500 cursor-pointer" /> */}
            <Image
              src="/images/patharrow.png"
              alt="socail media"
              width={42}
              height={18}
              className="absolute md:top-1/2 right-4 mt-6 md:mt-0 transform -translate-y-1/2  cursor-pointer mr-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoComponent;
