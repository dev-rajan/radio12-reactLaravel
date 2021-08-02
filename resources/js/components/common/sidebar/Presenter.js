import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";

const Presenter = () => {
  return (
    <Scoped css={css}>
      <div className="presenter">
        <div className="card">
          <h3 className="highlight">Radio Presenters</h3>

          <div className="presenter-list">
            {Items?.map((a, idx) => (
              <Presentors key={idx} {...a} />
            ))}
          </div>
        </div>
      </div>
    </Scoped>
  );
};

export default Presenter;

const Presentors = ({ image, name, position }) => {
  return (
    <div className="column align-item-center">
      <div className="img-holder holder-hw30 margin-rt1 border-round">
        <Link to="/team-profile" className="img-link">
          <img src={image.default} alt={name} className="img" />
        </Link>
      </div>
      <div className="content width-55">
        <Link to="/team-profile" className="title">
          {name}
        </Link>
        <span className="sub-title">{position}</span>
      </div>
    </div>
  );
};

const Items = [
  {
    name: "Shakher Parajuli",
    position: "Presenter",
    image: require("../../../assets/img/aravind.jpg"),
  },
  {
    name: "Narayan Prasad Neupane",
    position: "Presenter",
    image: require("../../../assets/img/andrew.jpg"),
  },
  {
    name: "Aanisha Upadahya",
    position: "Presenter",
    image: require("../../../assets/img/portrait.jpg"),
  },
  {
    name: "Prakash Devkota",
    position: "Presenter",
    image: require("../../../assets/img/child.jpg"),
  },
  {
    name: "Mahendra Singh Shrestha",
    position: "Presenter",
    image: require("../../../assets/img/outdoors.jpg"),
  },
  {
    name: "Bebak Upadahya",
    position: "Presenter",
    image: require("../../../assets/img/ben.jpg"),
  },
];

const css = `
& .holder-hw30 {
    height: 8rem;
    width: 8rem;
  }
 & .width-55 {
    width: 55%;
  }
 & .margin-rt1 {
    margin-right: 1.5rem;
  }
  
 & .border-round {
    border-radius: 50%;
  }
 & .title {
    font-weight: 600;
  }
 & .align-item-center {
    align-items: center;
  }
 & .presenter-list {
    margin-top: 1rem;
  }
 & .sub-title {
    display: block;
    font-size: 1.4rem;
    color: var(--content-text-color);
  }
 & .column:last-child {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 1200px) {
   & .holder-hw30 {
      height: 7.3rem;
    }
  }
  @media only screen and (max-width: 900px) {
   & .column {
      display: block;
    }
   & .holder-hw30 {
      height: 9rem;
      width: 9rem;
      margin: auto;
    }
   & .width-55 {
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
   & .width-55 {
      width: 75%;
      text-align: left;
      margin-left: 2rem;
    }
   & .holder-hw30 {
      height: 9rem;
      width: 9rem;
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
