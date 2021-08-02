import { Scoped } from "kremling";
import React from "react";
import AudioPlayer from "../utility/AudioPlayer";

const LiveRadioModal = ({ setIsOpen, isShowing, setIsShowing }) => {
  // const [isShowing, setIsShowing] = useState(false);

  const handleClose = () => {
    if (isShowing === true) {
      setIsShowing(false);
    }
  };

  return (
    <>
      {isShowing ? (
        <Scoped css={css}>
          <div className="live-radio-modal">
            <div className="close" onClick={handleClose}>
              &#x2573;
            </div>
            <div className="live-radio__content">
              <div className="live-radio__inner">
                <div className="live-radio__logo">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="live-radio__info">
                <p className="live-radio__name">Century Masala Filimy Guff</p>
                <p className="live-radio__time">1:00 AM - 11:00 AM</p>
              </div>
              <div className="fm-player">
                <div id="audio" className="player-wrapper">
                  <AudioPlayer setIsOpen={setIsOpen} />
                </div>
              </div>

              <div className="upcoming">
                <div className="upcoming__title">
                  <p className="upcoming__up">
                    {/* <!-- coming-up.svg --> */}
                    <svg
                      className="icon upcoming__icon"
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
                            fill="#0B7074"
                          />
                          <path
                            d="m53.1,94.5c0.5,0.2 1,0.3 1.6,0.3 1.1,0 2.1-0.4 2.9-1.2l26.4-26.5c0.8-0.8 1.2-1.8 1.2-2.9s-0.4-2.2-1.2-2.9l-26.5-26.5c-1.2-1.2-2.9-1.5-4.5-0.9-1.5,0.6-2.5,2.1-2.5,3.8v53c0,1.6 1,3.1 2.6,3.8zm5.6-46.9l16.6,16.6-16.6,16.6v-33.2z"
                            fill="#0B7074"
                          />
                        </g>
                      </g>
                    </svg>
                    <span> Coming Up</span>
                  </p>
                </div>
                <div className="upcoming__name">
                  <p className="upcoming__cannel">Ujayalo News</p>
                  <p className="upcoming__time">09:00am - 09:15am</p>
                </div>
              </div>
              <div className="upcoming lateron">
                <div className="upcoming__title">
                  <p className="upcoming__up">
                    {/* <!-- later-on.svg --> */}
                    <svg
                      className="icon upcoming__icon"
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
                            fill="#0B7074"
                          />
                          <path
                            d="m51.1,93.5c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l26.4-26.4c0.8-0.8 1.2-1.8 1.2-2.9 0-1.1-0.4-2.1-1.2-2.9l-26.4-26.4c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l23.5,23.5-23.5,23.5c-1.6,1.6-1.6,4.2 0,5.8z"
                            fill="#0B7074"
                          />
                        </g>
                      </g>
                    </svg>
                    <span>Later On</span>
                  </p>
                </div>
                <div className="upcoming__name">
                  <p className="upcoming__cannel">
                    Sathi Sanga Century Masala Filimy Guff
                  </p>
                  <p className="upcoming__time">09:00am - 09:15am</p>
                </div>
              </div>
            </div>
          </div>
        </Scoped>
      ) : (
        ""
      )}
    </>
  );
};

export default LiveRadioModal;

const css = `
& .player-wrapper {
    border-radius: 5px;
    background-color: #222222;
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
    margin: auto;
    height: 100%;
  }
  & .live-radio-modal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--radio-bg-color);
    display: table;
    transition: opacity 0.5s ease;
  }
  & .live-radio__content {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    height: 50rem;
    width: 45%;
    text-align: center;
  }
  & .live-radio__inner {
    position: relative;
    width: 9.5rem;
    height: 9.5rem;
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 50%;
    background-color: var(--primary-color);
    z-index: 1000;
  }
  & .live-radio__logo {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 40px;
    height: 30px;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    color: var(--highlight-color);
    line-height: 1.5;
  }
  & .live-radio__logo span {
    display: inline-block;
    width: 10px;
    height: 5px;
    margin-left: 1px;
    background-color: var(--highlight-color);
    position: absolute;
    bottom: 0;
  }
  & .live-radio__logo span:nth-child(1) {
    left: 0;
    animation: radio 0.5s 0s ease-in-out infinite;
  }
  & .live-radio__logo span:nth-child(2) {
    left: 10px;
    animation: radio 0.5s 0.1s ease-in-out infinite;
  }
  & .live-radio__logo span:nth-child(3) {
    left: 20px;
    animation: radio 0.5s 0.4s ease-in-out infinite;
  }
  & .live-radio__logo span:nth-child(4) {
    left: 30px;
    animation: radio 0.5s 0.3s ease-in-out infinite;
  }
  
  & .live-radio__info {
    color: var(--highlight-color);
    font-size: 2.5rem;
    line-height: 1.5;
  }
 & .live-radio__time {
    color: white;
    font-size: 2rem;
  }
 & .fm-player {
    width: 100%;
    height: 5rem;
    margin: 1rem auto;
  }
 & .upcoming {
    width: 100%;
    padding: 1rem 0;
    background-color: var(--radio-content-bg-color);
    border-radius: 50px;
    margin: 2rem auto;
    display: flex;
    align-items: center;
  }
 & .upcoming__up {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
 & .upcoming__title {
    width: 20rem;
    margin-left: 3rem;
    font-size: 18px;
    font-weight: 700;
    color: var(--title-text-color);
  }
 & .upcoming__name {
    width: 80%;
    margin-right: 3rem;
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-color);
    line-height: 1.5;
    text-align: right;
  }
 & .upcoming__time {
    font-size: 1.5rem;
    color: var(--title-text-color);
    text-align: right;
  }
 & .upcoming__icon {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
  }
  @keyframes radio {
    0% {
      padding-top: 40px;
    }
    18% {
      padding-top: 30px;
    }
    34% {
      padding-top: 20px;
    }
    52% {
      padding-top: 10px;
    }
    70% {
      padding-top: 20px;
    }
    88% {
      padding-top: 30px;
    }
    100% {
      padding-top: 40px;
    }
  }
 & .modal-enter {
    opacity: 0;
  }
  
 & .modal-leave-active {
    opacity: 0;
  }
  
  @media only screen and (max-width: 1200px) {
   & .live-radio__content {
      width: 50%;
      top: 59%;
    }
  }
  @media only screen and (max-width: 1050px) {
   & .live-radio__content {
      width: 55%;
      top: 58%;
    }
  }
  @media only screen and (max-width: 900px) {
   & .live-radio__content {
      width: 65%;
      top: 55%;
    }
  }
  @media only screen and (max-width: 750px) {
   & .live-radio__content {
      width: 75%;
      top: 52%;
    }
  }
  @media only screen and (max-width: 500px) {
   & .live-radio__content {
      width: 93%;
      top: 55%;
    }
   & .upcoming__title {
      font-size: 16px;
    }
   & .upcoming__name {
      font-size: 1.8rem;
    }
  }
  
`;
