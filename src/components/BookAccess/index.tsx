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

  return (
    <div className="flex-shrink-0 text-center items-center">
      <div
        className={`overflow-hidden rounded-3xl items-center ${sizeClasses[size]}`}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={650}
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
    title: "Little Krazy",
    image: "/images/venue1.png",
    size: "medium" as const,
  },
  {
    title: "Hawanim Groves City",
    image: "/images/venue2.png",
    size: "small" as const,
  },
  {
    title: "Picnic Market",
    image: "/images/venue3.png",
    size: "large" as const,
  },
  {
    title: "Lucawe",
    image: "/images/venue4.png",
    size: "medium" as const,
  },
];

const BookAccessPage = () => {
  return (
    <div className="pt-16 md:pt-24">
      <div className="relative mx-auto min-w-80 max-w-[90%] px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block break-words">
            Book General Access tickets and
          </span>
          <span className="inline">enjoy the attractions for free</span>
        </h1>

        <div className="min-h-screen px-6 py-12 text-white">
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

export default BookAccessPage;
