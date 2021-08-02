import { Scoped } from "kremling";
import React from "react";
import welcome from "../../../assets/img/welcome.jpg";

const SquareAd = () => {
  return (
    <Scoped css={css}>
      <div className="card__ad">
        <img src={welcome} alt="" className="ad-card-img" />
      </div>
    </Scoped>
  );
};

export default SquareAd;

const css = `
& .card__ad {
    height: 20rem;
    width: 100%;
    background-color: rgb(153, 141, 126);
    text-align: center;
    opacity: 0.8;
    margin-bottom: 4rem;
  }
  & .ad-card-img {
    width: 100%;
    height: 100%;
  }
  & .card__ad p {
    color: white;
    padding-top: 2rem;
  }
`;
