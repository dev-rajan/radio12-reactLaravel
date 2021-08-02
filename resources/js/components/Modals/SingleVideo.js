import { Scoped } from "kremling";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const SingleVideo = ({ closeVideo }) => {
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
      '<i className="lnr lnr-arrow-left prev"></i>',
      '<i className="lnr lnr-arrow-right next"></i>',
    ],
  };
  return (
    <Scoped css={css}>
      <div className="frame-wraper">
        <div className="close" onClick={closeVideo}>
          &#x2573;
        </div>
        <div className="frame">
          <OwlCarousel className="owl-theme" {...options}>
            {Items?.map((a, idx) => (
              <VideoItem key={idx} {...a} />
            ))}
          </OwlCarousel>
        </div>
      </div>
    </Scoped>
  );
};

export default SingleVideo;

const VideoItem = ({ url, content, date }) => {
  return (
    <div className="item">
      <div className="video">
        <iframe
          className="you-video"
          src={url}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>

      <p className="video-title">{content}</p>
      <div className="updated margin-left2">
        <i className="lnr lnr-calendar-full"></i>
        <span className="date">{date}</span>
      </div>
    </div>
  );
};

const Items = [
  {
    content:
      "भारतका प्रभावशाली सांसदले माल्दिभ्स कब्जा गर्नुपर्ने धम्की दिएपछि भारतका प्रभावशाली सांसदले माल्दिभ्स कब्जा गर्नुपर्ने धम्कीगर्नुपर्ने धम्की..",
    url: "https://www.youtube.com/embed/x7L4vK4lxKg",
    date: "May 17, 2018",
  },
  {
    content:
      "प्रधानमन्त्रीले आज संसदमा सम्बोधन गर्ने धम्की दिएपछि भारतका प्रभावशाली",
    url: "https://www.youtube.com/embed/MvT9H0opM2U",
    date: "May 17, 2018",
  },
  {
    content:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    url: "https://www.youtube.com/embed/YwmwHXMHez4",
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
 & .video {
    position: relative;
    height: 48rem;
    width: 100%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: #979797;
    overflow: hidden;
  }
 & .video-title {
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
   & .video {
      height: 45rem;
    }
  }
  @media only screen and (max-width: 1050px) {
   & .frame {
      width: 80%;
    }
   & .video {
      height: 40rem;
    }
  }
  @media only screen and (max-width: 750px) {
   & .frame {
      width: 85%;
    }
   & .video {
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
   & .video {
      height: 30rem;
    }
   & .prev,
   & .next {
      display: none;
    }
  }
  
`;
