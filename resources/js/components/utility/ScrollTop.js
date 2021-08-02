import { Scoped } from "kremling";
import React, { useState } from "react";

const ScrollTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (isScrolled === false) {
      window.scrollTo(0, 0);
      setIsScrolled(false);
    }
  };
  return (
    <Scoped css={css}>
      <div className="scroll-top" onClick={handleScroll}>
        <div className="top">&#x27BA;</div>
      </div>
    </Scoped>
  );
};

export default ScrollTop;

const css = `
& .scroll-top {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 1000;
    width: 6rem;
    height: 6rem;
    background-color: var(--secondary-color);
    border-radius: 50px;
    box-shadow: 0 0 10px 1.5px #999999;
    cursor: pointer;
    transform: rotate(-90deg);
  }
 & .top {
    position: absolute;
    top: 16%;
    left: 25%;
    font-size: 3.5rem;
    color: #fff;
    animation: cloud 2s ease infinite;
  }
  
 & .scroll-top:hover .top {
    animation: cloud 0.5s ease infinite;
  }
  
  @keyframes cloud {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }
  
`;
