import { Scoped } from "kremling";
import React, { useState } from "react";
import ProgItem from "./ProgItem";

const ProgList = () => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (isShown === false) {
      setIsShown(true);
    }
  };

  return (
    <Scoped css={css}>
      <div className="programme">
        <div className="d-btn">
          {Items?.map((a, idx) => (
            <Day key={idx} {...a} handleClick={handleClick} />
          ))}
        </div>

        <div className="m-btn">
          {MobileItems?.map((a, idx) => (
            <Day key={idx} {...a} handleClick={handleClick} />
          ))}
        </div>

        {isShown ? <ProgItem /> : ""}
      </div>
    </Scoped>
  );
};

export default ProgList;

const Items = [
  { title: "Sunday" },
  { title: "Monday" },
  { title: "Tuesday" },
  { title: "Wednesday" },
  { title: "Thursday" },
  { title: "Friday" },
  { title: "Saturday" },
];

const MobileItems = [
  { title: "Sun" },
  { title: "Mon" },
  { title: "Tue" },
  { title: "Wed" },
  { title: "Thu" },
  { title: "Fri" },
  { title: "Sat" },
];

const Day = ({ title, handleClick }) => {
  return (
    <button className="weeks" onClick={handleClick}>
      {title}
    </button>
  );
};

const css = `
& .programme {
    margin-top: 2rem;
  }
 & .m-btn {
    display: none;
  }
 & .weeks {
    position: relative;
    padding: 1.8rem 2.1rem;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 700;
    color: #ffffff;
    background-color: rgb(90, 107, 107);
    border: none;
    cursor: pointer;
  }
 & .weeks:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
 & .weeks:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
 & .weeks:hover {
    box-shadow: 0 0 20px #555555;
    z-index: 10;
  }
 & .weeks:focus {
    outline: none;
  }
 & .active {
    color: var(--highlight-color);
  }
  /* & .programme__list{
      width: 100%;
      background-color: #EFEFEF;
      list-style-type: none;
      margin-top: 1.5rem;
      border-radius: 10px;
  }
 & .programme__item{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 2.5rem 2rem;
      transition: .2s ease-in;
  }
 & .programme-content{
      width: 95%;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
 & .programme__item:nth-child(even){
      background-color: #FBF5F5;
  }
 & .programme__item:hover:not([class*='active-list']){
      background-color: #d1e2e2;
  }
 & .programme__item:first-child{
      border-top-left-radius: 10px;
      border-top-right-radius:10px;
  }
 & .programme__item:last-child{
      border-bottom-left-radius: 10px;
      border-bottom-right-radius:10px;
  }
 & .prog-name{
      flex: 65%;
      font-size: 1.8rem;
      font-weight: 500;
      color: #333333;
  }
 & .prog-icon{
      height: 1.5rem
  }
 & .prog-schedule{
      flex: 35%;
      display: flex;
      justify-content: flex-end;
  }
 & .prog-time{
      font-size: 1.6rem;
      margin-left: 1rem;
      color: #555555;
  }
  
 & .active-list{
      background-color: rgba(255, 244, 200, 0.863);
  }
 & .programme__item[class*='active-list'] .current-prog{
      opacity: 1;
  }
 & .current-prog{
      position: relative;
      width: 2rem;
      height: 2rem;
      background-color: #7c4221;
      border-radius: 50%;
      margin-right: 2rem;
      opacity: 0;
  }
 & .inner{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      background-color:  rgba(243, 239, 19, 0.562);
      border-radius: 50%;
      animation: glow .5s ease-in-out infinite;
  } */
  @keyframes glow {
    from {
      padding: 0;
    }
    to {
      padding: 0.8rem;
    }
  }
  
  @media only screen and (max-width: 1200px) {
   & .weeks {
      font-size: 1.7rem;
      padding: 1.8rem;
    }
  }
  @media only screen and (max-width: 1050px) {
   & .weeks {
      padding: 1.2rem;
    }
  }
  @media only screen and (max-width: 900px) {
   & .m-btn {
      display: block;
    }
   & .d-btn {
      display: none;
    }
   & .weeks {
      padding: 1.8rem 2.4rem;
    }
  }
  @media only screen and (max-width: 750px) {
   & .weeks {
      font-size: 1.8rem;
      padding: 1.8rem 2rem;
    }
   & .prog-name {
      font-size: 1.9rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .weeks {
      font-size: 1.7rem;
      padding: 1rem 1.2rem;
    }
  
   & .prog-schedule {
      justify-content: flex-start;
      margin-top: 1rem;
    }
   & .programme-content {
      display: block;
    }
   & .current-prog {
      width: 2.5rem;
      height: 2.4rem;
    }
  }
  
`;
