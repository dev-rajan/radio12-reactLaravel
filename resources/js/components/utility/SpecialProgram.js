import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";

const SpecialProgram = () => {
  return (
    <Scoped css={css}>
      <div className="special-prog">
        <h3 className="highlight">Special Programme</h3>

        <div className="special-prog__list">
          {Items?.map((a, idx) => (
            <ProgramList key={idx} {...a} />
          ))}
        </div>
      </div>
    </Scoped>
  );
};

export default SpecialProgram;

const ProgramList = ({ imageUrl, title }) => {
  return (
    <div className="card-img-wrapper card-img-wrap--hw43 margin-btm3">
      <Link to="/programme-detail">
        <div className="card-img">
          <img src={imageUrl.default} alt={title} className="card__backimg" />
          <p className="card-img__title card-title--font18">{title}</p>
        </div>
      </Link>
    </div>
  );
};

const Items = [
  {
    title: "Sathi Sanga Maan Ka Kura",
    imageUrl: require("../../assets/img/adrian.jpg"),
  },
  {
    title: "Ujjyalo News",
    imageUrl: require("../../assets/img/brooke.jpg"),
  },
  {
    title: "Geet Mala",
    imageUrl: require("../../assets/img/child.jpg"),
  },
  {
    title: "Ukkali Oorali",
    imageUrl: require("../../assets/img/matheus.jpg"),
  },
  {
    title: "Sangeet Sarobar",
    imageUrl: require("../../assets/img/dayne.jpg"),
  },
  {
    title: "Kathmandu News",
    imageUrl: require("../../assets/img/farsai.jpg"),
  },
  {
    title: "Sathi Sanga Maan Ka Kura",
    imageUrl: require("../../assets/img/ben.jpg"),
  },
  {
    title: "Ujjyalo News",
    imageUrl: require("../../assets/img/facebook.jpg"),
  },
  {
    title: "Geet Mala",
    imageUrl: require("../../assets/img/ionut.jpg"),
  },
];

const css = `
& .margin-btm3 {
    margin-bottom: 3rem;
  }
 & .card-title--font18 {
    font-size: 1.8rem;
  }
  
 & .card-img__title {
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
 & .card-img-wrap--hw43 {
    height: 10rem;
    width: 31%;
  }
 & .special-prog {
    margin-top: 4rem;
  }
 & .special-prog__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 500px) {
   & .card-img-wrap--hw43 {
      width: 19rem;
      height: 8rem;
    }
   & .special-prog__list {
      justify-content: space-around;
    }
  }
  @media only screen and (max-width: 360px) {
   & .card-img-wrap--hw43 {
      width: 100%;
    }
  }
  
`;
