import { Scoped } from "kremling";
import React from "react";

const Date = () => {
  return (
    <Scoped css={css}>
      <div className="up-nav__date">
        <span className="up-nav__dateList up-nav--flex">
          {/* <!-- calender.svg --> */}
          <svg
            className="icon up-nav__dateIcon"
            id="calendar"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17.9 15.579"
          >
            <g id="Group_128" data-name="Group 128" transform="translate(0 0)">
              <path
                id="Path_20"
                data-name="Path 20"
                className="cls-1"
                d="M283.252,214.6h-.866v-1.81a.393.393,0,1,0-.787,0V215a.372.372,0,0,0,.393.393h1.259a.372.372,0,0,0,.393-.393A.394.394,0,0,0,283.252,214.6Z"
                transform="translate(-267.752 -203.115)"
                fill="#0B7074"
              />
              <path
                id="Path_21"
                data-name="Path 21"
                className="cls-1"
                d="M16.878,32.963v-7.2h0a.789.789,0,0,0-.787-.787H14.6v-.984a.393.393,0,1,0-.787,0v.984H11.724v-.984a.393.393,0,0,0-.787,0v.984H8.852v-.984a.393.393,0,0,0-.787,0v.984H5.98v-.984a.393.393,0,0,0-.787,0v.984H3.029v-.984a.372.372,0,0,0-.393-.393.372.372,0,0,0-.393.393v.984H.787A.789.789,0,0,0,0,25.764v10.9a.789.789,0,0,0,.787.787H11.094A3.74,3.74,0,0,0,14.2,39.179a3.694,3.694,0,0,0,3.7-3.7A3.569,3.569,0,0,0,16.878,32.963ZM.708,25.764H2.282v.984a.372.372,0,0,0,.393.393.372.372,0,0,0,.393-.393v-.984H5.154v.984a.393.393,0,0,0,.787,0v-.984H8.026v.984a.393.393,0,0,0,.787,0v-.984H10.9v.984a.393.393,0,0,0,.787,0v-.984H13.77v.984a.393.393,0,0,0,.787,0v-.984h1.495v1.928H.708S.708,25.764.708,25.764ZM10.74,36.622H.787V28.478H16.13v3.816a3.528,3.528,0,0,0-1.888-.551,3.694,3.694,0,0,0-3.7,3.7A3.906,3.906,0,0,0,10.74,36.622Zm3.5,1.77a2.911,2.911,0,1,1,2.911-2.911A2.9,2.9,0,0,1,14.242,38.392Z"
                transform="translate(0 -23.6)"
                fill="#0B7074"
              />
            </g>
          </svg>
          <p className="up-nav__dateContent">मगलवार, भदौ ५, २०७५</p>
        </span>
        <span className="up-nav__dateList up-nav--flex">
          {/* <!-- clock.svg --> */}
          <svg
            className="icon up-nav__dateIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16.213 16.213"
          >
            <g id="clock" transform="translate(0.25 0.25)">
              <g id="Layer_1" data-name="Layer 1" transform="translate(0 0)">
                <rect
                  id="Rectangle_183"
                  data-name="Rectangle 183"
                  className="cls-1"
                  width="0.568"
                  height="6.126"
                  transform="translate(4.129 3.509) rotate(-33.13)"
                  fill="#0B7074;"
                  stroke="#0B7074"
                  strokeWidth="0.5px"
                />
                <rect
                  id="Rectangle_184"
                  data-name="Rectangle 184"
                  className="cls-1"
                  width="0.568"
                  height="3.143"
                  transform="translate(7.507 8.715) rotate(-87.5)"
                  fill="#0B7074;"
                  stroke="#0B7074"
                  strokeWidth="0.5px"
                />
                <path
                  id="Path_19"
                  data-name="Path 19"
                  className="cls-1"
                  d="M8.356,16.213a7.856,7.856,0,1,1,7.856-7.856,7.856,7.856,0,0,1-7.856,7.856Zm0-15.3a7.439,7.439,0,1,0,7.426,7.439A7.439,7.439,0,0,0,8.356.918Z"
                  transform="translate(-0.5 -0.5)"
                  fill="#0B7074;"
                  stroke="#0B7074"
                  strokeMiterlimit="10"
                  strokeWidth="0.4px"
                />
              </g>
            </g>
          </svg>
          <p className="up-nav__dateContent">01:40:32</p>
        </span>
      </div>
    </Scoped>
  );
};

export default Date;

const css = `
& .up-nav--flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & .up-nav__date {
    width: 15%;
  }
  & .up-nav__dateList {
    width: 100%;
  }
  & .up-nav__dateIcon {
    display: inline-block;
    width: 1.6rem;
    height: 1.5rem;
    margin-right: 1rem;
  }
  & .up-nav__dateContent {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5;
    color: var(--primary-color);
  }
  @media only screen and (max-width: 1200px) {
    & .up-nav__dateContent {
      font-size: 1.4rem;
    }
  }
  @media only screen and (max-width: 1050px) {
    & .up-nav__date {
      width: 30%;
    }
    & .up-nav__dateList {
      display: inline;
    }
    & .up-nav__dateList:nth-child(2) {
      margin-left: 2rem;
    }
    & .up-nav__dateContent {
      font-size: 1.6rem;
    }
    & .up-nav__dateIcon {
      width: 1.6rem;
    }
  }
  @media only screen and (max-width: 900px) {
    & .up-nav__date {
      width: 35%;
    }
  }
  @media only screen and (max-width: 750px) {
    & .up-nav__date {
      width: 60%;
    }
    & .up-nav__dateContent {
      font-size: 1.6rem;
    }
  }
  @media only screen and (max-width: 500px) {
    & .up-nav__dateContent {
      color: white;
    }
    & .up-nav__dateIcon {
      display: none;
    }
  }
  @media only screen and (max-width: 360px) {
    & .up-nav__dateContent {
      font-size: 1.4rem;
    }
  }
  
`;
