import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import SeeMore from "../utility/SeeMore";
import PlayIcon from "../../assets/img/video-player.svg";

const VideoGallery = () => {
  return (
    <Scoped css={css}>
      <div className="videogallery">
        <h3 className="highlight">भिडियो ग्यालरी</h3>
        <div className="video-wraper">
          <div className="video__large">
            {Items?.map((a, idx) => <BigPlayer key={idx} {...a} />).slice(0, 1)}
          </div>
          <div className="video__small">
            {Items?.map((a, idx) => <SmallPlayer key={idx} {...a} />).slice(
              1,
              3
            )}
          </div>
        </div>
        <SeeMore />
      </div>
    </Scoped>
  );
};

export default VideoGallery;

const BigPlayer = ({ title, videoUrl }) => {
  return (
    <div className="card-img-wrapper card-img-wrap--hw60">
      <Link to="/single-page">
        <div className="card-img align-left">
          <iframe
            className="you-video"
            src={videoUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          {/* <!-- <img src="/img/girl-shoping.jpg" alt="" className="card__backimg"> --> */}
          <p className="card-img__title card-title--font20 margin-btm2">
            {title}
          </p>
          <img src={PlayIcon} alt={title} className="video-player" />
        </div>
      </Link>
    </div>
  );
};

const SmallPlayer = ({ title, videoUrl }) => {
  return (
    <div className="card-img-wrapper card-img-wrap--hw15 margin-no-btm2">
      <Link to="/single-page">
        <div className="card-img align-left">
          <iframe
            className="you-video"
            src={videoUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
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
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    videoUrl: "https://www.youtube.com/embed/YwmwHXMHez4",
  },
  {
    title: "करेन्ट लागेरमृत्यु भएकालाई पाँच लाख राहत",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    videoUrl: "https://www.youtube.com/embed/x7L4vK4lxKg",
  },
  {
    title: "नेपाली विद्यार्थीलाई चीन सरकारद्वारा छात्रवृत्ति प्रदान",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    videoUrl: "https://www.youtube.com/embed/MvT9H0opM2U",
  },
];

const css = `
/* -----secondary css ---*/
& .margin-no-btm2 {
  margin-bottom: 1.8rem;
}
& .card-img-wrap--hw60 {
  height: 35rem;
  width: 100%;
}
& .card-title--font20 {
  font-size: 2rem;
}
& .card-img-wrap--hw15 {
  height: 16.5rem;
  width: 100%;
}
& .card-title--font18 {
  font-size: 1.8rem;
}
/* --------card with backimg ------------  */
& .margin-btm1 {
  bottom: 1rem;
}
& .margin-btm2 {
  bottom: 2rem;
}

& .videogallery {
  margin-top: 2rem;
}
& .video-wraper {
  width: 100%;
  height: 35rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
& .video__large {
  width: 68%;
}
& .video__small {
  width: 30%;
  /* display: flex;
    flex-direction: column; */
}

@media only screen and (max-width: 900px) {
    & .video-wraper {
    display: block;
    height: 50rem;
  }

  & .video__large {
    width: 100%;
  }
  & .video__small {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  & .card-img-wrap--hw15 {
    height: 18rem;
    width: 48%;
  }
  & .card-img-wrap--hw60 {
    height: 30rem;
    margin-bottom: 2rem;
  }
}
@media only screen and (max-width: 750px) {
    & .video-wraper {
    height: 58rem;
  }
  & .card-img-wrap--hw60 {
    height: 35rem;
  }
  & .card-img-wrap--hw15 {
    height: 20rem;
  }
}
@media only screen and (max-width: 500px) {
  & .video-wraper {
    height: 84rem;
  }
  & .video__small {
    display: block;
  }
  & .card-img-wrap--hw60 {
    height: 30rem;
  }
  & .card-img-wrap--hw15 {
    width: 100%;
    height: 25rem;
  }
  & .card-title--font18 {
    font-size: 2rem;
  }
}
`;
