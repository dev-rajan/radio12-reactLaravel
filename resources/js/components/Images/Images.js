import { Scoped } from "kremling";
import React, { useState } from "react";
import LongAd from "../common/ads/LongAd";
import LongAdItem from "../common/ads/LongAdItem";
import PageSidebar from "../common/sidebar/PageSidebar";
import SinglePic from "../Modals/SinglePic";
import Breadcrumb from "../utility/Breadcrumb";
import Pagination from "../utility/Pagination";
import Tags from "../utility/Tags";

const Images = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    if (isShowing === false) {
      setIsShowing(true);
    }
  };

  return (
    <Scoped css={css}>
      <div className="page-wraper">
        {isShowing ? (
          <main>
            <div className="main-side">
              <Breadcrumb title="फोटो ग्यालरी" />
              <h3 className="highlight">फोटो ग्यालरी</h3>
              <div className="gallery">
                {Items?.map((a, idx) => <BigItem key={idx} {...a} />).slice(
                  0,
                  1
                )}

                {Items?.map((a, idx) => <SmallItem key={idx} {...a} />).slice(
                  1,
                  15
                )}
              </div>
              <Pagination />
              <LongAdItem extraStyle="width48" />
              <LongAd extraStyle="width100" />
            </div>
            <div className="right-side">
              <PageSidebar />
            </div>
          </main>
        ) : (
          <SinglePic close={handleClick} />
        )}
      </div>
    </Scoped>
  );
};

export default Images;

const BigItem = ({ imageUrl, title, tags }) => {
  return (
    <div className="card-img-wrapper card-img-wrap--hw100">
      <div className="card-img align-left">
        <img src={imageUrl.default} alt={title} className="card__backimg" />
        <p className="card-img__title card-title--font20 bottom7">{title}</p>
        <Tags title={tags} tagClass="card-img__tag bottom2" />
      </div>
    </div>
  );
};

const SmallItem = ({ imageUrl, title, tags }) => {
  return (
    <div className="card-img-wrapper card-img-wrap--hw50">
      <div className="card-img align-left">
        <img src={imageUrl.default} alt={title} className="card__backimg" />
        <p className="card-img__title card-title--font18 bottom7">{title}</p>
        <Tags title={tags} tagClass="card-img__tag bottom2" />
      </div>
    </div>
  );
};

const Items = [
  {
    title:
      "विरोधीलाई प्रधानमन्त्रीको जवाफः ‘हामी अनुशरण गर्न सक्छौं, अनुकरण गर्न सक्दैनौं ’",
    tags: "अर्थ",
    imageUrl: require("../../assets/img/girl-shoping.jpg"),
  },
  {
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "अन्तराष्ट्रिय",
    imageUrl: require("../../assets/img/ben.jpg"),
  },
  {
    title:
      "सामान्य बन्दै महेन्द्रनगरको अवस्था, प्रहरीको दमन विरुद्ध विद्यालय बन्द",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/red-carpet.jpg"),
  },
  {
    title:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/child.jpg"),
  },
  {
    title: "कञ्चनपुरका अर्का एक युवा जसलाई प्रहरीले ११ दिन थुन्यो !",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/mic.jpg"),
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/andrew.jpg"),
  },
  {
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/clem.jpg"),
  },
  {
    title:
      "विरोधीलाई प्रधानमन्त्रीको जवाफः ‘हामी अनुशरण गर्न सक्छौं, अनुकरण गर्न सक्दैनौं ",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/matheus.jpg"),
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/adrian.jpg"),
  },
  {
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/aravind.jpg"),
  },
  {
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/ben.jpg"),
  },
  {
    title:
      "विरोधीलाई प्रधानमन्त्रीको जवाफः ‘हामी अनुशरण गर्न सक्छौं, अनुकरण गर्न सक्दैनौं ’",
    tags: "अर्थ",
    imageUrl: require("../../assets/img/girl-shoping.jpg"),
  },
  {
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "अन्तराष्ट्रिय",
    imageUrl: require("../../assets/img/ben.jpg"),
  },
  {
    title:
      "सामान्य बन्दै महेन्द्रनगरको अवस्था, प्रहरीको दमन विरुद्ध विद्यालय बन्द",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/red-carpet.jpg"),
  },
  {
    title:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/child.jpg"),
  },
];

const css = `
& .card-img-wrap--hw100 {
    height: 43rem;
    width: 100%;
    margin-bottom: 2rem;
  }
 & .card-img-wrap--hw50 {
    height: 25rem;
    width: 48.85%;
    margin-bottom: 2rem;
  }
 & .card-title--font18 {
    font-size: 1.8rem;
  }
 & .card-title--font20 {
    font-size: 2rem;
  }
 & .bottom7 {
    bottom: 7rem;
  }
 & .bottom2 {
    bottom: 2rem;
  }
 & .margin-btm2 {
    margin-bottom: 2rem;
  }
 & .gallery {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0;
  }
  @media only screen and (max-width: 1050px) {
   & .card-img-wrap--hw100 {
      height: 40rem;
    }
  }
  @media only screen and (max-width: 900px) {
   & .card-img-wrap--hw100 {
      height: 35rem;
    }
   & .card-img-wrap--hw50 {
      height: 20rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .gallery {
      display: block;
    }
   & .card-img-wrap--hw50 {
      width: 100%;
      height: 23rem;
    }
  }
  
`;
