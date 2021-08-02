import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Slider = () => {
  const options = {
    items: 1,
    loop: true,
    rewind: true,
    autoplay: true,
    margin: 30,
    //animateOut: 'fadeOut',
    autoplayHoverPause: false,
    singleItem: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    nav: false,
    dots: true,
    //navSpeed: 500,
    responsiveClass: true,
  };

  return (
    <Scoped css={css}>
    <div className="slider">
      <OwlCarousel className="owl-theme" {...options}>
        {Items?.map((a, idx) => (
          <SlideItem key={idx} {...a} />
        ))}
      </OwlCarousel>
    </div>
    </Scoped>
  );
};

export default Slider;

const SlideItem = ({ url, content }) => {
  return (
    <Link to="/single-page" className="image-wrapper">
      <img src={url.default} alt={content} className="img" />
      <p className="title1">{content}</p>
    </Link>
  );
};

const Items = [
  {
    content: "कांग्रेसले राख्यो सरकारसँग ९ बुँदे माग",
    url: require("../../assets/img/girl-shoping.jpg"),
  },
  {
    content: "प्रधानमन्त्रीले आज संसदमा सम्बोधन गर्ने",
    url: require("../../assets/img/mic.jpg"),
  },
  {
    content:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    url: require("../../assets/img/portrait.jpg"),
  },
  {
    content: "खाद्यको पहुँचबाट वञ्चित गराएमा १० वर्षसम्म कैद हुन सक्छ",
    url: require("../../assets/img/actress1.jpg"),
  },
  {
    content:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    url: require("../../assets/img/portrait.jpg"),
  },
  {
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिब..",
    url: require("../../assets/img/actress1.jpg"),
  },
  {
    content:
      "श्रीलंका तथा बर्मा राष्ट्रप्रमुखले लुम्बिनीको भ्रमण गर्ने, यस्तो छ तयारी",
    url: require("../../assets/img/portrait.jpg"),
  },
];

const css = `
& .display {
    display: block;
  }
  & .notDisplay {
    display: none;
  }
  & .slider {
    position: relative;
    width: 100%;
    height: 47rem;
    border-radius: 7px;
    overflow: hidden;
  }
  & .image-wrapper {
    position: relative;
    top: 0;
    left: 0;
    height: 47rem;
    border-radius: 7px;
    display: block;
  }
  & .image-wrapper::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1e1e1e;
    opacity: 0.5;
    z-index: 1;
  }
  
  & .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  & .content-wrapper {
    position: absolute;
    bottom: 2.5rem;
  }
 & .title1 {
    display: block;
    position: absolute;
    left: 2.5rem;
    right: 2.5rem;
    bottom: 2.5rem;
    color: white;
    font-size: 2.5rem;
    font-weight: 500;
    z-index: 2;
  }
 & .prev,
 & .next {
    position: absolute;
    top: 42%;
    z-index: 10;
    cursor: pointer;
    opacity: 0;
    transition: 0.2s;
  }
 & .slider:hover & .prev,
 & .slider:hover & .next {
    opacity: 1;
  }
 & .prev {
    left: 0;
  }
 & .next {
    right: 0;
  }
  
  @media only screen and (max-width: 1200px) {
   & .slider {
      height: 45rem;
    }
   & .prev,
   & .next {
      top: 40%;
    }
   & .title1 {
      bottom: 3rem;
    }
  }
  @media only screen and (max-width: 1050px) {
   & .slider {
      height: 40rem;
    }
   & .prev,
   & .next {
      top: 35%;
    }
   & .title1 {
      bottom: 8.5rem;
    }
  }
  @media only screen and (max-width: 750px) {
   & .slider {
      height: 38rem;
    }
   & .prev,
   & .next {
      top: 33%;
    }
   & .title1 {
      bottom: 10rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .slider {
      display: none;
    }
  }
  
`;
