import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../utility/Breadcrumb";
import LongAdItem from "../common/ads/LongAdItem";
import Pagination from "../utility/Pagination";
import SpecialProgram from "../utility/SpecialProgram";
import PageSidebar from "../common/sidebar/PageSidebar";
import Clock from "../../assets/img/clock.svg";
import { Scoped } from "kremling";

const Podcast = () => {
  return (
    <Scoped css={css}>
      <div class="page-wraper">
        <main>
          <div class="main-side">
            <Breadcrumb title="Podcast" />
            <h3 class="highlight">Podcast</h3>

            <LongAdItem extraStyle="width48" />

            <div class="podcast">
              {Items?.map((a, idx) => (
                <PodList key={idx} {...a} />
              ))}
            </div>
            <Pagination />
            <SpecialProgram />
          </div>

          <div class="right-side">
            <PageSidebar />
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default Podcast;

const PodList = ({ imageUrl, title, updatedDate }) => {
  return (
    <div class="card card-img-content-v card--width50 align-left padding0">
      <div class="card__imgHolder img-width33">
        <Link to="/podcast-detail" class="img-link">
          <img src={imageUrl.default} alt={title} class="card__img" />
        </Link>
      </div>
      <div class="card__content">
        <Link to="/podcast-detail" class="card__title card-title--font19">
          {title}
        </Link>
        <div class="podcast-schedule">
          <img src={Clock} alt={title} class="icon podcast-icon" />
          <span class="podcast-time">{updatedDate}</span>
        </div>
      </div>
    </div>
  );
};

const Items = [
  {
    title: "नयाँ कानुनले अपराध अनुसन्धानमा बाधा!",
    content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
    updatedDate: "Sept. 25, 2018, 8:09 a.m",
    imageUrl: require("../../assets/img/annie.jpg"),
  },
  {
    title: "विश्वविद्यालयमा सिस्टम ह्याकः दुई कर्मचारी निलम्बित",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    updatedDate: "Sept. 25, 2018, 8:09 a.m",
    imageUrl: require("../../assets/img/photographer.jpg"),
  },
  {
    title: "म्यान्मारको सेनाले नरसंहार गरेको छः संयुक्त राष्ट्र",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    updatedDate: "Sept. 25, 2018, 8:09 a.m",
    imageUrl: require("../../assets/img/andrew.jpg"),
  },
  {
    title: "प्रहरीलाई मान्छे समात्नै धौ–धौ !",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    updatedDate: "Sept. 25, 2018, 8:09 a.m",
    imageUrl: require("../../assets/img/matheus.jpg"),
  },
  {
    title: "प्रधानमन्त्रीले भने-न्यायालयका बारेमा म एउटाले नब",
    content: "प्रावधानले सञ्चार क्षेत्रलाई झनै कसिलो बनाउन खोजेको छ..",
    updatedDate: "Sept. 25, 2018, 8:09 a.m",
    imageUrl: require("../../assets/img/ben.jpg"),
  },
  {
    title: "कांग्रेसले राख्यो सरकारसँग ९ बुँदे माग",
    content: "व्यवस्था गर्न बनेको विधेयकको प्रावधानले सञ्चार क्षेत्र छ..",
    updatedDate: "Sept. 25, 2018, 8:09 a.m",
    imageUrl: require("../../assets/img/hijab.jpg"),
  },
  {
    title: "नयाँ कानुनले अपराध अनुसन्धानमा बाधा!",
    content: "वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको..",
    updatedDate: "Sept. 25, 2018, 8:09 a.m",
    imageUrl: require("../../assets/img/annie.jpg"),
  },
  {
    title: "विश्वविद्यालयमा सिस्टम ह्याकः दुई कर्मचारी निलम्बित",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    updatedDate: "Sept. 25, 2018, 8:09 a.m",
    imageUrl: require("../../assets/img/photographer.jpg"),
  },
  {
    title: "म्यान्मारको सेनाले नरसंहार गरेको छः संयुक्त राष्ट्र",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    updatedDate: "Sept. 25, 2018, 8:09 a.m",
    imageUrl: require("../../assets/img/andrew.jpg"),
  },
];

const css = `
& .podcast {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
 & .podcast-schedule {
    flex: 35%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
 & .podcast-time {
    font-size: 1.5rem;
    margin-left: 1rem;
    color: var(--title-text-color);
  }
 & .podcast-icon {
    height: 1.3rem;
  }
 & .card--width50 {
    width: 30.5%;
  }
 & .img-width33 {
    height: 60%;
    width: 100%;
  }
 & .card__imgHolder::before {
    height: 0;
    width: 0;
  }
 & .card__title:hover {
    color: var(--primary-color);
  }
 & .card-title--font19 {
    font-size: 1.9rem;
  }
  @media only screen and (max-width: 1050px) {
   & .card--width50 {
      width: 47%;
    }
  }
  
  @media only screen and (max-width: 500px) {
   & .card--width50 {
      width: 100%;
    }
  }
  
`;
