import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import SeeMore from "../utility/SeeMore";

const Rajniti = () => {
  return (
    <Scoped css={css}>
      <div className="news-rajniti">
        <h3 className="highlight">राजनीति</h3>

        <div className="news-content">
          <div className="news-content__side1">
            {Items?.map((a, idx) => <BigItem key={idx} {...a} />).slice(0, 1)}
          </div>
          <div className="news-content__side2">
            {Items.map((a, idx) => <SmallItem key={idx} {...a} />).slice(1, 5)}
          </div>
        </div>

        <SeeMore />
      </div>
    </Scoped>
  );
};

export default Rajniti;

const BigItem = ({ imageUrl, title, content }) => {
  return (
    <div className="row row-width100">
      <div className="img-holder holder-hw100">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div className="rajniti-content content w-100 align-left padding-top1">
        <Link to="/single-page" className="title font-size18 margin1">
          {title}
        </Link>
        <Link to="/single-page" className="card__desc1 line-height">
          {content}
        </Link>
      </div>
    </div>
  );
};

const SmallItem = ({ imageUrl, title, content }) => {
  return (
    <div className="column margin-btm3">
      <div className="img-holder holder-hw13 margin-right1">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div className="content width70">
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
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../assets/img/brooke.jpg"),
  },
  {
    title: "पानीजहाजको लोभ मा यसरी फकाउन सक्छ.",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    imageUrl: require("../../assets/img/hijab.jpg"),
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../assets/img/farsai.jpg"),
  },
  {
    title: "निर्मला हत्या प्रकरणः आफन्त जोगाउन मोडियो घट्ना",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/mic.jpg"),
  },
  {
    title: "निर्मला हत्या: किन शंकाको घेरामा छन् बम दिदिबहिनी",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/led1.jpg"),
  },
];

const css = `
& .rajniti-content{
  height: 100%;
}
& .w-100{
    width: 100% !important;
}
& .news-content {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  & .news-content__side1 {
    width: 45%;
  }
  & .news-content__side2 {
    width: 51%;
  }
  & .row-width100 {
    width: 100%;
  }
  & .holder-hw100 {
    height: 28rem;
    width: 100%;
  }
  & .holder-hw13 {
    height: 10rem;
    width: 28%;
  }
  & .width70 {
    width: 70%;
    margin-left: 1.5rem;
  }
  & .font-size18 {
    font-size: 1.8rem;
    font-weight: 700;
  }
  & .margin1 {
    margin: 1.5rem 0;
  }
  & .margin-btm3 {
    margin-bottom: 3.5rem;
  }
  & .margin-btm3:last-child {
    margin-bottom: 0;
  }
  & .line-height {
    line-height: 1.6;
  }
  @media only screen and (max-width: 1050px) {
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
  @media only screen and (max-width: 500px) {
    & .news-content__side1 {
      width: 100%;
    }
    & .news-content__side2 {
      width: 100%;
      margin-top: 4rem;
    }
  }
`;
