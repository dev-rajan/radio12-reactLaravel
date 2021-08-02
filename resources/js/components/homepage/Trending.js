import React from "react";
import { Link } from "react-router-dom";
import Tags from "../utility/Tags";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Scoped } from "kremling";

const Trending = () => {
  const options = {
    items: 4,
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
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },

      1000: {
        items: 4,
      },
    },
    navText: [
      '<i class="lnr lnr-arrow-left prev"></i>',
      '<i class="lnr lnr-arrow-right next"></i>',
    ],
  };
  return (
    <Scoped css={css}>
      <div className="trending">
        {/* <!-- --------------  simple card  ----------------> */}
        <div className="card card--fullwidth">
          <h3 className="highlight">ट्रेन्डिंग</h3>

          <div className="slider-wrapper">
            <OwlCarousel className="owl-theme" {...options}>
              {Items?.map((a, idx) => (
                <SlideItem key={idx} {...a} />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </Scoped>
  );
};

export default Trending;

const SlideItem = ({ title, image, tag }) => {
  return (
    <div className="row row-width25 w-100">
      <div className="img-holder holder-hw25">
        <Link to="/single-page" className="img-link">
          <img src={image.default} alt={title} className="img" />
        </Link>
        <Tags title={tag} tagClass="card-img__tag" />
      </div>
      <div className="content align-left padding-top1 w-100">
        <Link to="/single-page" className="title">
          {title}
        </Link>
      </div>
    </div>
  );
};

const Items = [
  {
    title: "कांग्रेसले राख्यो सरकारसँग ९ बुँदे माग",
    image: require("../../assets/img/mic.jpg"),
    tag: "अर्थ",
  },
  {
    title: "प्रधानमन्त्रीले आज संसदमा सम्बोधन गर्ने",
    image: require("../../assets/img/girl-shoping.jpg"),
    tag: "राष्ट्रिय",
  },
  {
    title:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    image: require("../../assets/img/portrait.jpg"),
    tag: "अन्तराष्ट्रिय",
  },
  {
    title: "खाद्यको पहुँचबाट वञ्चित गराएमा १० वर्षसम्म कैद हुन सक्छ",
    image: require("../../assets/img/actress1.jpg"),
    tag: "अर्थ",
  },
  {
    title:
      "राजा वीरेन्द्रकै पालामा बनेको थियो टुँडिखेललाई खुला पार्क बनाउने योजना",
    image: require("../../assets/img/portrait.jpg"),
    tag: "अन्तराष्ट्रिय",
  },
  {
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिब",
    image: require("../../assets/img/actress1.jpg"),
    tag: "राष्ट्रिय",
  },
  {
    title:
      "श्रीलंका तथा बर्मा राष्ट्रप्रमुखले लुम्बिनीको भ्रमण गर्ने, यस्तो छ तयारी",
    image: require("../../assets/img/portrait.jpg"),
    tag: "अन्तराष्ट्रिय",
  },
];

const css = `
& .holder-hw25 {
  height: 18rem;
  width: 100%;
}
& .row-width25 {
  width: 26rem;
  margin: 0 1rem;
}
& .row-width25:first-child {
  margin-left: 0;
}
& .row-width25:last-child {
  margin-right: 0;
}

/* --------trending slider ------------  */

& .slider-wrapper {
  position: relative;
  margin-top: 2rem;
}

& .prev,
& .next {
  position: absolute;
  top: 24%;
  z-index: 10;
  cursor: pointer;
}
& .prev {
  left: -2.5rem;
}
& .next {
  right: -2.5rem;
}
@media only screen and (max-width: 1200px) {
  & .holder-hw25 {
    height: 17rem;
  }
  & .row-width25 {
    width: 23rem;
  }
}
@media only screen and (max-width: 1000px) {
  & .holder-hw25 {
    height: 20rem;
  }
  & .row-width25 {
    width: 28rem;
    margin-right: 2rem;
  }
  & .title {
    font-size: 1.8rem;
  }
}
@media only screen and (max-width: 850px) {
  & .holder-hw25 {
    height: 18rem;
  }
  & .row-width25 {
    width: 22rem;
    margin-right: 2rem;
  }
}
@media only screen and (max-width: 700px) {
  & .holder-hw25 {
    height: 20rem;
  }
  & .row-width25 {
    width: 28rem;
    margin-right: 2rem;
  }
}
@media only screen and (max-width: 600px) {
  & .holder-hw25 {
    height: 18rem;
  }
  & .row-width25 {
    width: 23rem;
    margin-right: 2rem;
  }
}
@media only screen and (max-width: 500px) {
  & .holder-hw25 {
    height: 23rem;
  }
  & .row-width25 {
    width: 100%;
    margin-right: 2rem;
  }
}

`;
