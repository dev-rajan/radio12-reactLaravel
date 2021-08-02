import { Scoped } from "kremling";
import React, { useState } from "react";
import LongAd from "../common/ads/LongAd";
import LongAdItem from "../common/ads/LongAdItem";
import PageSidebar from "../common/sidebar/PageSidebar";
import SingleVideo from "../Modals/SingleVideo";
import Breadcrumb from "../utility/Breadcrumb";
import Pagination from "../utility/Pagination";
import Tags from "../utility/Tags";
import VideoPlayer from "../../assets/img/video-player.svg";

const Video = () => {
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
              <Breadcrumb title="भिडियो ग्यालरी" />
              <h3 className="highlight">भिडियो ग्यालरी</h3>
              <div className="gallery">
                {Items?.map((a, id) => <BigItem key={id} {...a} />).slice(0, 1)}

                {Items?.map((a, id) => (
                  <SmallItem key={id} {...a} />
                )).slice(1,15)}
              </div>
              <Pagination />
              <LongAdItem extraStyle="width48" />
              <LongAd extraStyle="width100" />
            </div>

            <div className="right-side">
              <PageSidebar />

              {/* <!-- <Presenter/> --> */}
            </div>
          </main>
        ) : (
          <SingleVideo closeVideo={handleClick} />
        )}
      </div>
    </Scoped>
  );
};

export default Video;

const BigItem = ({ videoUrl, title, tags }) => {
  return (
    <div className="card-img-wrapper card-img-wrap--hw100 margin-btm2">
      <div className="card-img align-left">
        <iframe
          className="you-video"
          src={videoUrl}
          frameborder="0"
          allowfullscreen
        ></iframe>
        {/* <!-- <img src="../../assets/images/portrait.jpg" alt="" className="card__backimg"> --> */}
        <img
          src={VideoPlayer}
          alt={title}
          className="video-player"
          id="show-modal"
        />
        <p className="card-img__title card-title--font20 margin-po-btm7">
          {title}
        </p>
        <a href="#" className="tag card-img__tag margin-po-btm2"></a>
        <Tags title={tags} tagClass="card-img__tag margin-po-btm2" />
      </div>
    </div>
  );
};

const SmallItem = ({ videoUrl, title, tags }) => {
  return (
    <div className="card-img-wrapper card-img-wrap--hw50 margin-btm2">
      <div className="card-img align-left" id="show-modal">
        {/* <!-- <img src="/img/child.jpg" alt="" className="card__backimg"> --> */}
        <iframe
          className="you-video"
          src={videoUrl}
          frameborder="0"
          allowfullscreen
        ></iframe>
        <img
          src={VideoPlayer}
          alt={title}
          className="video-player top-right"
          id="show-modal"
        />
        <p className="card-img__title card-title--font18 margin-po-btm7">
          {title}
        </p>
        <Tags title={tags} tagClass="card-img__tag margin-po-btm2" />
      </div>
    </div>
  );
};

const Items = [
  {
    id: "1",
    title:
      "विरोधीलाई प्रधानमन्त्रीको जवाफः ‘हामी अनुशरण गर्न सक्छौं, अनुकरण गर्न सक्दैनौं ’",
    tags: "अर्थ",
    videoUrl: "https://www.youtube.com/embed/YwmwHXMHez4",
    UpdatedDate: "May 04 2018",
  },
  {
    id: "2",
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "अन्तराष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/x7L4vK4lxKg",
    UpdatedDate: "May 06 2018",
  },
  {
    id: "3",
    title:
      "सामान्य बन्दै महेन्द्रनगरको अवस्था, प्रहरीको दमन विरुद्ध विद्यालय बन्द",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/MvT9H0opM2U",
    UpdatedDate: "May 12 2018",
  },
  {
    id: "4",
    title:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/YwmwHXMHez4",
    UpdatedDate: "May 19 2018",
  },
  {
    title: "कञ्चनपुरका अर्का एक युवा जसलाई प्रहरीले ११ दिन थुन्यो !",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/x7L4vK4lxKg",
    UpdatedDate: "May 13 2018",
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/YwmwHXMHez4",
    UpdatedDate: "May 21 2018",
  },
  {
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/MvT9H0opM2U",
    UpdatedDate: "May 23 2018",
  },
  {
    title:
      "विरोधीलाई प्रधानमन्त्रीको जवाफः ‘हामी अनुशरण गर्न सक्छौं, अनुकरण गर्न सक्दैनौं ",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/x7L4vK4lxKg",
    UpdatedDate: "May 25 2018",
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई निर्देशन",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/YwmwHXMHez4",
    UpdatedDate: "May 27 2018",
  },
  {
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/x7L4vK4lxKg",
    UpdatedDate: "May 29 2018",
  },
  {
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/MvT9H0opM2U",
    UpdatedDate: "April 02 2018",
  },
  {
    title:
      "विरोधीलाई प्रधानमन्त्रीको जवाफः ‘हामी अनुशरण गर्न सक्छौं, अनुकरण गर्न सक्दैनौं ’",
    tags: "अर्थ",
    videoUrl: "https://www.youtube.com/embed/YwmwHXMHez4",
    UpdatedDate: "April 05 2018",
  },
  {
    title: "कृषिमा बिचौलियाको विकल्पले नबोलेर के हुन्छ?",
    tags: "अन्तराष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/x7L4vK4lxKg",
    UpdatedDate: "April 09 2018",
  },
  {
    title:
      "सामान्य बन्दै महेन्द्रनगरको अवस्था, प्रहरीको दमन विरुद्ध विद्यालय बन्द",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/MvT9H0opM2U",
    UpdatedDate: "April 13 2018",
  },
  {
    title:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    tags: "राष्ट्रिय",
    videoUrl: "https://www.youtube.com/embed/YwmwHXMHez4",
    UpdatedDate: "April 18 2018",
  },
];

const css = `
& .card-img-wrap--hw100 {
    height: 43rem;
    width: 100%;
  }
 & .card-img-wrap--hw50 {
    height: 25rem;
    width: 48.85%;
  }
 & .card-title--font18 {
    font-size: 1.8rem;
  }
 & .card-title--font20 {
    font-size: 2rem;
  }
 & .margin-po-btm7 {
    bottom: 7rem;
  }
 & .margin-po-btm2 {
    bottom: 2rem;
  }
 & .margin-btm2 {
    margin-bottom: 2rem;
  }
 & .top-right {
    width: 2.6rem;
    top: 1.3rem;
    left: 91%;
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
