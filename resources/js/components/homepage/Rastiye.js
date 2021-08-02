import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import SeeMore from "../utility/SeeMore";

const Rastiye = () => {
  return (
    <Scoped css={css}>
    <div className="news-rastiye">
      <h3 className="highlight">राष्ट्रिय</h3>
      <div>
        {Items?.map((a, idx) => <BigNews key={idx} {...a} />).slice(0, 1)}

        <div className="latest-list">
          <ul className="list-content__list">
            {Items?.map((a, idx) => <ListTitle {...a} key={idx} />).slice(1, 6)}
          </ul>
        </div>
      </div>
      <SeeMore />
    </div>
    </Scoped>
  );
};

export default Rastiye;

export const BigNews = ({ imageUrl, title }) => {
  return (
    <div className="row row-width100 margin-btm2 margin-top2">
      <div className="img-holder holder-hw100">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div className="contents align-left content--shadow padding-top1">
        <Link to="/single-page" className="title">
          {title}
        </Link>
      </div>
    </div>
  );
};

const ListTitle = ({ title }) => {
  return (
    <li className="list-content__content mb-1">
      <div className="list-style">
        <i className="pointer"></i>
      </div>
      <a className="list-content__link" href="#">
        {title}
      </a>
    </li>
  );
};

const Items = [
  {
    title:
      "विश्वविद्यालयमा सिस्टम ह्याकः दुई कर्मचारी निलम्बित  उद्योगमा लगानी प्रतिबद्धता  शुक्रबार केही सामान्य बनेको छ ।",
    content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
    imageUrl: require("../../assets/img/ionut.jpg"),
  },
  {
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र शुक्रबार केही सामान्य बनेको छ ।",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../assets/img/photographer.jpg"),
  },
  {
    title:
      "म्यान्मारको सेनाले नरसंहार गरेको छः संयुक्त राष्ट्र ई देशको मात्र शुक्रबार केही सामान्य बनेको छ ।",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: "",
  },
  {
    title:
      "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन ई देशको मात्र शुक्रबार केही सामान्य बनेको छ ।",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../assets/img/matheus.jpg"),
  },
  {
    title: "प्रधानमन्त्रीले भने-न्यायालयका बारेमा म एउटाले नब",
    content: "प्रावधानले सञ्चार क्षेत्रलाई झनै कसिलो बनाउन खोजेको छ..",
    imageUrl: require("../../assets/img/ionut.jpg"),
  },
  {
    title: "कांग्रेसले राख्यो सरकारसँग ९ बुँदे माग",
    content: "व्यवस्था गर्न बनेको विधेयकको प्रावधानले सञ्चार क्षेत्र छ..",
    imageUrl: require("../../assets/img/hijab.jpg"),
  },
];

const css = `
& .mb-1{
    margin-bottom: 2rem !important;
}
& .row-width100 {
    width: 100%;
  }
  & .holder-hw100 {
    height: 25rem;
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & .padding-top1 {
    padding-top: 1.5rem;
  }
  & .latest-list {
    margin-top: 2rem;
  }
  & .list-content__list {
    list-style-type: none;
  }
  & .list-content__content {
    margin-bottom: 3rem;
    display: flex;
    justify-content: flex-start;
  }
  & .list-content__content:last-child {
    margin-bottom: 1rem;
  }
  & .list-style {
    flex: 5%;
  }
  & .list-content__link {
    flex: 95%;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--title-text-color);
    text-decoration: none;
  }
  & .list-content__link:hover {
    color: var(--primary-color);
  }
  & .margin-top2 {
    margin-top: 2rem;
  }
  & .title {
    font-size: 1.8rem !important;
  }
  & .contents a{
      font-weight: 700;
      margin-bottom: 0;
  }
  & .content--shadow {
    box-shadow: 0 2px 5px #aaa;
    padding: 1.5rem 1rem;
  }
  @media only screen and (max-width: 900px) {
    & .holder-hw100 {
      height: 30rem;
    }
    & .title {
      font-size: 1.9rem;
    }
    & .list-content__link {
      font-size: 1.9rem;
    }
  }
  
`;
