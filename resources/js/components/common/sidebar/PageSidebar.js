import React from "react";
import SquareAd from "../ads/SquareAd";
import OnAir from "./OnAir";
import Podcast from "./Podcast";
import Presenter from "./Presenter";

const PageSidebar = () => {
  return (
    <>
      <SquareAd />
      <OnAir />
      <Podcast />
      <Presenter />
    </>
  );
};

export default PageSidebar;
