import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import Clock from "../../assets/img/clock.svg";

const ProgItem = ({ ActiveTitle }) => {
  return (
    <Scoped css={css}>
      <ul className="programme__list">
        <ListItem
          image={Clock}
          extra="active-list"
          active="outer"
          title="Kathmandu News"
          activeTitle={ActiveTitle}
          startTime="5:00AM"
          endTime="5:30AM"
        />
        <ListItem
          image={Clock}
          title="Ujyalo News"
          startTime="5:30AM"
          endTime="6:00AM"
        />
        <ListItem
          image={Clock}
          title="Geet Mala"
          startTime="6:00AM"
          endTime="6:30AM"
        />
        <ListItem
          image={Clock}
          title="Sathi Sanga Maan Ka Kura"
          startTime="6:30AM"
          endTime="7:00AM"
        />
        <ListItem
          image={Clock}
          title="Ujyalo News"
          startTime="7:00AM"
          endTime="7:30AM"
        />
        <ListItem
          image={Clock}
          title="Ukkali Oorali"
          startTime="7:30AM"
          endTime="8:00AM"
        />
        <ListItem
          image={Clock}
          title="Kathmandu News"
          startTime="8:00AM"
          endTime="8:30AM"
        />
        <ListItem
          image={Clock}
          title="Sangeet Sarobar"
          startTime="8:30AM"
          endTime="9:00AM"
        />
        <ListItem
          image={Clock}
          title="Geet Mala"
          startTime="9:00AM"
          endTime="9:30AM"
        />
        <ListItem
          image={Clock}
          title="Kathmandu News"
          startTime="9:30AM"
          endTime="10:00AM"
        />
        <ListItem
          image={Clock}
          title="Sangeet Sarobar"
          startTime="10:00AM"
          endTime="10:30AM"
        />
        <ListItem
          image={Clock}
          title="Geet Mala"
          startTime="10:30AM"
          endTime="11:00AM"
        />
      </ul>
    </Scoped>
  );
};

export default ProgItem;

const ListItem = ({
  title,
  image,
  startTime,
  endTime,
  extra,
  active,
  activeTitle,
}) => {
  return (
    <Link to="/programme-detail" className={`programme__item ${extra}`}>
      <div className="current-prog">
        <span className={`${active}`}>
          <span className="inner"></span>
        </span>
      </div>
      <div className="programme-content">
        <div className="prog-name">{`${title} ${
          activeTitle ? activeTitle : ""
        }`}</div>
        <div className="prog-schedule">
          <img src={image} alt={title} className="icon prog-icon" />
          <span className="prog-time">
            {startTime}-{endTime}
          </span>
        </div>
      </div>
    </Link>
  );
};

const css = `
& .programme__list {
    width: 100%;
    background-color: #efefef;
    list-style-type: none;
    margin-top: 1.5rem;
    border-radius: 10px;
  }
 & .programme__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2.5rem 2rem;
    transition: 0.2s ease-in;
  }
 & .programme-content {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
 & .programme__item:nth-child(even) {
    background-color: #fbf5f5;
  }
 & .programme__item:hover:not([class*="active-list"]) {
    background-color: #d1e2e2;
  }
 & .programme__item:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
 & .programme__item:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
 & .prog-name {
    flex: 65%;
    font-size: 1.8rem;
    font-weight: 500;
    color: #333333;
  }
 & .prog-icon {
    height: 1.5rem;
  }
 & .prog-schedule {
    flex: 35%;
    display: flex;
    justify-content: flex-end;
  }
 & .prog-time {
    font-size: 1.6rem;
    margin-left: 1rem;
    color: #555555;
  }
 & .active {
    color: #ecc730;
  }
 & .active-list {
    background-color: rgb(255, 237, 163);
  }
 & .programme__item[class*="active-list"] .current-prog {
    opacity: 1;
  }
 & .current-prog {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 2rem;
    opacity: 0;
  }
 & .outer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    background-color: rgba(243, 128, 21, 0.7);
    border-radius: 50px;
    animation: shrink 1s ease-in-out infinite;
  }
 & .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    background-color: #cf713a;
    border-radius: 50px;
    animation: grow 1s ease-in-out infinite;
  }
  @keyframes grow {
    0% {
      padding: 0.4rem;
    }
    50% {
      padding: 0;
    }
    100% {
      padding: 0.4rem;
    }
  }
  @keyframes shrink {
    0% {
      padding: 0.4rem;
    }
    25% {
      padding: 0.65rem;
    }
    50% {
      padding: 0.95rem;
    }
    75% {
      padding: 0.65rem;
    }
    100% {
      padding: 0.4rem;
    }
  }
  @media only screen and (max-width: 750px) {
   & .prog-name {
      font-size: 1.9rem;
    }
  }
  @media only screen and (max-width: 500px) {
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
