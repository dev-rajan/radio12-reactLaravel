import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import SeeMore from "../utility/SeeMore";

const Khel = () => {
  return (
    <Scoped css={css}>
    <div className="news-rajniti">
      <h3 className="highlight">खेलकुद</h3>

      <div className="news-content">
        {/* <!-- card with background images --> */}
        {Items?.map((a, idx) => (
          <div className="card-img-wrapper card-img-wrap--hw50" key={idx}>
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

        {Items?.map((a, idx) => <SmallItem {...a} key={idx} />).slice(1, 7)}
      </div>
      <SeeMore />
    </div>
    </Scoped>
  );
};

export default Khel;

const SmallItem = ({ imageUrl, title }) => {
  return (
    <div className="row row-width25">
      <div className="img-holder khel-holder-hw100">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div className="khel-content align-center padding-top1">
        <Link to="/single-page" className="title">
          {title}
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
    imageUrl: require("../../assets/img/photographer.jpg"),
  },
  {
    title: "पानीजहाजको लोभ मा यसरी फकाउन सक्छ",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    imageUrl: require("../../assets/img/ionut.jpg"),
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई मोडियो घट्ना",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../assets/img/farsai.jpg"),
  },
  {
    title: "विश्वविद्यालयमा सिस्टम ह्याकः दुई कर्मचारी निलम्बित",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/clem.jpg"),
  },
  {
    title: "प्रधानमन्त्रीले भने- न्यायालयका बारेमा म एउटाले नबोलेर के हुन्छ?",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/brooke.jpg"),
  },
  {
    title:
      "निर्मला हत्या प्रकरणः आफन्त जोगाउन मोडियो घट्ना ! 'राहत होइन, दोषी पत्ता",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/mic.jpg"),
  },
  {
    title: "निर्मला हत्या: किन शंकाको घेरामा छन् बम दिदिबहिनी ?",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/photographer.jpg"),
  },
];

const css = `
& .news-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  & .khel-content{
      width: 100%;
  }
  & .card-img-wrap--hw50 {
    height: 25rem;
    width: 48%;
  }
  
  & .card-title--font20 {
    font-size: 2rem;
  }
  & .bottom2 {
    bottom: 2rem;
  }
  & .row-width25 {
    width: 23%;
  }
  & .row-width25:nth-child(n + 4) {
    margin-top: 2.5rem;
  }
  & .khel-holder-hw100 {
    height: 15rem;
    width: 100%;
  }
  & .title {
    font-size: 1.8rem;
    font-weight: 700;
  }
  @media only screen and (max-width: 900px) {
    & .card-img-wrap--hw50 {
      height: 30rem;
      width: 100%;
    }
    & .row-width25 {
      width: 48%;
    }
    & .row-width25:nth-child(n) {
      margin-top: 2rem;
    }
    & .khel-holder-hw100 {
      height: 18rem;
    }
    & .title {
      font-size: 1.9rem;
    }
    & .card-title--font20 {
      font-size: 2.2rem;
    }
  }
  @media only screen and (max-width: 500px) {
    & .news-content {
      display: block;
    }
    & .row-width25 {
      width: 100%;
    }
  }
  
`;
