import { Scoped } from "kremling";
import React from "react";

const CountDown = () => {
  return (
    <Scoped css={css}>
      <div className="countdown">
        <div className="card">
          <h3 className="highlight">Top 10 Songs Of Week</h3>

          <div className="countdown-list">
            {Items?.map((a, idx) => (
              <TopList {...a} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </Scoped>
  );
};

export default CountDown;

const TopList = ({ id, song, singer }) => {
  return (
    <div className="column align-item-center">
      <div className="count">
        <span className="count-num">{id}</span>
      </div>
      <div className="content width90">
        <a className="title">{song}</a>
        <span className="sub-title">{singer}</span>
      </div>
    </div>
  );
};

const Items = [
  {
    id: "1",
    song: "Man Magan",
    singer: "Deepak Bajracharya",
  },
  {
    id: "2",
    song: "Saili ra Maili",
    singer: "Krishna Bhakta Rai, Mahesh Budathoki",
  },
  {
    id: "3",
    song: "Jaba Jaba Timro Saath",
    singer: "Aadi Yakhumba",
  },
  {
    id: "4",
    song: "Rajesh Payal Rai Darshan Namaste 3",
    singer: "Rajesh Payal Rai",
  },
  {
    id: "5",
    song: "Pilayo Saathile by Shiva Pariyar",
    singer: "Shiva Pariyar",
  },
  {
    id: "6",
    song: "Nepathya - Siran Ma Photo Cha",
    singer: "Nepathya",
  },
  {
    id: "7",
    song: "Mero Jindagiko",
    singer: "Karina",
  },
  {
    id: "8",
    song: "New Nepali Mordern songs Malai Dherai Maya Garne",
    singer: "Anju Panta, Deepak Limbu",
  },
  {
    id: "9",
    song: "farki farki by dipen gurung",
    singer: "Dipen Gurung",
  },
  {
    id: "10",
    song: "Nachaheko Hoina Timilai Song by The Edge Band.flv",
    singer: "The Edge",
  },
];

const css = `
& .countdown-list {
    margin-top: 1rem;
  }
  & .column:first-child {
    background-color: var(--countdown-color);
    border-radius: 5px;
    padding: 1rem;
  }
  & .column:first-child & .count {
    background-color: #fff;
  }
  & .column:first-child & .width90 {
    width: 70%;
  }
  & .column:last-child {
    margin-bottom: 0;
  }
  & .count {
    position: relative;
    background-color: var(--countdown-color);
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    margin-right: 1rem;
  }
  & .count-num {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--primary-color);
    font-size: 2rem;
    font-weight: 700;
  }
  & .sub-title {
    display: block;
    font-size: 1.4rem;
    color: var(--content-text-color);
  }
 & .align-item-center {
    align-items: center;
  }
 & .width90 {
    width: 90%;
  }
 & .title {
    color: var(--title-text-color);
    font-size: 1.6rem;
    font-weight: 600;
    cursor: default;
  }
  @media only screen and (max-width: 900px) {
   & .column {
      display: block;
    }
   & .count {
      margin: auto;
    }
   & .column:first-child .width90 {
      width: 100%;
    }
   & .width90 {
      width: 100%;
      margin-top: 1rem;
      text-align: center;
    }
  }
  @media only screen and (max-width: 750px) {
   & .card {
      padding: 2.5rem 10rem;
    }
   & .column {
      display: flex;
      justify-content: flex-start;
    }
   & .width90 {
      width: 90%;
      text-align: left;
      margin-left: 2rem;
    }
   & .column:first-child .width90 {
      width: 90%;
    }
  
   & .title {
      font-size: 2rem;
    }
   & .sub-title {
      font-size: 1.6rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .card {
      padding: 2.5rem;
    }
  }
  
`;
