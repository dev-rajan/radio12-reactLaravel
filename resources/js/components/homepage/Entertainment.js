import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import SeeMore from "../utility/SeeMore";

const Entertainment = () => {
  return (
    <Scoped css={css}>
      <div className="entertainment">
        <h3 className="highlight">मनोरञ्जन</h3>
        <div className="over-cards">
          {Items?.map((a, idx) => (
            <Manoranjan {...a} key={idx} />
          ))}
        </div>
        <SeeMore />
      </div>
    </Scoped>
  );
};

export default Entertainment;

const Manoranjan = ({ title, imageUrl }) => {
  return (
    <div className="row row-width30 marginbtn3">
      <div className="img-holder holder-hw30">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div
        className="
            content
            align-center
            content--width80 content--shadow
            margintop--minus
          "
      >
        <Link
          to="/single-page"
          className="title manoranjan-title font-size19 font-weight500"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

const Items = [
  {
    title: "साठी बर्ष नपुगे पनि विधवा भत्ता",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../assets/img/portrait.jpg"),
  },
  {
    title: "पानीजहाजको लोभ मा यसरी फकाउन सक्छ उद्योगमा लगानी प्रतिबद्धता ",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    imageUrl: require("../../assets/img/brooke.jpg"),
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../assets/img/andrew.jpg"),
  },
  {
    title: "निर्मला हत्या: किन शंकाको घेरामा छन् बम दिदिबहिनी ?",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/clem.jpg"),
  },
  {
    title: "प्रधानमन्त्रीले भने- न्यायालयका बारेमा म एउटाले नबोलेर के हुन्छ?",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/adrian.jpg"),
  },
  {
    title:
      "निर्मला हत्या प्रकरणः आफन्त जोगाउन मोडियो घट्ना ! 'राहत होइन, दोषी पत्ता",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/child.jpg"),
  },
];

const css = `
& .row-width30 {
    width: 33.33%;
  }
  & .font-size19 {
    font-size: 1.9rem;
  }
  & .font-weight500 {
    font-weight: 500;
  }
  & .over-cards {
    margin-top: 2rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  & .holder-hw30 {
    width: 100%;
    height: 32rem;
  }
  
  & .entertainment {
    margin-top: 4rem;
  }
  & .row & .img-holder {
    border-radius: 0;
  }
  & .row:nth-child(3n + 1) & .img-holder {
    border-radius: 7px 0 0 7px;
  }
  & .row:nth-child(3n + 3) & .img-holder {
    border-radius: 0 7px 7px 0;
  }
  & .content {
    position: relative;
    background-color: #ffffff;
    height: 12rem;
    border-radius: 7px;
    padding: 1rem 0;
    overflow: hidden;
  }
  & .manoranjan-title {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #666666;
  }
  & .content--shadow {
    box-shadow: 0 2px 10px #999999;
  }
  & .content--width80 {
    width: 95%;
    margin: auto;
  }
  & .margintop--minus {
    margin-top: -8rem;
  }
  & .marginbtn3 {
    margin-bottom: 3rem;
  }
  & .marginbtn3:nth-child(n + 4) {
    margin-bottom: 0;
  }
  
  @media only screen and (max-width: 1050px) {
    & .row-width30 {
      width: 50%;
    }
    & .row:nth-child(2n + 1) & .img-holder {
      border-radius: 7px 0 0 7px;
    }
    & .row:nth-child(2n + 2) & .img-holder {
      border-radius: 0 7px 7px 0;
    }
  }
  @media only screen and (max-width: 750px) {
    & .row-width30 {
      width: 100%;
    }
    & .row:nth-child(1n + 1) .img-holder {
      border-radius: 7px;
    }
    & .font-size19 {
      font-size: 2.2rem;
    }
    & .marginbtn3:nth-child(n + 4) {
      margin-bottom: 3rem;
    }
    & .marginbtn3:last-child {
      margin-bottom: 0;
    }
  }
  
`;
