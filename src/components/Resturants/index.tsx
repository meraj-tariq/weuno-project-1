import Image from "next/image";
import React from "react";

function VenueCard({
  title,
  image,
  size = "medium",
}: {
  title: string;
  image: string;
  size?: "small" | "medium" | "large";
}) {
  const sizeClasses = {
    small: "w-[400px] h-[500px]",
    medium: "w-[450px] h-[650px]",
    large: "w-[500px] h-[650px]",
  };
  console.log(sizeClasses[size]);

  return (
    <div className="flex-shrink-0 text-center items-center">
      <div
        className={`overflow-hidden rounded-3xl items-center ${sizeClasses[size]}`}
      >
        <Image
          src={image}
          alt={title}
          width={size === "small" ? 350 : 500}
          height={size === "small" ? 400 : 650}
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="flex justify-center w-[398px]">
        <h3 className="md:mt-4 inline font-semibold text-white break-words text-[clamp(1.5rem,3vw,2rem)]">
          {title}
        </h3>
      </div>
    </div>
  );
}

const venues = [
  {
    title: "Resturants",
    image: "/images/rest1.png",
    size: "small" as const,
  },
  {
    title: "Experience",
    image: "/images/rest3.png",
    size: "large" as const,
  },
  {
    title: "Events",
    image: "/images/rest2.png",
    size: "medium" as const,
  },
];

const ResturantListPage = () => {
  return (
    <div className="pt-10 md:pt-20">
      <div className="flex items-center flex-wrap sm:flex-nowrap sm:flex-row relative mx-auto min-w-80 max-w-[85%] px-4 sm:px-6 lg:px-8 overflow-x-auto custom-scrollbar-hide">
        <h1 className="mb-2 md:mb-6 block text-white/90 text-2xl sm:text-2xl md:text-5xl lg:text-6xl">
          <span className="block break-words mb:0 sm:mb-6 md:mb-1">
            Curate your experience as you like
          </span>
          <button className="custom-radial-gradient font-bold rounded-[16px] hover:bg-gold/90 text-white/80 
          sm:mt-2 px-8 py-4 text-sm uppercase tracking-widest transition-colors">
            Book Tickets
          </button>
          {/* <span className="inline">enjoy the attractions for free</span> */}
        </h1>

        <div className=" sm:px-2  md:px-6  sm:py-6 md:py-12 text-white">
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-8 custom-scrollbar-hide items-center">
              {venues.map((venue) => (
                <VenueCard
                  key={venue.title}
                  title={venue.title}
                  image={venue.image}
                  size={venue.size}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantListPage;
