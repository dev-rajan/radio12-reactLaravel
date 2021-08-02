import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../utility/Breadcrumb";
import SpecialProgram from "../utility/SpecialProgram";
import PageSidebar from "../common/sidebar/PageSidebar";

const Team = () => {
  return (
    <Scoped css={css}>
      <div className="page-wraper">
        <main>
          <div className="main-side">
            <Breadcrumb title="Our Team" />
            <h3 className="highlight">Our Team</h3>
            <p className="team-detail">
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure.
            </p>

            <div className="team-title">Management Team</div>
            <div className="m-team">
              {Management?.map((a, idx) => (
                <ManagementList key={idx} {...a} />
              ))}
            </div>

            <div className="team-title">Presenters Team</div>
            <div className="m-team">
              {Presentor?.map((a, idx) => (
                <PresenterList key={idx} {...a} />
              ))}
            </div>

            <div className="team-title">Technical Team</div>
            <div className="m-team">
              {Technical?.map((a, idx) => (
                <TechnicalList key={idx} {...a} />
              ))}
            </div>

            <SpecialProgram />
          </div>

          <div className="right-side">
            <PageSidebar />
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default Team;

const ManagementList = ({ image, name, position }) => {
  return (
    <div className="row row-width60 marginbtn3">
      <div className="img-holder holder-hw60">
        <Link to="/team-profile" className="img-link">
          <img src={image.default} alt={name} className="img" />
        </Link>
      </div>
      <div
        className="
                content
                align-left
                content--width80 content--shadow
                margintop--minus
              "
      >
        <Link to="/team-profile">
          <p className="title font-size19">{name}</p>
        </Link>
        <span className="position">{position}</span>
      </div>
    </div>
  );
};

const PresenterList = ({ image, name, position }) => {
  return (
    <div className="row row-width60 marginbtn3">
      <div className="img-holder holder-hw60">
        <Link to="/team-profile" className="img-link">
          <img src={image.default} alt={name} className="img" />
        </Link>
      </div>
      <div
        className="
                content
                align-left
                content--width80 content--shadow
                margintop--minus
              "
      >
        <Link to="/team-profile">
          <p className="title font-size19">{name}</p>
        </Link>
        <span className="position">{position}</span>
      </div>
    </div>
  );
};

const TechnicalList = ({ image, name, position }) => {
  return (
    <div className="row row-width60 marginbtn3">
      <div className="img-holder holder-hw60">
        <Link to="/team-profile" className="img-link">
          <img src={image.default} alt={name} className="img" />
        </Link>
      </div>

      <div
        className="
                content
                align-left
                content--width80 content--shadow
                margintop--minus
              "
      >
        <Link to="/team-profile">
          <p className="title font-size19">{name}</p>
        </Link>
        <span className="position">{position}</span>
      </div>
    </div>
  );
};

const Management = [
  {
    name: "Bhem Sher Thapa",
    position: "Chairman",
    image: require("../../assets/img/girl-shoping.jpg"),
  },
  {
    name: "Prakash Dhakal",
    position: "Executive Manager",
    image: require("../../assets/img/outdoors.jpg"),
  },
  {
    name: "Radhika Pardhan",
    position: "Assistance Manager",
    image: require("../../assets/img/portrait.jpg"),
  },
];

const Presentor = [
  {
    name: "Shakher Parajuli",
    position: "Presenter",
    image: require("../../assets/img/aravind.jpg"),
  },
  {
    name: "Narayan Prasad Neupane",
    position: "Presenter",
    image: require("../../assets/img/andrew.jpg"),
  },
  {
    name: "Aanisha Upadahya",
    position: "Presenter",
    image: require("../../assets/img/portrait.jpg"),
  },
  {
    name: "Prakash Devkota",
    position: "Presenter",
    image: require("../../assets/img/child.jpg"),
  },
  {
    name: "Mahendra Singh Shrestha",
    position: "Presenter",
    image: require("../../assets/img/outdoors.jpg"),
  },
  {
    name: "Bebak Upadahya",
    position: "Presenter",
    image: require("../../assets/img/ben.jpg"),
  },
];

const Technical = [
  {
    name: "Sudarsan Shrestha",
    position: "Technical Assistant",
    image: require("../../assets/img/adrian.jpg"),
  },
  {
    name: "Kalpana Bhattarai",
    position: "Technical Person",
    image: require("../../assets/img/aravind.jpg"),
  },
  {
    name: "Kalpana Bhattarai",
    position: "Technical Person",
    image: require("../../assets/img/red-carpet.jpg"),
  },
];

const css = `
& .marginbtn3 {
    margin-bottom: 2rem;
  }
 & .font-size19 {
    font-size: 1.7rem;
  }
 & .row-width60 {
    width: 31.85%;
  }
 & .holder-hw60 {
    width: 100%;
    height: 30rem;
  }
 & .content--width100 {
    width: 100%;
    margin: auto;
  }
 & .margintop--minus {
    margin-top: -9rem;
  }
 & .content--shadow {
    box-shadow: 0 2px 10px #999999;
  }
 & .content {
    position: relative;
    background-color: #ffffff;
    height: 9rem;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 2rem;
    opacity: 0;
    transition: opacity 0.4s;
  }
 & .team-detail {
    width: 80%;
    font-size: 1.8rem;
    color: var(--content-text-color);
  }
 & .team-title {
    color: var(--primary-color);
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 4rem;
  }
 & .m-team {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0;
  }
 & .position {
    display: block;
    color: var(--primary-color);
    font-size: 1.4rem;
    font-weight: 500;
  }
 & .title {
    line-height: 1;
    margin-bottom: 0.5rem;
  }
 & .row:hover .content {
    opacity: 1;
  }
 & .row:hover .img {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 1050px) {
   & .content {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 900px) {
   & .row-width60 {
      width: 48%;
    }
   & .holder-hw60 {
      height: 25rem;
    }
   & .title {
      font-size: 1.8rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .title {
      font-size: 1.7rem;
    }
   & .team-detail {
      width: 100%;
    }
  }
  @media only screen and (max-width: 360px) {
   & .row-width60 {
      width: 100%;
    }
  }
  
`;
