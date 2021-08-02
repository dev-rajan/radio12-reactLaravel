import React from "react";
import { Link } from "react-router-dom";
import SquareAd from "../common/ads/SquareAd";
import OnAir from "../common/sidebar/OnAir";
import Podcast from "../common/sidebar/Podcast";
import Presenter from "../common/sidebar/Presenter";
import Breadcrumb from "../utility/Breadcrumb";
import Comment from "../utility/Comment";
import SpecialProgram from "../utility/SpecialProgram";
import Facebook from "../../assets/img/facebook.svg";
import Twitter from "../../assets/img/twitter.svg";
import { Scoped } from "kremling";

const TeamProfile = () => {
  return (
    <Scoped css={css}>
      <div className="page-wraper">
        <main>
          <div className="main-side">
            <Breadcrumb category="Team" title="Team Profile" />
            <h3 className="highlight">Team Profile</h3>

            <div className="team-profile">
              <div className="team-image">
                <img
                  src={Items?.imageUrl.default}
                  alt={Items?.name}
                  className="team-img"
                />

                <div className="follow">
                  <p className="f-title">Follow Me On</p>
                  <a href={Items?.facebookUrl} className="f-on">
                    <img
                      className="icon f-icon"
                      src={Facebook}
                      alt={Items?.name}
                    />
                  </a>
                  <a href={Items?.twitterUrl} className="f-on">
                    <img
                      className="icon f-icon"
                      src={Twitter}
                      alt={Items?.name}
                    />
                  </a>
                  <a href={Items?.instagramUrl} className="f-on"></a>
                </div>
              </div>

              <div className="team-content">
                <h4 className="team-title">{Items?.name}</h4>
                <p className="position">
                  Position: <span>{Items?.position}</span>
                </p>
                <p className="program">
                  Programme:
                  <span>
                    <Link to="/programme-detail">{Items?.programme}</Link>
                  </span>
                </p>
                <p className="myself">
                  About Myself:<span> {Items?.about}</span>
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
            <SquareAd />
            <Podcast />
            <SquareAd />
            <Presenter />
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default TeamProfile;

const Items = {
  id: "1",
  name: "Bhem Sher Thapa",
  about: `I host a show that's been running for the LONGEST time<br>
                        Latest movie : November Rain<br>
                        I'm currently reading : 'Palpasa Cafe' by Narayan Wagle<br>
                        Current fav song : Cant pick one EVER!<br>
                        Quote for the day : Manish Thulo Dil le Hunchha Jaat Le Hundaina!<br>
                        RJ-ing style : Believable!<br>
                        Sports : Football, Table Tennis, Pool, Cycling, Basketball and Football
                        `,
  imageUrl: require("../../assets/img/hijab.jpg"),
  position: "Presenter",
  programme: "Sathi Sanga Maan Ka Kura",
  facebookUrl: "#",
  twitterUrl: "#",
  instagramUrl: "#",
};

const css = `
& .team-profile {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
 & .team-image {
    width: 32%;
  }
 & .team-img {
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
 & .team-content {
    width: 65%;
  }
 & .team-title {
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
 & .program span a {
    color: var(--primary-color);
    cursor: pointer;
  }
 & .program span:hover a {
    text-decoration: underline;
  }
  @media only screen and (max-width: 900px) {
   & .team-image {
      width: 38%;
    }
   & .team-content {
      width: 60%;
    }
  }
  @media only screen and (max-width: 500px) {
   & .team-profile {
      display: block;
    }
   & .team-image {
      width: 100%;
    }
   & .team-content {
      width: 100%;
    }
   & .follow {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
   & .f-title {
      display: none;
    }
   & .f-icon {
      width: 2rem;
    }
  }
`;
