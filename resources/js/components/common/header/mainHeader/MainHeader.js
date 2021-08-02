import React from "react";
import { Link } from "react-router-dom";
import LiveRadio from "../../../liveRadio/LiveRadio";
import LongAd from "../../ads/LongAd";
import Logo from "../../../../assets/img/logo.png";
import { Scoped } from "kremling";

const MainHeader = () => {
  return (
    <Scoped css={css}>
      <div className="main-header">
        <div className="main-header__content">
          <Link to="/">
            <img src={Logo} alt="Logo" className="cmp-logo" />
            {/* <!-- biswash_logo.png --> */}
          </Link>
        </div>

        <LiveRadio />

        <LongAd extraStyle="ad width35" />
      </div>
    </Scoped>
  );
};

export default MainHeader;

const css = `
& .test {
    position: absolute;
    width: 5rem;
    height: 5rem;
    background-color: red;
    text-align: center;
  }
  & .player {
    width: 2rem;
    height: 2rem;
    background-color: blue;
  }
  /*---------------- main-header---------------------- */
  & .main-header {
    width: 100%;
    height: 27rem;
    background-size: 100%;
    position: relative;
  }
  & .main-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    opacity: 0.8;
  }
  & .main-header__content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50rem;
    height: 27rem;
    background-size: 100.5%;
    overflow: hidden;
  }
  & .cmp-logo {
    width: 30rem;
    height: auto;
    position: absolute;
    top: 50%;
    left: 38%;
    transform: translate(-50%, -50%);
  }
  & .ad {
    position: absolute !important;
    right: 4.5rem;
    top: 30%;
  }
  
  @media only screen and (max-width: 1200px) {
    & .main-header__content {
      left: -4rem;
    }
    & .main-header {
      background-size: 110%;
    }
    & .cmp-logo {
      width: 27rem;
      left: 41%;
    }
  }
  @media only screen and (max-width: 1050px) {
    & .ad {
      top: 80%;
      right: 2.5rem;
    }
    & .main-header__content {
      position: absolute;
      top: 0;
      left: 0;
      width: 56rem;
      height: 34rem;
      background-size: 100%;
      overflow: hidden;
    }
    & .main-header {
      background-size: 130%;
    }
    & .cmp-logo {
      left: 28%;
      top: 35%;
    }
  }
  @media only screen and (max-width: 900px) {
    & .main-header__content {
      height: 33rem;
    }
    & .main-header {
      background-size: 180%;
    }
  }
  @media only screen and (max-width: 750px) {
    & .main-header {
      background-size: 200%;
    }
    & .main-header__content {
      left: -5rem;
    }
    & .cmp-logo {
      left: 38%;
    }
    & .ad {
      display: none;
    }
  }
  @media only screen and (max-width: 500px) {
    & .main-header__content {
      position: absolute;
      bottom: 0;
      left: -5rem;
      width: 48rem;
      height: 28rem;
      overflow: hidden;
    }
    & .main-header {
      background-size: 240%;
    }
    & .main-header::before {
      opacity: 0.85;
    }
    & .cmp-logo {
      width: 20rem;
      left: 37%;
    }
    & .down-nav {
      display: none;
    }
  }
  @media only screen and (max-width: 360px) {
    & .main-header__content {
      width: 40rem;
      top: -3.8rem;
    }
    & .cmp-logo {
      top: 45%;
      left: 43%;
    }
  }
  
`;
