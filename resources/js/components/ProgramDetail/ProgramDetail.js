import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import SquareAd from "../common/ads/SquareAd";
import OnAir from "../common/sidebar/OnAir";
import Podcast from "../common/sidebar/Podcast";
import Presenter from "../common/sidebar/Presenter";
import Comment from "../utility/Comment";
import SpecialProgram from "../utility/SpecialProgram";
import Facebook from "../../assets/img/facebook.svg";
import Twitter from "../../assets/img/twitter.svg";
import Breadcrumb from "../utility/Breadcrumb";

const ProgramDetail = () => {
  return (
    <Scoped css={css}>
      <div className="page-wraper">
        <main>
          <div className="main-side">
            <Breadcrumb category="Programme" title="Programme Detail" />
            <h3 className="highlight">Programme Detail</h3>

            <div className="program-detail">
              <div className="program-image">
                <img
                  src={programmeDetail?.imageUrl.default}
                  alt={programmeDetail?.name}
                  className="program-img"
                />
                <div className="follow">
                  <p className="f-title">Get Connected</p>
                  <a href={programmeDetail?.facebookUrl} className="f-on">
                    <img
                      className="icon f-icon"
                      src={Facebook}
                      alt={programmeDetail.name}
                    />
                  </a>
                  <a href={programmeDetail?.twitterUrl} className="f-on">
                    <img
                      className="icon f-icon"
                      src={Twitter}
                      alt={programmeDetail.name}
                    />
                  </a>
                  <a href={programmeDetail?.instagramUrl} className="f-on"></a>
                </div>
              </div>

              <div className="program-content">
                <h4 className="program-title">{programmeDetail?.programme}</h4>
                <p className="position">
                  Presenter :
                  <span>
                    <Link to="/team-profile">{programmeDetail?.presenter}</Link>
                  </span>
                </p>
                <p className="program">
                  Time Schedule : <span>{programmeDetail?.timeSchedule}</span>
                </p>
                <p className="myself">
                  About Program : <span>{programmeDetail?.about}</span>
                </p>
              </div>
            </div>

            <Comment>
              <div>comment</div>
            </Comment>

            <SpecialProgram />
          </div>

          <div className="right-side">
            <SquareAd />

            <OnAir />

            <Podcast />

            <Presenter />
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default ProgramDetail;

const programmeDetail = {
  id: "1",
  programme: "Sathi Sanga Maan Ka Kura",
  about: `I host a show that's been running for the LONGEST time<br>
                        Latest movie : November Rain<br>
                        I'm currently reading : 'Palpasa Cafe' by Narayan Wagle<br>
                        Current fav song : Cant pick one EVER!<br>
                        Quote for the day : Manish Thulo Dil le Hunchha Jaat Le Hundaina!<br>
                        RJ-ing style : Believable!<br>
                        Sports : Football, Table Tennis, Pool, Cycling, Basketball and Football
                        `,
  imageUrl: require("../../assets/img/hijab.jpg"),
  presenter: "Bhem Sher Thapa",
  timeSchedule: "Thus, 9:00Am-9:45AM",
  facebookUrl: "#",
  twitterUrl: "#",
  instagramUrl: "#",
};

const css = `
& .program-detail {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
 & .program-image {
    width: 32%;
  }
 & .program-img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    border-radius: 10px;
  }
 & .follow {
    text-align: center;
    margin-top: 0.5rem;
  }
 & .f-title {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--title-text-color);
  }
 & .f-on {
    margin-right: 2rem;
  }
 & .f-on:last-child {
    margin-right: 0;
  }
 & .f-icon {
    width: 2rem;
    transition: 0.2s ease-in;
  }
 & .f-icon:hover {
    transform: scale(1.2);
  }
 & .program-content {
    width: 65%;
  }
 & .program-title {
    font-size: 2.2rem;
    color: var(--title-text-color);
    margin-bottom: 1rem;
  }
 & .position,
 & .program,
 & .myself {
    font-size: 1.7rem;
    font-weight: 700;
    color: var(--title-text-color);
    line-height: 1.4;
    margin-bottom: 1rem;
  }
 & .position span,
 & .program span,
 & .myself span {
    font-weight: 400;
    margin-left: 1rem;
    color: var(--content-text-color);
  }
 & .myself span {
    line-height: 1.8;
    letter-spacing: 0.4px;
  }
 & .position span a {
    color: var(--primary-color);
    cursor: pointer;
  }
 & .position span:hover a {
    text-decoration: underline;
  }
  
  @media only screen and (max-width: 900px) {
   & .program-image {
      width: 38%;
    }
   & .program-content {
      width: 60%;
    }
  }
  @media only screen and (max-width: 500px) {
   & .program-detail {
      display: block;
    }
   & .program-image {
      width: 100%;
    }
   & .program-content {
      width: 100%;
    }
   & .follow {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
   & .f-title {
      display: none;
    }
  }
`;
