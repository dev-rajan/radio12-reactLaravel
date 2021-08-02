import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import SeeMore from "../utility/SeeMore";

const Samaj = () => {
  return (
    <Scoped css={css}>
    <div className="news-samaj">
      <h3 className="highlight">समाज</h3>

      {/* <!-- Tab content --> */}
      <div className="news-content">
        <div className="news-content__side1">
          {/* <!-- card with background images --> */}
          {Items?.map((a, idx) => (
            <div className="card-img-wrapper card-img-wrap--hw43" key={idx}>
              <Link to="/single-page">
                <div className="card-img align-left">
                  <img
                    src={a.imageUrl.default}
                    alt={a.title}
                    className="card__backimg"
                  />
                  <p className="card-img__title card-title--font20 bottom2">
                    {a.title}
                  </p>
                </div>
              </Link>
            </div>
          )).slice(0, 1)}
          {/* <!-- News List--> */}
          <div className="list-content">
            <ul className="list-content__list">
              {Items?.map((a, idx) => <SamajTitle key={idx} {...a} />).slice(
                1,
                3
              )}
            </ul>
          </div>
        </div>
        <div className="news-content__side2">
          {Items?.map((a, idx) => <SideItem key={idx} {...a} />).slice(3, 6)}
        </div>
      </div>
      <SeeMore />
    </div>
    </Scoped>
  );
};

export default Samaj;

const SamajTitle = ({ title }) => {
  return (
    <li className="list-content__content margin-btm2">
      <div className="list-style">
        <i className="pointer"></i>
      </div>
      <Link to="/single-page" className="list-content__link" href="#">
        {title}
      </Link>
    </li>
  );
};

const SideItem = ({ imageUrl, title, content }) => {
  return (
    <div className="column margin-btm3">
      <div className="img-holder holder-hw13 margin-right1">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div className="content">
        <Link to="/single-page" className="title font-size18">
          {title}
        </Link>
        <Link to="/single-page" className="card__desc1">
          {content}
        </Link>
      </div>
    </div>
  );
};

const Items = [
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन",
    content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
    imageUrl: require("../../assets/img/ben.jpg"),
  },
  {
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र अवस्था शुक्रबार केही सामान्य बनेको छ",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../assets/img/photographer.jpg"),
  },
  {
    title: "नेपाल तेस्रो खेलमा ५ विकेटले विजयी",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: "",
  },
  {
    title:
      "ब्रिलियन्ट बेल : पछि परेको स्थिति उल्टाउँदै रियल विजयी नेपाली क्रिकेट टोली मलेसियातर्फ",
    content:
      "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: require("../../assets/img/matheus.jpg"),
  },
  {
    title: "नेपाली क्रिकेट टोली मलेसियातर्फ",
    content:
      "प्रावधानले सञ्चार क्षेत्रलाई झनै कसिलो बनाउन खोजेको छ पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: require("../../assets/img/ionut.jpg"),
  },
  {
    title: "कांग्रेसले राख्यो सरकारसँग ९ बुँदे माग",
    content:
      "व्यवस्था गर्न बनेको विधेयकको प्रावधानले सञ्चार क्षेत्र छ पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: require("../../assets/img/hijab.jpg"),
  },
];

const css = `
/* -----secondary css ---*/

& .card-img-wrap--hw43 {
  height: 27rem;
  width: 100%;
}
& .card-title--font20 {
  font-size: 2rem;
}
& .bottom2 {
  bottom: 2rem;
}
& .column-width48 {
  width: 13rem;
}
& .holder-hw13 {
  height: 10rem;
  width: 28%;
}
/* -----main css----*/
& .news-samaj {
  width: 100%;
  margin-top: 4rem;
}
& .news-content {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
& .news-content__side1 {
  width: 48%;
}
& .news-content__side2 {
  width: 48%;
}
& .list-content {
  width: 100%;
  margin-top: 2rem;
}
& .list-content__list {
}
& .list-content__content {
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: flex-start;
}
& .list-style {
  flex: 5%;
}
& .list-content__link {
  flex: 95%;
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--title-text-color);
  text-decoration: none;
}
& .list-content__link:hover {
  color: var(--primary-color);
}

& .content {
  width: 70%;
}
& .margin-btm2 {
  margin-bottom: 1.5rem;
}
& .margin-btm2:last-child {
  margin-bottom: 0;
}
& .margin-btm3 {
  margin-bottom: 3.5rem;
}
& .margin-btm3:last-child {
  margin-bottom: 0;
}
& .margin-right1 {
  margin-right: 1.5rem;
}
& .font-size18 {
  font-size: 1.8rem;
  font-weight: 700 !important;
}
& .down-arrow {
  font-size: 1.7rem;
}

@media only screen and (max-width: 1200px) {
  & .card-img-wrap--hw43 {
    height: 20rem;
  }
  & .news-content__side1 {
    width: 45%;
  }
  & .news-content__side2 {
    width: 51%;
  }
  & .margin-btm3 {
    margin-bottom: 3rem;
  }
}
@media only screen and (max-width: 1050px) {
  & .news-content {
    display: block;
  }
  & .card-img-wrap--hw43 {
    height: 30rem;
  }
  & .news-content__side1 {
    width: 90%;
  }
  & .news-content__side2 {
    width: 90%;
    margin-top: 4rem;
  }
  & .card__desc1 {
    font-size: 1.7rem;
  }
  & .font-size18 {
    font-size: 1.9rem;
  }
}
@media only screen and (max-width: 900px) {
  & .font-size18 {
    font-size: 1.9rem;
  }
}
@media only screen and (max-width: 750px) {
  & .news-content__side1 {
    width: 100%;
  }
  & .news-content__side2 {
    width: 100%;
    margin-top: 4rem;
  }
  & .card__desc1 {
    font-size: 1.9rem;
  }
  & .list-content__link {
    font-size: 2rem;
  }
}
@media only screen and (max-width: 360px) {
  & .column {
    align-items: center;
  }
  & .card__desc1 {
    display: none;
  }
}

`;
