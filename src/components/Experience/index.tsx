"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function VenueCard({
  title,
  price,
  image,
}: {
  title: string;
  price: string;
  image: string;
}) {
  return (
    <div className="group relative w-[780px] overflow-hidden rounded-[32px] bg-[#1A1F1A] experienceCard">
      <div className="relative  w-full">
        {/* <img src={image} alt={title} className="h-full w-full object-cover" /> */}
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="w-full h-auto object-cover max-w-7xl"
          // className="absolute md:top-1/2 right-4 mt-6 md:mt-0 transform -translate-y-1/2  cursor-pointer mr-2"
        />
        <div className="absolute " />
      </div>
      <div className="relative sm:p-[4px] md:p-6 cardbg">
        <h3 className="font-semibold text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h3>
        <div className="mt-4 flex items-center gap-4">
          {/* <h3 className="rounded-full bg-[#C1A173] px-4 py-2 text-sm font-medium text-white"> */}
          <h3 className="text-2xl rounded-full bg-[#C1A173] px-4 py-2 text-sm text-white" >
            {price}
          </h3>
          <Image
            src="/images/patharrow.png"
            alt="socail media"
            width={42}
            height={18}
            className="absolute md:top-1/2 right-4 mt-6 md:mt-0 transform -translate-y-1/2  cursor-pointer mr-2"
          />
          {/* <ArrowRight className="ml-auto text-[#C1A173] transition-transform group-hover:translate-x-2" /> */}
        </div>
      </div>
    </div>
  );
}
const venues = [
  {
    title: "Vida Vera",
    price: "100 SR PER GUEST",
    image: "/images/card1.png",
  },
  {
    title: "ZamaZuli",
    price: "100 SR PER GUEST",
    image: "/images/card2.png",
  },
  {
    title: "Khawaja Yanni",
    price: "100 SR PER GUEST",
    image: "/images/card3.png",
  },
  {
    title: "Yamagata",
    price: "100 SR PER GUEST",
    image: "/images/card4.png",
  },
];

const ExperienceComponent = () => {
  return (
    <>
      <div className="pt-16 md:pt-24">
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/90 mb-6">
            <span className="inline">Experience the Finest Cuisine</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="relative mx-auto min-w-80 max-w-[90%] px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen px-6 py-12 text-white">
            <div className="flex gap-8  flex-wrap overflow-x-auto pb-8 custom-scrollbar-hide items-center">
              {venues.map((venue, index) => (
                <VenueCard
                  key={index}
                  title={venue.title}
                  price={venue.price}
                  image={venue.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceComponent;
