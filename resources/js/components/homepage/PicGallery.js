import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import SeeMore from "../utility/SeeMore";

const PicGallery = () => {
  return (
    <Scoped css={css}>
      <div className="picgallery">
        <h3 className="highlight">फोटो ग्यालरी</h3>
        <div className="pic-slider">
          {Items?.map((a, idx) => (
            <PhotoGallery {...a} key={idx} />
          ))}
        </div>
        <SeeMore />
      </div>
    </Scoped>
  );
};

export default PicGallery;

const PhotoGallery = ({ imageUrl, title }) => {
  return (
    <div className="card-img-wrapper card-img-wrap--hw33">
      <Link to="/single-page">
        <div className="card-img align-left card-img--hw32">
          <img src={imageUrl.default} alt={title} className="card__backimg" />
          <p className="card-img__title card-title--font18 margin-btm1">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};

const Items = [
  {
    title: "कमला नदीले बगाएका दुई किशोरको शव भेटियो",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../assets/img/erik.jpg"),
  },
  {
    title: "भ्रष्टाचारसम्बन्धी कडा कानून ल्याउनुपर्छ : नेता नेपाल",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    imageUrl: require("../../assets/img/outdoors.jpg"),
  },
  {
    title: "खाद्यको पहुँचबाट वञ्चित गराएमा १० वर्षसम्म कैद हुन सक्छ",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../assets/img/ionut.jpg"),
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
    imageUrl: require("../../assets/img/nath.jpg"),
  },
  {
    title:
      "निर्मला हत्या प्रकरणः आफन्त जोगाउन मोडियो घट्ना ! 'राहत होइन, दोषी पत्ता",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र..",
    imageUrl: require("../../assets/img/people.jpg"),
  },
];

const css = `
/* -----secondary css ---*/
& .margin-right2 {
  margin-right: 2rem;
}
& .card-img-wrap--hw33 {
  height: 20rem;
  width: 32%;
}
& .card-img-wrapper {
  margin-bottom: 1.8rem;
}
& .card-img-wrapper:nth-child(n + 4) {
  margin-bottom: 0;
}
& .card-title--font18 {
  font-size: 1.8rem;
}
& .picgallery {
  margin-top: 4rem;
}
& .margin-btm1 {
  bottom: 1rem;
}
& .pic-slider {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media only screen and (max-width: 1200px) {
    & .card-img-wrapper {
    margin-bottom: 1.5rem;
  }
}
@media only screen and (max-width: 1050px) {
    & .card-img-wrapper {
    margin-bottom: 1.5rem;
  }
}

@media only screen and (max-width: 900px) {
    & .card-img-wrap--hw33 {
    height: 20rem;
    width: 48%;
  }
  & .card-img-wrapper {
    margin-bottom: 2.3rem;
  }
  & .card-img-wrapper:nth-child(n + 5) {
    margin-bottom: 0;
  }
}
`;
