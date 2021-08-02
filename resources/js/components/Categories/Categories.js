import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import LongAd from "../common/ads/LongAd";
import LongAdItem from "../common/ads/LongAdItem";
import PageSidebar from "../common/sidebar/PageSidebar";
import Breadcrumb from "../utility/Breadcrumb";
import Pagination from "../utility/Pagination";

const Categories = () => {
  return (
    <Scoped css={css}>
      <div className="page-wraper">
        <main>
          <div className="main-side">
            <Breadcrumb title="समाज" />
            <h3 className="highlight">समाज</h3>
            <div className="category">
              <div className="top-list">
                {Items?.map((a, idx) => <BigItem key={idx} {...a} />).slice(
                  0,
                  1
                )}

                <div className="side-list">
                  {Items?.map((a, idx) => <SideItem key={idx} {...a} />).slice(
                    1,
                    3
                  )}
                </div>
              </div>

              {Items?.map((a, idx) => <ListItem key={idx} {...a} />).slice(
                3,
                10
              )}

              <Pagination />
              <LongAdItem extraStyle="width48" />
              <LongAd extraStyle="width100" />
            </div>
          </div>

          <div className="right-side">
            <PageSidebar />
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default Categories;

const BigItem = ({ imageUrl, title }) => {
  return (
    <div className="row row-width60 margin-btm4">
      <div className="img-holder holder-hw60">
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
        <Link to="/single-page">
          <p className="title font-size19">{title}</p>
        </Link>
      </div>
    </div>
  );
};

const SideItem = ({ imageUrl, title }) => {
  return (
    <div className="card-img-wrapper card-img-wrap--hw36">
      <Link to="/single-page">
        <div className="card-img align-left">
          <img src={imageUrl.default} alt={title} className="card__backimg" />
          <p className="card-img__title card-title--font17 margin-btm1">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

const ListItem = ({ imageUrl, title, content }) => {
  return (
    <div className="card card-img-content card--fullwidth align-left padding0">
      <div className="card__imgHolder">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="card__img" />
        </Link>
      </div>
      <div className="card__content">
        <Link to="/single-page">
          <p className="card__title card-title--font19">{title}</p>
        </Link>
        <Link to="/single-page">
          <p className="card__desc font-size17">{content}</p>
        </Link>
      </div>
    </div>
  );
};

const Items = [
  {
    title:
      "संसदमा प्रधानमन्त्रीले भने– साथीहरुले लोकतन्त्रको सर्टिफिकेट मागेको सुन्दा छक्क पर्छु",
    content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
    imageUrl: require("../../assets/img/portrait.jpg"),
  },
  {
    title:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../assets/img/people.jpg"),
  },
  {
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    imageUrl: require("../../assets/img/ionut.jpg"),
  },
  {
    title:
      "नयाँ कानुनले अपराध अनुसन्धानमा बाधा, प्रहरीलाई मान्छे समात्नै धौ–धौ !",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../assets/img/annie.jpg"),
  },
  {
    title:
      "सवारी साहित्य : निःशुल्क पढ्न पाइने मायाप्रेमका कुरादेखि उखान–टुक्कासम्म",
    content:
      "तेस्रो अन्तर्राष्ट्रिय लाङटाङ म्याराथन प्रतियोगिता हुँदै थियो । त्यसका लागि ट्रेकिङ एजेन्सिज् एसोसिएसन अफ नेपाल (टान)ले मालीगाउँस्थित कार्यालयमा आयोजना गरेको पत्रकार सम्मेलनमा लाङटाङ सद्भावना दूतको",
    imageUrl: require("../../assets/img/aravind.jpg"),
  },
  {
    title: "कञ्चनपुरका अर्का एक युवा जसलाई प्रहरीले ११ दिन थुन्यो !",
    content:
      "काठमाडौँ । प्रहरी महानिरीक्षक सर्वेन्द्र खनालले बुधबार (भदौ ६ गते) बिहानै महान्यायाधिवक्ता अग्नि खरेललाई भेटेर भने, ‘नयाँ कानुनले अपराधी पक्राउ गर्नै समस्या भएको छ । हामीले पहिले अपराधी समात्ने कि पुर्जी लिन दौडने ?",
    imageUrl: require("../../assets/img/child.jpg"),
  },
  {
    title:
      "सवारी साहित्य : निःशुल्क पढ्न पाइने मायाप्रेमका कुरादेखि उखान–टुक्कासम्म",
    content:
      "तेस्रो अन्तर्राष्ट्रिय लाङटाङ म्याराथन प्रतियोगिता हुँदै थियो । त्यसका लागि ट्रेकिङ एजेन्सिज् एसोसिएसन अफ नेपाल (टान)ले मालीगाउँस्थित कार्यालयमा आयोजना गरेको पत्रकार सम्मेलनमा लाङटाङ सद्भावना दूतको",
    imageUrl: require("../../assets/img/andrew.jpg"),
  },
  {
    title: "कञ्चनपुरका अर्का एक युवा जसलाई प्रहरीले ११ दिन थुन्यो !",
    content:
      "काठमाडौँ । प्रहरी महानिरीक्षक सर्वेन्द्र खनालले बुधबार (भदौ ६ गते) बिहानै महान्यायाधिवक्ता अग्नि खरेललाई भेटेर भने, ‘नयाँ कानुनले अपराधी पक्राउ गर्नै समस्या भएको छ । हामीले पहिले अपराधी समात्ने कि पुर्जी लिन दौडने ?",
    imageUrl: require("../../assets/img/aravind.jpg"),
  },
  {
    title:
      "सवारी साहित्य : निःशुल्क पढ्न पाइने मायाप्रेमका कुरादेखि उखान–टुक्कासम्म",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../assets/img/brooke.jpg"),
  },
  {
    title: "कञ्चनपुरका अर्का एक युवा जसलाई प्रहरीले ११ दिन थुन्यो !",
    content:
      "काठमाडौँ । प्रहरी महानिरीक्षक सर्वेन्द्र खनालले बुधबार (भदौ ६ गते) बिहानै महान्यायाधिवक्ता अग्नि खरेललाई भेटेर भने, ‘नयाँ कानुनले अपराधी पक्राउ गर्नै समस्या भएको छ । हामीले पहिले अपराधी समात्ने कि पुर्जी लिन दौडने ?",
    imageUrl: require("../../assets/img/child.jpg"),
  },
];

const css = `
& .font-size17 {
    font-size: 1.6rem;
  }
 & .card-title--font19 {
    font-size: 1.9rem;
  }
 & .padding0 {
    padding: 0;
  }
 & .font-size19 {
    font-size: 1.9rem;
  }
  
 & .card-title--font17 {
    font-size: 1.7rem;
  }
 & .margin-btm1 {
    bottom: 1rem;
  }
 & .category {
    margin-top: 1.5rem;
  }
 & .top-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
 & .side-list {
    width: 36%;
  }
  
 & .card:hover .card__img {
    transform: scale(1.2);
  }
 & .row-width60 {
    width: 60%;
    margin-right: 3.5rem;
  }
 & .holder-hw60 {
    width: 100%;
    height: 35rem;
  }
 & .content {
    position: relative;
    background-color: #ffffff;
    height: 12rem;
    border-radius: 7px;
    padding: 2rem;
  }
 & .content--shadow {
    box-shadow: 0 2px 10px #999999;
  }
 & .content--width80 {
    width: 95%;
    margin: auto;
  }
 & .margintop--minus {
    margin-top: -7rem;
  }
 & .card-img-wrap--hw36 {
    height: 18.25rem;
    width: 100%;
  }
 & .card-img-wrap--hw36:first-child {
    margin-bottom: 3.5rem;
  }
 & .card__imgHolder::before {
    height: 0;
    width: 0;
  }
 & .card__title:hover {
    color: #0b7074;
  }
 & .card-img-content {
    height: 25rem;
  }
 & .card__imgHolder {
    height: 100%;
  }
  @media only screen and (max-width: 900px) {
   & .row-width60 {
      margin-right: 2rem;
    }
   & .side-list {
      width: 37%;
    }
   & .card-img-wrap--hw36 {
      height: 19rem;
    }
   & .card-img-wrap--hw36:first-child {
      margin-bottom: 2rem;
    }
   & .top-list {
      margin-bottom: 3rem;
    }
  }
  @media only screen and (max-width: 750px) {
   & .row-width60 {
      width: 100%;
    }
   & .img-holder {
      height: 33rem;
    }
   & .card-img-wrap--hw36 {
      height: 20rem;
      width: 48.2%;
    }
   & .card-img-wrap--hw36:first-child {
      margin-bottom: 0;
    }
   & .margin-btm4 {
      margin-bottom: 3rem;
    }
   & .top-list {
      display: block;
    }
   & .side-list {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  @media only screen and (max-width: 500px) {
   & .card-img-content {
      display: block;
      height: 40rem;
      padding-bottom: 4rem;
    }
   & .card__imgHolder {
      height: 50%;
      width: 100%;
    }
   & .card__desc {
      padding: 1.5rem 0;
    }
   & .card__content {
      margin: auto;
    }
   & .side-list {
      display: block;
    }
   & .card-img-wrap--hw36 {
      width: 100%;
      height: 23rem;
    }
   & .card-img-wrap--hw36:first-child {
      margin-bottom: 2.8rem;
    }
   & .card-title--font17 {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
  
`;
