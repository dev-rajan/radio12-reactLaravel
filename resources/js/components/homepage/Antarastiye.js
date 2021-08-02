import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import SeeMore from "../utility/SeeMore";
import { BigNews } from "./Rastiye";

const Antarastiye = () => {
  return (
    <Scoped css={css}>
    <div className="news-antarastiye">
      <h3 className="highlight">अन्तराष्ट्रिय</h3>
      <div>
        {Items?.map((a, idx) => <BigNews {...a} key={idx} />).slice(0, 1)}
        <div className="popular__list">
          {Items?.map((a, idx) => <SmallNews {...a} key={idx} />).slice(1, 4)}
        </div>
      </div>
      <SeeMore />
    </div>
    </Scoped>
  );
};

export default Antarastiye;

const SmallNews = ({ title, imageUrl }) => {
  return (
    <div className="column">
      <div className="img-holder holder-hw38 margin-rt1">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div className="content width-55">
        <Link to="/single-page" className="title font-weight500">
          {title}
        </Link>
      </div>
    </div>
  );
};

const Items = [
  {
    title:
      "निर्मला हत्या: किन शंकाको घेरामा छन् बम दिदिबहिनी शुक्रबार केही सामान्य बनेको छ ?",
    content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
    imageUrl: require("../../assets/img/nath.jpg"),
  },
  {
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र शुक्रबार केही सामान्य बनेको छ ",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../assets/img/photographer.jpg"),
  },
  {
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: require("../../assets/img/mic.jpg"),
  },
  {
    title: "कञ्चनपुरका अर्का एक युवा जसलाई प्रहरीले ११ दिन थुन्यो !",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../assets/img/matheus.jpg"),
  },
];

const css = `
& .row-width100 {
    width: 100%;
  }
  & .holder-hw100 {
    height: 25rem;
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & .holder-hw38 {
    height: 8rem;
    width: 28%;
  }
  & .width-55 {
    width: 70%;
  }
  & .padding-top1 {
    padding-top: 1.5rem;
  }
  & .margin-rt1 {
    margin-right: 1.5rem;
  }
  & .title {
    font-size: 1.8rem;
  }
  & .margin-top2 {
    margin-top: 2rem;
  }
  & .padding-top1 {
    padding-top: 1.5rem;
  }
  & .margin-rt1 {
    margin-right: 2rem;
  }
  
  & .column:first-child {
    margin-top: 2rem;
  }
  & .column:last-child {
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
    & .holder-hw38 {
      width: 30%;
    }
    & .width-55 {
      width: 68%;
    }
  }
  
`;
