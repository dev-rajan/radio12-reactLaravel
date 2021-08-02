import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";

const Related = ({Items}) => {
  return (
    <Scoped css={css}>
      <div className="related">
        <h3 className="highlight">Related News</h3>

        <div className="related__list">
          {Items?.map((a, idx) => (
            <RelatedItems {...a} key={idx} />
          ))}
        </div>
      </div>
    </Scoped>
  );
};

export default Related;

const RelatedItems = ({ imageUrl, title }) => {
  return (
    <div className="row row-width25 margin-btm3">
      <div className="img-holder holder-hw25">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div className="content align-left padding-top1">
        <Link to="/single-page" className="title">
          {title}
        </Link>
      </div>
    </div>
  );
};

const css = `
& .margin-btm3 {
    margin-bottom: 3rem;
  }
 & .holder-hw25 {
    height: 18rem;
    width: 100%;
  }
 & .row-width25 {
    width: 31%;
  }
 & .related {
    margin-top: 4rem;
  }
 & .related__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 500px) {
   & .row-width25 {
      width: 18rem;
    }
   & .holder-hw25 {
      height: 13rem;
    }
   & .related__list {
      justify-content: space-around;
    }
  }
  @media only screen and (max-width: 360px) {
   & .row-width25 {
      width: 100%;
    }
  }
  
`;
