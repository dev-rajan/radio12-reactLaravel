import React from "react";
import SquareAd from "../ads/SquareAd";
import CountDown from "./CountDown";
import Latest from "./Latest";
import OnAir from "./OnAir";
import Podcast from "./Podcast";
import Popular from "./Popular";
import Presenter from "./Presenter";

const Sidebar = () => {
  return (
    <>
      <SquareAd />

      <OnAir />
      <SquareAd />
      <Latest />
      <SquareAd />
      <Popular />
      <SquareAd />
      <Podcast />
      <SquareAd />
      <Presenter />
      <SquareAd />
      <CountDown />
    </>
  );
};

export default Sidebar;
