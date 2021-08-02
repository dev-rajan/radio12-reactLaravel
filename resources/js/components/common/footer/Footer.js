import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../../assets/img/facebook.svg";
import Twitter from "../../../assets/img/twitter.svg";
import Youtube from "../../../assets/img/youtube.svg";
import Logo from "../../../assets/img/logo.png";
import LocationIcon from "../../../assets/img/location.svg";
import PhoneIcon from "../../../assets/img/phone.svg";
import MailIcon from "../../../assets/img/mail.svg";
import ScrollTop from "../../utility/ScrollTop";

const MostReadItem = [
  {
    title:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    content:
      "तीन दिनदेखि तनावग्रस्त बन्दै गएको महेन्द्रनगरको अवस्था शुक्रबार केही सामान्य बनेको छ । स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको अवस्था केही सामान्य बनेको हो  स्थानीयको माग अनुसार सीडीयो र प्रहरी प्रमुखहरुको सरुवापछि महेन्द्रनगरको हो ।",
    imageUrl: require("../../../assets/img/photographer.jpg"),
  },
  {
    title: "पानीजहाजको लोभ मा यसरी फकाउन सक्छ.",
    content:
      "विमस्टेकका सबै राष्ट्रसँग नेपालको व्यापार घाटामा, उद्योगमा लगानी प्रतिबद्धता दुई देशको मात्र",
    imageUrl: require("../../../assets/img/ionut.jpg"),
  },
  {
    title: "अनावश्यक कर नलगाउन राजपाद्वारा स्थानीय जनप्रतिनिधिलाई..",
    content: "गृहमन्त्री रामबहादुर थापा बादलले मंगलबार संसद्मा पेस गर्नुभएको..",
    imageUrl: require("../../../assets/img/farsai.jpg"),
  },
];

const Footer = () => {
  return (
    <Scoped css={css}>
    <footer className="footer">
      <div className="footer__wraper">
        <div className="footer__part1">
          <img src={Logo} alt="" className="footer__logo" />
          <p className="comp-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="comp-address">
            <Address Icon={LocationIcon} title="Minbhawan, Kathmandu,Nepal" />
            <Address Icon={PhoneIcon} title="Marketing: +977-1-411 59 34" />
            <Address Icon={MailIcon} title="info@softnep.com" />
          </div>
        </div>
        <div className="footer__part2">
          <h3 className="highlight footer-highlight">Important Links</h3>

          <ul className="impo-list">
            <List url={`/`} title="गृहपृष्ठ" />
            <List url={`/categories`} title="समाज" />
            <List url={`/categories`} title="राष्ट्रिय" />
            <List url={`/categories`} title="अन्तराष्ट्रिय" />
            <List url={`/categories`} title="राजनीति" />
            <List url={`/categories`} title="मनोरन्जन" />
            <List url={`/categories`} title="खेलकुद" />
            <List url={`/categories`} title="अर्थ" />
            <List url={`/images`} title="फोटो ग्यालरी" />
            <List url={`/video`} title="भिडियो ग्यालरी" />
            <List url={`/about`} title="About" />
            <List url={`/podcast`} title="Podcast" />
            <List url={`/programme`} title="Programme Schedule" />
            <List url={`/advertisement`} title="Advertisement" />
            <List url={`/team`} title="Our Team" />
            <List url={`/contact`} title="Contact" />
          </ul>
        </div>
        <div className="footer__part3">
          <h3 className="highlight footer-highlight">Most Read</h3>

          <div className="most-read">
            {MostReadItem?.map((a, index) => (
              <MostRead key={index} {...a} />
            ))}
          </div>
        </div>
        <div className="footer__part4">
          <h3 className="highlight footer-highlight">Follow Us On</h3>
          <div className="social">
            <Social Icon={Facebook} />
            <Social Icon={Twitter} />
            <Social Icon={Youtube} />
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2018 Copyright SoftNep Pvt Ltd. All rights reserved.
      </div>
      <ScrollTop />
    </footer>
    </Scoped>
  );
};

export default Footer;

export const Address = ({ title, Icon }) => {
  return (
    <div className="address">
      <img src={Icon} alt={title} className="address-icon" />
      <p className="address-title">{title}</p>
    </div>
  );
};

const List = ({ url, title }) => {
  return (
    <li className="impo-item">
      <Link to={url} className="impo-link">
        {title}
      </Link>
    </li>
  );
};

const MostRead = ({ imageUrl, title }) => {
  return (
    <div className="column">
      <div className="img-holder holder-hw13">
        <Link to="/single-page" className="img-link">
          <img src={imageUrl.default} alt={title} className="img" />
        </Link>
      </div>
      <div className="content content-width70">
        <Link to="/single-page" className="title f-title">
          {title}
        </Link>
      </div>
    </div>
  );
};

const Social = ({ Icon }) => {
  return (
    <div className="social__holder">
      <a className="social__link" href="">
        <img src={Icon} alt="" className="social__logo" />
      </a>
    </div>
  );
};

const css = `
& .footer-highlight {
  color: var(--footer-highlight-color);
}
& .holder-hw13 {
  height: 8rem;
  width: 28%;
}
& .content-width70 {
  width: 70%;
}
& .footer {
  position: relative;
  width: 100%;
  height: 50rem;
  margin-top: 3rem;
  background-size: cover;
}
& .footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--footer-bg-color);
  opacity: 0.8;
  z-index: 0;
}
& .footer__wraper {
  position: absolute;
  padding: 4rem 4.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
& .footer__part1 {
  width: 27%;
}
& .footer__logo {
  width: 20rem;
}
& .comp-desc {
  margin: 2rem 0;
  width: 100%;
  color: var(--footer-content-color);
}
& .address-icon {
  width: 2.5rem;
  height: 3rem;
  margin-right: 1rem;
}
& .address {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
  color: var(--footer-content-color);
}
& .footer__part2 {
  width: 20%;
}
& .impo-list {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
}
& .impo-item {
  width: 50%;
  margin-bottom: 2rem;
}
& .impo-link {
  text-decoration: none;
  color: var(--footer-content-color);
}
& .footer__part3 {
  width: 27%;
}
& .most-read {
  margin-top: 2rem;
}
& .column {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 2rem;
}
& .img-holder {
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  margin-right: 1.5rem;
  cursor: pointer;
}
& .img-holder:hover .img {
  transform: scale(1.1);
}
& .img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-out;
}
& .title {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--footer-content-color);
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
& .f-title{
  color: var(--footer-content-color)!important;
}
& .footer__part4 {
  width: 15%;
}
& .social {
  margin-top: 2rem;
}
& .social__link {
  display: inline-block;
  height: 5rem;
  width: 5rem;
  text-align: center;
  background: var(--social-bg-color);
  border-radius: 50%;
  cursor: pointer;
  margin-right: 2rem;
  transition: transform 0.3s ease-in;
}
& .social__link:hover {
  transform: scale(1.2);
}
& .social__logo {
  width: 2.5rem;
  margin-top: 1.3rem;
}
& .social__holder {
  margin-bottom: 1.5rem;
  text-align: center;
}

& .copyright {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #ffffff;
  font-size: 1.3rem;
  font-weight: 100;
  background: #000000;
  padding: 2rem 4.5rem;
}

@media only screen and (max-width: 900px) {
  & .footer__part1 {
    width: 35%;
    font-size: 1.7rem;
  }
  & .footer__part2 {
    width: 27%;
    font-size: 1.7rem;
  }
  & .footer__part3 {
    display: none;
  }
  & .footer__part4 {
    width: 20%;
  }
}
@media only screen and (max-width: 750px) {
  & .footer {
    height: 80rem;
  }
  & .footer__part1 {
    width: 48%;
    font-size: 1.8rem;
  }
  & .footer__part2 {
    width: 48%;
    font-size: 1.8rem;
  }
 & .footer__part4 {
    margin-top: 2rem;
    width: 20rem;
  }
 & .social {
    display: flex;
  }
}
@media only screen and (max-width: 750px) {
 & .footer {
    height: 83rem;
  }
 & .footer__wraper {
    display: block;
  }
 & .footer__part1 {
    width: 100%;
  }
 & .footer__part2 {
    width: 100%;
    margin-top: 2rem;
  }
 & .impo-item {
    width: 33%;
  }
 & .social {
    margin-top: 1rem;
  }
}
@media only screen and (max-width: 500px) {
  & .footer {
    height: 85rem;
  }
}

`;
