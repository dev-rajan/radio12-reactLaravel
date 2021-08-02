import React from "react";
import Antarastiye from "./Antarastiye";
import Entertainment from "./Entertainment";
import Khel from "./Khel";
import PicGallery from "./PicGallery";
import Rajniti from "./Rajniti";
import Samaj from "./Samaj";
import VideoGallery from "./VideoGallery";
import LongAd from "../common/ads/LongAd";
import LongAdItem from "../common/ads/LongAdItem";
import Breaking from "./Breaking";
import Trending from "./Trending";
import Slider from "./Slider";
import Tags from "../utility/Tags";
import { Link } from "react-router-dom";
import { Scoped } from "kremling";
import Rastiye from "./Rastiye";
import Sidebar from "../common/sidebar/Sidebar";

const HomePage = () => {
  return (
    <Scoped css={css}>
      <div className="page-wraper">
        {/* <!-- <Loading/> --> */}
        <LongAdItem extraStyle="width48" />

        <Breaking />

        <LongAdItem extraStyle="width48" />

        <Trending />

        <main>
          <div className="main-side">
            <Slider />

            <LongAdItem extraStyle="width48" />

            <div className="main-news">
              <h3 className="highlight">ताजा समाचार</h3>
              <div className="news-wraper">
                {TajaNews?.map((a, idx) => (
                  <NewsItem key={idx} {...a} />
                ))}
              </div>
            </div>

            <LongAdItem extraStyle="width48" />

            <Samaj />

            <LongAd extraStyle="width100" />

            <div className="SideBySide">
              <div className="SideBySide1">
                <Rastiye />
              </div>
              <div className="SideBySide2">
                <Antarastiye />
              </div>
            </div>

            <LongAd extraStyle="width100" />

            <Rajniti />

            <LongAdItem extraStyle="width48" />

            <Khel />

            <LongAdItem extraStyle="width48" />

            <Entertainment />

            <LongAdItem extraStyle="width48" />

            <PicGallery />

            <LongAdItem extraStyle="width48" />

            <VideoGallery />
          </div>
          <div className="right-side">
            <Sidebar />
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default HomePage;

const NewsItem = ({ title, tags, imageUrl }) => {
  return (
    <div className="card card-img-content-v card--width50 align-left padding0">
      <div className="card__imgHolder img-width33 h-img">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="card__img" />
        </Link>
      </div>
      <div className="card__content h-content padding1">
        <Tags title={tags} />
        <Link to="/single-page" className="card__title card-title--font17">
          {title}
        </Link>
      </div>
    </div>
  );
};

const TajaNews = [
  {
    title:
      "निर्मला हत्या प्रकरणः आफन्त जोगाउन मोडियो घट्ना ! 'राहत होइन, दोषी पत्ता लगाउ'",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    tags: "खेलकुद",
    imageUrl: require("../../assets/img/annie.jpg"),
  },
  {
    title:
      "सामान्य बन्दै महेन्द्रनगरको अवस्था, प्रहरीको दमन विरुद्ध विद्यालय बन्द",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    tags: "अन्तराष्ट्रिय",
    imageUrl: require("../../assets/img/photographer.jpg"),
  },
  {
    title: "कञ्चनपुरका अर्का एक युवा जसलाई प्रहरीले ११ दिन थुन्यो !",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    tags: "मनोरञ्जन",
    imageUrl: require("../../assets/img/matheus.jpg"),
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन",
    content:
      "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको प्रावधानले सञ्चार क्षेत्रलाई झनै कसिलो बनाउन खोजेको छ ।",
    tags: "अर्थ",
    imageUrl: require("../../assets/img/ben.jpg"),
  },
  {
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र ",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/ionut.jpg"),
  },
  {
    title: "खाद्यको पहुँचबाट वञ्चित गराएमा १० वर्षसम्म कैद हुन सक्छ",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    tags: "समाज",
    imageUrl: require("../../assets/img/hijab.jpg"),
  },
];

const css = `
& .card:nth-child(n + 4) {
    margin-bottom: 0;
  }
  & .card-img__tag {
    position: absolute;
    bottom: 1.5rem;
    margin-left: 2.5rem;
    z-index: 2;
  }
  & .card__imgHolder::before {
    height: 0;
    width: 0;
  }
  
  & .main-news {
    margin-top: 4rem;
  }
  & .news-wraper {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  & .card:hover .card__img {
    transform: scale(1.2);
  }
  & .card--width50 {
    width: 30.5%;
  }
  & .img-width33 {
    height: 60%;
    width: 100%;
  }
  & .h-content{
    margin-left: 0 !important;
  }
  & .h-img{
      height: 60% !important;
  }
  & .padding1 {
    padding: 0 1rem;
  }
  & .card-title--font17 {
    font-size: 1.8rem;
    margin-top: 0.5rem;
  }
  & .card__title:hover {
    color: var(--primary-color);
  }
  & .SideBySide {
    display: flex;
    justify-content: space-between;
  }
  & .SideBySide1 {
    width: 48%;
  }
  & .SideBySide2 {
    width: 48%;
  }

  & .width100{
    margin: 3rem 0;
  }
  @media only screen and (max-width: 1050px) {
    & .card--width50 {
      width: 47%;
    }
    & .card-title--font17 {
      font-size: 1.9rem;
    }
  }
  @media only screen and (max-width: 900px) {
    & .card--width50 {
      width: 47.7%;
    }
    & .SideBySide {
      display: block;
    }
    & .SideBySide1 {
      width: 90%;
    }
    & .SideBySide2 {
      width: 90%;
      margin-top: 2rem;
    }
  }
  @media only screen and (max-width: 500px) {
    & .card--width50 {
      width: 100%;
    }
    & .card:nth-child(n) {
      margin-bottom: 2rem;
    }
    & .card:last-child {
      margin-bottom: 0;
    }
    & .rastiye {
      width: 100%;
    }
    & .antarastiye {
      width: 100%;
      margin-top: 2rem;
    }
  }
  
`;
