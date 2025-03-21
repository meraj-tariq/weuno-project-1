import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const MapLocationPage = () => {
  return (
    <div className="pt-5 md:pt-16">
      <div className="relative max-w-7xl mx-auto text-center ">
          {/* <div className="flex flex-row md:flex-row sm:flex-row-reverse"> */}
          <div className="flex sm:flex-wrap-reverse md:flex-row ">
            <div className="">
              <Image
                src="/images/map.png"
                alt="Interactive Map"
                width={500}
                height={650}
                className="w-full rounded-3xl object-cover"
              />
            </div>
            <div className="text-white">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#C1A173]">
                EXPERIENCE THE GROVES
              </h2>
              <h3 className="mt-4 text-5xl font-bold tracking-tight">
                Find your place
              </h3>
              <p className="mt-4 text-lg text-gray-300">
                Our interactive map will show you the way to the shops and
                restaurants that you want to see.
              </p>
              <button className="mt-8 flex items-center gap-2 rounded-full bg-[#C1A173] px-6 py-3 font-medium text-white transition-transform hover:translate-x-1">
                Open the Map
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MapLocationPage;
