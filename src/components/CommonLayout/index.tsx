"use client";

import BookAccessPage from "../BookAccess";
import ExperienceComponent from "../Experience";
import FooterLayoutPage from "../Footer";
import MapLocationPage from "../MapLocation";
import ResturantListPage from "../Resturants";
import VideoComponent from "../VideoScreen";

const CommonLayoutPage = () => {
  return (
    <div className="generatTicketBgColor">
      <VideoComponent />
      <BookAccessPage />
      <ExperienceComponent />
      <ResturantListPage />
      <MapLocationPage />
      <FooterLayoutPage />
    </div>
  );
};

export default CommonLayoutPage;
