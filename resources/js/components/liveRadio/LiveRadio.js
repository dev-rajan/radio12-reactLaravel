import { Scoped } from "kremling";
import React, { useState } from "react";
import { MusicPlayer } from "../utility/AudioPlayer";
import LiveRadioModal from "./LiveRadioModal";

const LiveRadio = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isShowing === false) {
      setIsShowing(true);
    }
  };

  return (
    <Scoped css={css}>
      <div className="wrapper">
        <div className="live-radio" id="show-modal" onClick={handleClick}>
          <div className="live-radio__outer">
            <div className="live-radio__inner1">
              <span className="live-radio__logo1">Live Radio </span>
            </div>
          </div>
        </div>

        {isOpen ? (
          <MusicPlayer file="http://streaming.softnep.net:8005/;stream.nsv&type=mp3&volume=50" />
        ) : (
          ""
        )}
        {isShowing ? (
          <LiveRadioModal
            setIsOpen={setIsOpen}
            isShowing={isShowing}
            setIsShowing={setIsShowing}
          />
        ) : (
          ""
        )}
      </div>
    </Scoped>
  );
};

export default LiveRadio;

const css = `
/* live-radio */

& .live-radio {
  position: absolute;
  top: 48%;
  left: 47%;
  cursor: pointer;
}
& .live-radio__outer {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  background-color: var(--primary-color);
  box-shadow: 0 0 20px 5px #cccccc;
  background-image: var(--radio-outer-gradient);
}
& .live-radio__inner1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  box-shadow: 0 0 15px #ffffff;
  background-image: var(--radio-inner-gradient);
  transition: 0.2s;
}
& .live-radio__inner1:hover {
  box-shadow: none;
}
& .live-radio__logo1 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: var(--radio-text);
  line-height: 1.2;
}

@media only screen and (max-width: 1200px) {
  & .live-radio {
    left: 51%;
  }
}
@media only screen and (max-width: 1050px) {
  & .live-radio {
    top: 45%;
    left: 70%;
  }
}
@media only screen and (max-width: 900px) {
  & .live-radio {
    left: 70%;
    top: 50%;
  }
}
@media only screen and (max-width: 750px) {
  & .live-radio {
    left: 76%;
    top: 60%;
  }
}
@media only screen and (max-width: 500px) {
  & .live-radio {
    left: 82%;
  }
  & .live-radio__outer {
    box-shadow: 0 0 10px #cccccc;
  }
}
@media only screen and (max-width: 360px) {
  & .live-radio {
    top: 60%;
    right: 8.5rem;
  }
}

`;
