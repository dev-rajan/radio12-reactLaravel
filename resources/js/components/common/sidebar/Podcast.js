import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";

const Podcast = () => {
  return (
    <Scoped css={css}>
      <div className="podcast">
        <div className="card">
          <h3 className="highlight">Latest Podcast</h3>
          <div className="podcast__list">
            {Items?.map((a, idx) => (
              <PodItem key={idx} {...a} />
            ))}
          </div>
        </div>
      </div>
    </Scoped>
  );
};

export default Podcast;

const PodItem = ({ imageUrl, title }) => {
  return (
    <div className="column align-item-center">
      <div className="img-holder holder-hw38 margin-rt1">
        <Link to="/podcast-detail" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div className="content width-55">
        <Link to="/podcast-detail" className="title font-weight500">
          {title}
        </Link>
      </div>
    </div>
  );
};

const Items = [
  {
    title: "निर्मला हत्या: किन?",
    content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
    imageUrl: require("../../../assets/img/adrian.jpg"),
  },
  {
    title: "विमस्टेकका सबै राष्ट्रसँग नेपाल",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../../assets/img/photographer.jpg"),
  },
  {
    title: "म्यान्मारको सेनाले नरसंहार गरेको छ",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: require("../../../assets/img/matheus.jpg"),
  },
  {
    title: "अनावश्यक कर नलगाउ",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../../assets/img/girl-shoping.jpg"),
  },
  {
    title: "प्रधानमन्त्रीले भने-न्यायालयका",
    content: "प्रावधानले सञ्चार क्षेत्रलाई झनै कसिलो बनाउन खोजेको छ..",
    imageUrl: require("../../../assets/img/ionut.jpg"),
  },
  {
    title: "कांग्रेसले राख्यो सरकार",
    content: "व्यवस्था गर्न बनेको विधेयकको प्रावधानले सञ्चार क्षेत्र छ..",
    imageUrl: require("../../../assets/img/hijab.jpg"),
  },
];

const css = `
& .holder-hw38 {
    height: 8rem;
    width: 38%;
  }
 & .width-55 {
    width: 55%;
  }
 & .align-item-center {
    align-items: center;
  }
 & .margin-rt1 {
    margin-right: 1.5rem;
  }
 & .podcast__list {
    margin-top: 1rem;
  }
 & .font-weight500 {
    font-weight: 500;
  }
 & .column:last-child {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 900px) {
   & .column {
      display: block;
    }
   & .holder-hw38 {
      height: 8rem;
      width: 60%;
      margin: auto;
    }
   & .width-55 {
      width: 100%;
      margin-top: 1rem;
      text-align: center;
    }
  }
  @media only screen and (max-width: 750px) {
   & .card {
      padding: 2.5rem 10rem;
    }
   & .column {
      display: flex;
    }
   & .width-55 {
      text-align: left;
      margin-left: 2rem;
    }
   & .holder-hw38 {
      height: 10rem;
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
