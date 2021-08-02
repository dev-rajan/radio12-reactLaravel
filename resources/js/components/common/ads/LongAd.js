import { Scoped } from "kremling";
import React from "react";
import wave from "../../../assets/img/wave.png";

const LongAd = ({ extraStyle }) => {
  return (
    <Scoped css={css}>
      <div className={`long-ad ${extraStyle}`}>
        <img src={wave} alt="" className="long-ad-img" />
        <p>Advertisement</p>
      </div>
    </Scoped>
  );
};

export default LongAd;

const css = `
& .width48 {
    width: 48%;
  }
  & .width35 {
    width: 35%;
  }
  & .long-ad {
    position: relative;
    height: 10rem;
    background-color: rgb(177, 177, 177);
  }
  & .long-ad-img {
    height: 100%;
    width: 100%;
    opacity: 0.3;
  }
  & .long-ad p {
    position: absolute;
    top: 40%;
    left: 40%;
    color: #0b7074;
    font-size: 2rem;
    font-weight: 700;
  }
  & .width100 {
    width: 100%;
    height: 12rem;
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 1050px) {
    & .width48 {
      width: 100%;
    }
    & .width35 {
      width: 55%;
    }
    & .long-ad {
      margin-bottom: 2rem;
    }
  }
  @media only screen and (max-width: 900px) {
    & .width35 {
      width: 50%;
    }
  }
`;
