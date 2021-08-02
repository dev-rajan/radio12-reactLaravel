import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import Tags from "../../utility/Tags";

const Latest = () => {
  return (
    <Scoped css={css}>
      <div className="latest">
        <div className="card">
          <h3 className="highlight">Latest News</h3>

          <div className="row row-width100 margin-btm2 margin-top1">
            {Items?.map((a, idx) => <BigItem key={idx} {...a} />).slice(0, 1)}
          </div>

          <div className="latest-list">
            <ul className="list-content__list">
              {Items?.map((a, idx) => <SmallItem {...a} key={idx} />).slice(
                1,
                6
              )}
            </ul>
          </div>
        </div>
      </div>
    </Scoped>
  );
};

export default Latest;

const BigItem = ({ imageUrl, title, tags }) => {
  return (
    <>
      <div className="img-holder holder-hw100">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
        <Tags title={tags} tagClass="card-img__tag" />
      </div>
      <div className="content align-left padding-top1">
        <Link to="/single-page" className="title font-weight7">
          {title}
        </Link>
      </div>
    </>
  );
};

const SmallItem = ({ title }) => {
  return (
    <li className="list-content__content">
      <div className="list-style">
        <i className="pointer"></i>
      </div>
      <Link
        to="/single-page"
        className="list-content__link font-size17"
        href="#"
      >
        {title}
      </Link>
    </li>
  );
};

const Items = [
  {
    title: "निर्मला हत्या: किन शंकाको घेरामा छन् बम दिदिबहिनी ?",
    content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
    imageUrl: require("../../../assets/img/girl-shoping.jpg"),
    tags: "राष्ट्रिय",
  },
  {
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र सामान्य बनेको छ ।",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../../assets/img/photographer.jpg"),
    tags: "राष्ट्रिय",
  },
  {
    title: "म्यान्मारको सेनाले नरसंहार गरेको छः संयुक्त राष्ट्र",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: "",
    tags: "राष्ट्रिय",
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../../assets/img/matheus.jpg"),
    tags: "राष्ट्रिय",
  },
  {
    title: "प्रधानमन्त्रीले भने-न्यायालयका बारेमा म एउटाले नब",
    content: "प्रावधानले सञ्चार क्षेत्रलाई झनै कसिलो बनाउन खोजेको छ..",
    imageUrl: require("../../../assets/img/ionut.jpg"),
    tags: "राष्ट्रिय",
  },
  {
    title: "कांग्रेसले राख्यो सरकारसँग ९ बुँदे माग",
    content: "व्यवस्था गर्न बनेको विधेयकको प्रावधानले सञ्चार क्षेत्र छ..",
    imageUrl: require("../../../assets/img/hijab.jpg"),
    tags: "राष्ट्रिय",
  },
];

const css = `
& .row-width100 {
    width: 100%;
  }
 & .holder-hw100 {
    height: 16rem;
    width: 100%;
  }
 & .holder-hw38 {
    height: 8rem;
    width: 38%;
  }
 & .margin-rt1 {
    margin-right: 1.5rem;
  }
 & .pointer {
    display: inline-block;
    margin-right: 1rem;
    margin-top: 0.4rem;
    height: 1.4rem;
  }
 & .height-10 {
    height: 1rem;
  }
 & .latest-list {
    margin-top: 1rem;
  }
 & .list-content__list {
    list-style-type: none;
  }
 & .list-content__content {
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
  }
 & .list-content__content:last-child {
    margin-bottom: 1rem;
  }
 & .list-style {
    flex: 5%;
  }
 & .pointer {
    width: 1.1rem;
    height: 1.1rem;
  }
 & .list-content__link {
    flex: 95%;
    font-size: 2rem;
    font-weight: 500;
    color: var(--title-text-color);
    text-decoration: none;
  }
 & .font-weight7 {
    font-weight: 700;
    font-size: 1.7rem;
  }
 & .font-size17 {
    font-size: 1.7rem;
  }
 & .list-content__link:hover {
    color: var(--primary-color);
  }
  
  @media only screen and (max-width: 1200px) {
   & .holder-hw100 {
      height: 14rem;
    }
  }
  @media only screen and (max-width: 750px) {
   & .card {
      padding: 2.5rem 10rem;
    }
   & .holder-hw100 {
      height: 20rem;
    }
   & .font-size17 {
      font-size: 2rem;
    }
   & .title {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .card {
      padding: 2.5rem;
    }
  }
  
`;
