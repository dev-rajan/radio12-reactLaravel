import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import Tags from "../utility/Tags";

const Breaking = () => {
  return (
    <Scoped css={css}>
      <div className="breaking">
        {BreakingNews?.map((a, idx) => (
          <div className="breaking-full" key={idx}>
            {/* <!-- --------------  simple card  ----------------> */}
            <div className="card card--fullwidth align-center">
              <h3 className="highlight">ब्रेकिङ न्युज</h3>
              <Link
                to="/single-page"
                className="card__title card-title--font30 margin2"
              >
                {a.title}
              </Link>
              <Tags title={a.tags} />
            </div>
          </div>
        )).slice(0, 1)}

        <div className="breaking-half">
          {/* <!-- --------------  simple card with text ----------------> */}
          {BreakingNews?.map((a, idx) => (
            <div className="card card-half align-left" key={idx}>
              <Link
                to="/single-page"
                className="card__title card-title--font25"
              >
                {a.title}
              </Link>
              <Tags title={a.tags} />
              <Link to="/single-page" className="card__desc">
                {a.content}
              </Link>
            </div>
          )).slice(1, 2)}
          {/* <!-- --------------  card with background images ----------------> */}
          {BreakingNews?.map((a, idx) => (
            <div className="card-img-wrapper card-img-wrap--hw43" key={idx}>
              <Link to="/single-page">
                <div className="card-img align-left">
                  <img src={a.imageUrl.default} alt className="card__backimg" />
                  <p className="card-img__title card-title--font25 margin-btm7">
                    {a.title}
                  </p>
                  <Tags title={a.tags} tagClass="card-img__tag" />
                </div>
              </Link>
            </div>
          )).slice(2, 3)}
        </div>

        {BreakingNews?.map((a, idx) => (
          <div className="breaking-full" key={idx}>
            {/* <!-- --------------  card with images and content----------------> */}
            <div className="card card-img-content card--fullwidth align-left">
              <div className="card__imgHolder">
                <Link to="/single-page">
                  <iframe
                    className="you-video"
                    src={a.videoUrl}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                  <img src={a.imageUrl.default} alt className="card__img" />
                  <img
                    src={require("../../assets/img/video-player.svg").default}
                    alt
                    className="video-player"
                  />
                </Link>
              </div>
              <div className="card__content">
                <Link
                  to="/single-page"
                  className="card__title card-title--font25"
                >
                  {a.title}
                </Link>
                <Tags title={a.tags} />
                <Link to="/single-page" className="card__desc">
                  {a.content}
                </Link>
              </div>
            </div>
          </div>
        )).slice(3, 4)}
      </div>
    </Scoped>
  );
};

export default Breaking;

const BreakingNews = [
  {
    title:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    tags: "राष्ट्रिय",
    imageUrl: "",
    videoUrl: "",
  },
  {
    title:
      "सामान्य बन्दै महेन्द्रनगरको अवस्था, प्रहरीको दमन विरुद्ध विद्यालय बन्द प्रहरीको दमन विरुद्ध विद्यालय बन्द",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको संसद्मा पेस गर्नुभएको वैयक्तिक गोपनीयताका अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    tags: "अन्तराष्ट्रिय",
    imageUrl: "",
    videoUrl: "",
  },
  {
    title:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    content:
      "केपी ओलीले पार्टीभित्र पूर्वाग्रह राख्दा सरकारले काम गर्न सकेनः नेकपा नेता पशुपति चौलागाईसँग रोहित दाहालको वारपार",
    tags: "राष्ट्रिय",
    imageUrl: require("../../assets/img/mic.jpg"),
    videoUrl: "",
  },
  {
    title:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    content:
      "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको वैयक्तिक गोपनीयताका सम्बन्धमा व्यवस्था गर्न बनेको विधेयकको प्रावधानले सञ्चार क्षेत्रलाई झनै कसिलो बनाउन खोजेको छ ।",
    tags: "अर्थ",
    imageUrl: "",
    videoUrl: "https://www.youtube.com/embed/LR9SI_geyAY",
  },
];

const css = `
/* --------globle ------------  */
& .card--fullwidth {
  width: 100%;
}
& .card-title--font30 {
  font-size: 3.1rem;
}
& .card-title--font25 {
  font-size: 2.5rem;
}

& .breaking {
  margin-top: 3rem;
}
& .margin2 {
  margin: 1.5rem 0;
}
/* --------double breaking ------------  */
& .breaking-half {
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
}
/* --------card with backimg ------------  */
& .card-half {
  flex: 50%;
  margin: 0;
  margin-right: 4rem;
}
& .card-img-wrap--hw43 {
  flex: 50%;
}
& .margin-btm7 {
  bottom: 7rem;
}
& .margin-btm2 {
  bottom: 2rem;
}
/* --------card with image and content ------------  */
& .card__imgHolder {
  position: relative;
  height: 36rem;
  width: 100%;
  overflow: hidden;
  border-radius: 7px;
  cursor: pointer;
}

& .card__img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
& .card__imgHolder:hover & .video-player {
  transform: scale(1.15);
}
& .card-img-content {
  display: flex;
  justify-content: space-between;
}
& .card__content {
  width: 100%;
  margin-left: 4rem;
}
@media only screen and (max-width: 1050px) {
  & .card__content {
    margin-left: 2rem;
  }
}
@media only screen and (max-width: 900px) {
  & .breaking-half {
    display: block;
  }
  & .card-half {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
  }
  & .card-img-wrap--hw43 {
    width: 100%;
    height: 38rem;
    margin-bottom: 3rem;
  }
  & .card__imgHolder {
    height: 32rem;
  }
  & .card__content {
    margin-left: 1rem;
  }
  & .card__desc {
    padding: 2rem 0;
  }
}
@media only screen and (max-width: 750px) {
  & .card-img--w100 {
    height: 35rem;
  }
  & .card-img-content {
    display: block;
  }
  & .card__content {
    margin: auto;
  }
  & .card-img-wrap--hw43 {
    height: 35rem;
  }
}
@media only screen and (max-width: 500px) {
  & .card__imgHolder {
    height: 28rem;
  }
}

`;
