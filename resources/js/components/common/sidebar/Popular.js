import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import Tags from "../../utility/Tags";

const Popular = () => {
  return (
    <Scoped css={css}>
      <div className="popular">
        <div className="card">
          <h3 className="highlight">Popular News</h3>

          {Items?.map((a, idx) => <BigItem key={idx} {...a} />).slice(0, 1)}

          <div className="popular__list">
            {Items?.map((a, idx) => <SmallItem key={idx} {...a} />).slice(1, 6)}
          </div>
        </div>
      </div>
    </Scoped>
  );
};

export default Popular;

const BigItem = ({ imageUrl, tags, title }) => {
  return (
    <div className="row row-width100 margin-btm2 margin-top1">
      <div className="img-holder holder-hw100">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
        <Tags title={tags} tagclassName="card-img__tag" />
      </div>
      <div className="content align-left padding-top1">
        <Link to="/single-page" className="title">
          {title}
        </Link>
      </div>
    </div>
  );
};

const SmallItem = ({ title, imageUrl }) => {
  return (
    <div className="column align-item-center">
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
    title: "विश्वविद्यालयमा सिस्टम ह्याकः दुई कर्मचारी निलम्बित",
    content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
    imageUrl: require("../../../assets/img/child.jpg"),
    tags: "अन्तराष्ट्रिय",
  },
  {
    title: "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../../assets/img/photographer.jpg"),
    tags: "राष्ट्रिय",
  },
  {
    title: "म्यान्मारको सेनाले नरसंहार गरेको छः संयुक्त राष्ट्र",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: require("../../../assets/img/matheus.jpg"),
    tags: "राष्ट्रिय",
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../../assets/img/girl-shoping.jpg"),
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
 & .width-55 {
    width: 55%;
  }
 & .align-item-center {
    align-items: center;
  }
 & .margin-rt1 {
    margin-right: 1.5rem;
  }
 & .card-img__tag {
    position: absolute;
    bottom: 1.5rem;
    margin-left: 2.5rem;
    z-index: 2;
  }
 & .font-weight500 {
    font-weight: 500;
  }
 & .popular__list {
    margin-top: 1rem;
  }
 & .column:last-child {
    margin-bottom: 1rem;
  }
  
  @media only screen and (max-width: 1200px) {
   & .holder-hw100 {
      height: 14rem;
    }
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
   & .title {
      font-size: 2rem;
    }
   & .width-55 {
      text-align: left;
      margin-left: 2rem;
    }
   & .holder-hw100 {
      height: 20rem;
    }
   & .holder-hw38 {
      height: 10rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .card {
      padding: 2.5rem;
    }
  }
  
`;
