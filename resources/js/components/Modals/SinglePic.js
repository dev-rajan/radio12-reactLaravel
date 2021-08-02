import { Scoped } from "kremling";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const SinglePic = ({ close }) => {
  const options = {
    items: 1,
    loop: true,
    rewind: true,
    autoplay: true,
    margin: 0,
    // animateOut: 'fadeOut',
    autoplayHoverPause: false,
    singleItem: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 4000,
    nav: false,
    dots: true,
    //navSpeed: 500,
    responsiveClass: true,
    navText: [
      '<i class="lnr lnr-arrow-left prev"></i>',
      '<i class="lnr lnr-arrow-right next"></i>',
    ],
  };
  return (
    <Scoped css={css}>
      <div className="frame-wraper">
        <div className="close" onClick={close}>
          &#x2573;
        </div>
        <div className="frame">
          <OwlCarousel className="owl-theme" {...options}>
            {Items?.map((a, idx) => (
              <SlideItem key={idx} {...a} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </Scoped>
  );
};

export default SinglePic;

const SlideItem = ({ url, date, content }) => {
  return (
    <>
      <div className="item">
        <img src={url.default} alt={content} className="picture" />
        <p className="picture-title">{content}</p>
        <div className="updated margin-left2">
          <i className="lnr lnr-calendar-full"></i>
          <span className="date">{date}</span>
        </div>
      </div>
    </>
  );
};

const Items = [
  {
    content:
      "भारतका प्रभावशाली सांसदले माल्दिभ्स कब्जा गर्नुपर्ने धम्की दिएपछि भारतका प्रभावशाली सांसदले माल्दिभ्स कब्जा गर्नुपर्ने धम्कीगर्नुपर्ने धम्की..",
    url: require("../../assets/img/girl-shoping.jpg"),
    date: "May 17, 2018",
  },
  {
    content:
      "प्रधानमन्त्रीले आज संसदमा सम्बोधन गर्ने धम्की दिएपछि भारतका प्रभावशाली",
    url: require("../../assets/img/mic.jpg"),
    date: "May 17, 2018",
  },
  {
    content:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    url: require("../../assets/img/portrait.jpg"),
    date: "May 17, 2018",
  },
  {
    content:
      "खाद्यको पहुँचबाट वञ्चित गराएमा १० वर्षसम्म कैद हुन सक्छ भारतका प्रभावशाली सांसदले माल्दिभ्स कब्जा गर्नुपर्ने धम्कीगर्नुपर्ने",
    url: require("../../assets/img/actress1.jpg"),
    date: "May 17, 2018",
  },
  {
    content:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना वञ्चित गराएमा १० वर्षसम्म कैद हुन सक्छ भारतका प्रभावशाली",
    url: require("../../assets/img/portrait.jpg"),
    date: "May 17, 2018",
  },
  {
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा,वञ्चित गराएमा १० वर्षसम्म कैद हुन सक्छ भारतका प्रभावशाली उद्योगमा लगानी प्रतिब..",
    url: require("../../assets/img/actress1.jpg"),
    date: "May 17, 2018",
  },
  {
    content:
      "श्रीलंका तथा बर्मा राष्ट्रप्रमुखले लुम्बिनीको भ्रमण गर्ने, यस्तो छ तयारी",
    url: require("../../assets/img/portrait.jpg"),
    date: "May 17, 2018",
  },
];

const css = `
& .margin-left2 {
    margin-left: 2rem;
  }
 & .frame-wraper {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    transition: opacity 0.5s ease;
  }
 & .frame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 70%;
    border-radius: 3px;
    padding-bottom: 2rem;
  }
 & .picture {
    width: 100%;
    height: 48rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    object-fit: cover;
  }
 & .picture-title {
    font-size: 1.9rem;
    margin: 1rem 2rem;
  }
 & .modal-enter {
    opacity: 0;
  }
  
 & .modal-leave-active {
    opacity: 0;
  }
 & .prev,
 & .next {
    position: absolute;
    top: 42%;
    z-index: 10;
    cursor: pointer;
    transition: 0.2s;
  }
 & .prev {
    left: -5rem;
  }
 & .next {
    right: -5rem;
  }
 & .prev__arrow {
    margin-left: 0;
  }
 & .next__arrow {
    margin-right: 0;
  }
  @media only screen and (max-width: 1200px) {
   & .picture {
      height: 45rem;
    }
  }
  @media only screen and (max-width: 1050px) {
   & .frame {
      width: 80%;
    }
   & .picture {
      height: 40rem;
    }
  }
  @media only screen and (max-width: 750px) {
   & .frame {
      width: 85%;
    }
   & .picture {
      height: 35rem;
    }
   & .prev,
   & .next {
      height: 5rem;
      width: 5rem;
      background-color: transparent;
    }
   & .prev {
      left: -2rem;
    }
   & .next {
      right: -2rem;
    }
   & .arrow {
      margin-top: 1.4rem;
    }
  }
  @media only screen and (max-width: 500px) {
   & .frame {
      width: 95%;
    }
   & .picture {
      height: 30rem;
    }
   & .prev,
   & .next {
      display: none;
    }
  }
  
`;
