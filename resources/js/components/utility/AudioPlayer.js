import { Scoped } from "kremling";
import React, { useState } from "react";

const AudioPlayer = ({ setIsOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [isControlled, setIsControlled] = useState(true);

  const handlePlay = () => {
    if (isPlaying === false) {
      setIsPlaying(true);
      setIsControlled(false);
      setIsOpen(false);
    } else {
      setIsPlaying(false);
      setIsControlled(true);
      setIsOpen(true);
    }
  };

  const handleMute = () => {
    if (isMute === false) {
      setIsMute(true);
      setIsControlled(false);
      setIsOpen(false);
    } else {
      setIsMute(false);
      setIsControlled(true);
      setIsOpen(true);
    }
  };

  return (
    <Scoped css={css}>
      <div className="player">
        <div className="player-controls">
          <div>
            <a title="Play/Pause" href="#" onClick={handlePlay}>
              <svg
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                {isPlaying ? (
                  <path
                    fill="#fff"
                    d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
                  />
                ) : (
                  <path
                    fill="#fff"
                    d="M15,3h-2c-0.553,0-1,0.048-1,0.6v12.8c0,0.552,0.447,0.6,1,0.6h2c0.553,0,1-0.048,1-0.6V3.6C16,3.048,15.553,3,15,3z M7,3H5C4.447,3,4,3.048,4,3.6v12.8C4,16.952,4.447,17,5,17h2c0.553,0,1-0.048,1-0.6V3.6C8,3.048,7.553,3,7,3z"
                  />
                )}
              </svg>
            </a>
          </div>
          <div>
            <div className="player-progress">
              <p>Live Broadcast</p>
            </div>
            {/* <!-- <div className="player-time">
						<div className="player-time-current">{{ currentTime }}</div>
						<div className="player-time-total">{{ durationTime }}</div>
					</div> --> */}
          </div>
          <div>
            <a title="Mute" href="#" onClick={handleMute}>
              <svg
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                {isMute ? (
                  <path
                    fill="#fff"
                    d="M14.201,9.194c1.389,1.883,1.818,3.517,1.559,3.777c-0.26,0.258-1.893-0.17-3.778-1.559l-5.526,5.527c4.186,1.838,9.627-2.018,10.605-2.996c0.925-0.922,0.097-3.309-1.856-5.754L14.201,9.194z M8.667,7.941c-1.099-1.658-1.431-3.023-1.194-3.26c0.233-0.234,1.6,0.096,3.257,1.197l1.023-1.025C9.489,3.179,7.358,2.519,6.496,3.384C5.568,4.31,2.048,9.261,3.265,13.341L8.667,7.941z M18.521,1.478c-0.39-0.391-1.023-0.391-1.414,0L1.478,17.108c-0.391,0.391-0.391,1.024,0,1.414c0.391,0.391,1.023,0.391,1.414,0l15.629-15.63C18.912,2.501,18.912,1.868,18.521,1.478z"
                  />
                ) : (
                  <path
                    fill="#fff"
                    d="M5.312,4.566C4.19,5.685-0.715,12.681,3.523,16.918c4.236,4.238,11.23-0.668,12.354-1.789c1.121-1.119-0.335-4.395-3.252-7.312C9.706,4.898,6.434,3.441,5.312,4.566z M14.576,14.156c-0.332,0.328-2.895-0.457-5.364-2.928C6.745,8.759,5.956,6.195,6.288,5.865c0.328-0.332,2.894,0.457,5.36,2.926C14.119,11.258,14.906,13.824,14.576,14.156zM15.434,5.982l1.904-1.906c0.391-0.391,0.391-1.023,0-1.414c-0.39-0.391-1.023-0.391-1.414,0L14.02,4.568c-0.391,0.391-0.391,1.024,0,1.414C14.41,6.372,15.043,6.372,15.434,5.982z M11.124,3.8c0.483,0.268,1.091,0.095,1.36-0.388l1.087-1.926c0.268-0.483,0.095-1.091-0.388-1.36c-0.482-0.269-1.091-0.095-1.36,0.388L10.736,2.44C10.468,2.924,10.642,3.533,11.124,3.8z M19.872,6.816c-0.267-0.483-0.877-0.657-1.36-0.388l-1.94,1.061c-0.483,0.268-0.657,0.878-0.388,1.36c0.268,0.483,0.877,0.657,1.36,0.388l1.94-1.061C19.967,7.907,20.141,7.299,19.872,6.816z"
                  />
                )}
              </svg>
            </a>
          </div>
          <div>
            <a title="Volume" href="#">
              <input type="range" min="0" max="100" className="volume-slider" />
            </a>
          </div>
        </div>
        {isControlled ? (
          <MusicPlayer file="http://streaming.softnep.net:8005/;stream.nsv&type=mp3&volume=50" />
        ) : (
          ""
        )}
      </div>
    </Scoped>
  );
};

export default AudioPlayer;

export const MusicPlayer = ({ file }) => {
  return (
    <audio src={file} autoPlay autoStart style={{ display: "none" }}></audio>
  );
};

const css = `
& .player {
    background-color: #222222;
    color: rgb(68, 68, 68);
    display: inline-table;
    line-height: 1.5625;
    border-radius: 5px;
  }
  
 & .player-controls {
    display: flex;
  }
 & .player-controls > div {
    border-right: 1px solid rgb(160, 160, 160);
  }
 & .player-controls > div:first-child {
    border-left: 1px solid rgb(160, 160, 160);
  }
  
 & .player-controls a {
    color: rgb(68, 68, 68);
    display: block;
    line-height: 0;
    padding: 1.5rem;
    text-decoration: none;
  }
 & .player-progress {
    cursor: pointer;
    height: 100%;
    min-width: 260px;
    position: relative;
  }
 & .player-progress p {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
  }
  
 & .player-time-total {
    opacity: 0.5;
    padding-right: 5px;
  }
 & .volume-slider {
    width: 10rem;
  }
 & .volume-slider:focus {
    outline: none;
  }
  
  @media only screen and (max-width: 750px) {
   & .player-progress {
      min-width: 180px;
    }
   & .volume-slider {
      width: 8rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .player-progress {
      min-width: 150px;
    }
  }
  
  @media only screen and (max-width: 360px) {
   & .player-progress {
      min-width: 130px;
    }
   & .volume-slider {
      width: 7rem;
    }
  }
`;
