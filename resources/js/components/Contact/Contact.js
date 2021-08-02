import { Scoped } from "kremling";
import React from "react";
import SquareAd from "../common/ads/SquareAd";
import OnAir from "../common/sidebar/OnAir";
import Breadcrumb from "../utility/Breadcrumb";
import LocationIcon from "../../assets/img/location.svg";
import PhoneIcon from "../../assets/img/phone.svg";
import MailIcon from "../../assets/img/mail.svg";
import { Address } from "../common/footer/Footer";

const Contact = () => {
  return (
    <Scoped css={css}>
      <div className="page-wraper">
        {/* <!-- <SinglePic/> --> */}
        <main>
          <div className="main-side">
            <Breadcrumb title="Contact" />
            <div className="contact">
              <div className="address-wraper">
                <h3 className="highlight">Our Address</h3>
                <p className="comp-desc">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>
                <div className="comp-address">
                  <Address
                    Icon={LocationIcon}
                    title="Minbhawan, Kathmandu,Nepal"
                  />
                  <Address
                    Icon={PhoneIcon}
                    title="Marketing: +977-1-411 59 34"
                  />
                  <Address Icon={MailIcon} title="info@softnep.com" />
                </div>
              </div>
              <div className="feedback">
                <h3 className="highlight">Leave Us A Message</h3>
                <form action="#" className="feedback-form">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Address"
                    required
                  />
                  <textarea
                    name="message"
                    className="form-input"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                  <input
                    type="submit"
                    value="Send Message"
                    className="form-submit"
                  />
                </form>
              </div>
            </div>

            <div className="map"></div>
          </div>

          <div className="right-side">
            <SquareAd />
            <OnAir />
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default Contact;

const css = `
& .contact {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
  }
 & .address-wraper {
    width: 48%;
  }
 & .feedback {
    width: 48%;
  }
 & .comp-desc {
    margin: 2rem 0;
    width: 100%;
    color: var(--title-text-color);
    font-size: 1.8rem;
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
    color: var(--title-text-color);
    font-size: 1.8rem;
  }
  /* --------form------ */
 & .feedback-form {
    width: 100%;
  }
 & .form-input {
    padding: 1.5rem 1rem;
    border: none;
    background-color: white;
    display: block;
    box-shadow: 0 2px 5px #cccccc;
    margin-bottom: 2rem;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    color: var(--title-text-color);
  }
 & .form-input:first-child {
    margin-top: 2rem;
  }
 & .form-input:focus {
    outline-color: var(--primary-color);
    opacity: 0.8;
  }
 & .form-submit {
    padding: 1.2rem 2rem;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 400;
    position: relative;
    cursor: pointer;
    background-image: var(--btn-gradient);
    background-size: 230%;
    transition: all 0.4s ease-in-out;
  }
 & .form-submit:hover {
    background-position: 100%;
  }
  
 & .map {
    width: 100%;
    height: 40rem;
    background-color: #707070;
    border-radius: 10px;
    overflow: hidden;
  }
  @media only screen and (max-width: 900px) {
   & .contact {
      display: block;
    }
   & .address-wraper {
      width: 100%;
    }
   & .feedback {
      width: 85%;
      margin-top: 4rem;
    }
  }
  
  @media only screen and (max-width: 500px) {
   & .feedback {
      width: 100%;
    }
  }
`;
