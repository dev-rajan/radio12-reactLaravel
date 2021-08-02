import { Scoped } from "kremling";
import React from "react";
import LongAd from "./LongAd";

const LongAdItem = ({ extraStyle }) => {
  return (
    <Scoped css={css}>
      <div className="long-ad-item">
        <LongAd extraStyle={extraStyle} />
        <LongAd extraStyle={extraStyle} />
      </div>
    </Scoped>
  );
};

export default LongAdItem;

const css = `
& .long-ad-item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 3rem 0;
}
@media only screen and (max-width: 1050px) {
    & .long-ad-item{
        display: block;
    }
}
@media only screen and (max-width: 750px) {
    & .long-ad-item{
        margin: 2.5rem 0;
    }
}
`;
