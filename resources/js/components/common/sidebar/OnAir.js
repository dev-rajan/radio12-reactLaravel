import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";

const OnAir = () => {
  return (
    <Scoped css={css}>
      <div className="onair">
        <div className="card align-center">
          <div className="onair__out">
            <div className="onair__in">
              <div className="onair__logo">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p className="onair__title">On Air</p>
            </div>
          </div>

          <div className="current">
            <Link to="/programme-detail" className="current__cnl">
              Ujjyalo News
            </Link>
            <p className="current__time">9:00AM-9:45AM</p>
          </div>

          <div className="coming">
            <h3 className="coming__title">
              <svg
                className="coming__icon"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 129 129"
                enableBackground="new 0 0 129 129"
                width="512px"
                height="512px"
              >
                <g>
                  <g>
                    <path
                      d="m64.5,122.7c32.1,0 58.2-26.1 58.2-58.2s-26.1-58.2-58.2-58.2-58.2,26.1-58.2,58.2 26.1,58.2 58.2,58.2zm0-108.2c27.6,0 50,22.4 50,50s-22.4,50-50,50-50-22.5-50-50 22.4-50 50-50z"
                      fill="#555555"
                    />
                    <path
                      d="m53.1,94.5c0.5,0.2 1,0.3 1.6,0.3 1.1,0 2.1-0.4 2.9-1.2l26.4-26.5c0.8-0.8 1.2-1.8 1.2-2.9s-0.4-2.2-1.2-2.9l-26.5-26.5c-1.2-1.2-2.9-1.5-4.5-0.9-1.5,0.6-2.5,2.1-2.5,3.8v53c0,1.6 1,3.1 2.6,3.8zm5.6-46.9l16.6,16.6-16.6,16.6v-33.2z"
                      fill="#555555"
                    />
                  </g>
                </g>
              </svg>
              Coming Up
            </h3>
            <Link to="/programme-detail" className="coming__cnl">
              Sathi Sanga Maan Ka Kura
            </Link>
            <p className="coming__time">9:45AM-10:30AM</p>
          </div>

          <div className="coming">
            <h3 className="coming__title">
              <svg
                className="coming__icon"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 129 129"
                enableBackground="new 0 0 129 129"
                width="512px"
                height="512px"
              >
                <g>
                  <g>
                    <path
                      d="M64.5,122.6c32,0,58.1-26,58.1-58.1S96.5,6.4,64.5,6.4S6.4,32.5,6.4,64.5S32.5,122.6,64.5,122.6z M64.5,14.6    c27.5,0,49.9,22.4,49.9,49.9S92,114.4,64.5,114.4S14.6,92,14.6,64.5S37,14.6,64.5,14.6z"
                      fill="#555555"
                    />
                    <path
                      d="m51.1,93.5c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l26.4-26.4c0.8-0.8 1.2-1.8 1.2-2.9 0-1.1-0.4-2.1-1.2-2.9l-26.4-26.4c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l23.5,23.5-23.5,23.5c-1.6,1.6-1.6,4.2 0,5.8z"
                      fill="#555555"
                    />
                  </g>
                </g>
              </svg>
              Later On
            </h3>
            <Link to="/programme-detail" className="coming__cnl">
              Geet Mala
            </Link>
            <p className="coming__time">10:30AM-11:00AM</p>
          </div>
        </div>
      </div>
    </Scoped>
  );
};

export default OnAir;

const css = `
& .card {
    padding: 2.5rem 0;
  }
 & .onair__out {
    position: relative;
    height: 8.4rem;
    width: 8.4rem;
    border-radius: 50%;
    background-color: var(--onair-out-color);
    margin: auto;
  }
 & .onair__in {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 6.3rem;
    width: 6.3rem;
    border-radius: 50%;
    background-color: var(--primary-color);
  }
 & .onair__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 15px;
    transform: translate(-50%, -50%);
  }
 & .onair__logo span {
    display: inline-block;
    width: 6px;
    height: 2px;
    background-color: var(--radio-text);
    position: absolute;
    bottom: 0;
  }
 & .onair__logo span:nth-child(1) {
    left: 0;
    animation: radio 0.5s 0s ease-in-out infinite;
  }
 & .onair__logo span:nth-child(2) {
    left: 6px;
    animation: radio 0.5s 0.1s ease-in-out infinite;
  }
 & .onair__logo span:nth-child(3) {
    left: 12px;
    animation: radio 0.5s 0.4s ease-in-out infinite;
  }
 & .onair__logo span:nth-child(4) {
    left: 18px;
    animation: radio 0.5s 0.3s ease-in-out infinite;
  }
 & .onair__title {
    position: absolute;
    bottom: 0.5rem;
    left: 22%;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--radio-text);
  }
 & .current {
    margin-top: 1.5rem;
  }
 & .current__cnl {
    font-size: 1.9rem;
    font-weight: 700;
    color: var(--onair-out-color);
    margin: 0.5rem 0;
    cursor: pointer;
  }
 & .current__time {
    font-size: 1.7rem;
    color: var(--title-text-color);
    font-weight: 500;
  }
 & .coming {
    background-color: #ececec;
    padding: 1.5rem 0.5rem;
    margin-top: 2rem;
  }
 & .coming__icon {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
 & .coming__title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    color: var(--title-text-color);
  }
 & .coming__cnl {
    font-size: 1.7rem;
    font-weight: 700;
    margin: 0.5rem 0;
    color: var(--onair-out-color);
    cursor: pointer;
  }
 & .coming__time {
    font-size: 1.5rem;
    color: var(--title-text-color);
    font-weight: 500;
  }
  
  @keyframes radio {
    0% {
      padding-top: 28px;
    }
    18% {
      padding-top: 20px;
    }
    34% {
      padding-top: 15px;
    }
    52% {
      padding-top: 10px;
    }
    70% {
      padding-top: 15px;
    }
    88% {
      padding-top: 20px;
    }
    100% {
      padding-top: 28px;
    }
  }
  @media only screen and (max-width: 750px) {
   & .current__cnl {
      font-size: 2.3rem;
    }
   & .coming__time {
      font-size: 1.8rem;
    }
   & .coming__icon {
      width: 2.2rem;
    }
   & .coming__cnl {
      font-size: 2rem;
    }
   & .coming__time {
      font-size: 1.8rem;
    }
  }
  
`;
