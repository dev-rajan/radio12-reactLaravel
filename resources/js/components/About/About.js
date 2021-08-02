import { Scoped } from "kremling";
import React from "react";
import PageSidebar from "../common/sidebar/PageSidebar";
import Breadcrumb from "../utility/Breadcrumb";
import SpecialProgram from "../utility/SpecialProgram";
import Actress1 from "../../assets/img/actress1.jpg";
import Avatar from "../../assets/img/avatar.svg";
import Diamond from "../../assets/img/diamond.svg";
import Square from "../../assets/img/squares.svg";

const About = () => {
  return (
    <Scoped css={css}>
      <div className="page-wraper">
        <main>
          <div className="main-side">
            <Breadcrumb title="About" />
            <h3 className="highlight">About Us</h3>
            <div className="about">
              <img src={Actress1} alt="About Us" className="about-img" />
              <div className="about-content">
                <h4 className="about-title">Message from Chairman</h4>
                <p className="about-detail">
                  Nulla aliquam nisi sed lorem rhoncus ut adipiscing leo semper.
                  Vestibulum sit amet libero ante, a porta augue. Morbi ornare,
                  leoa tristique rutrum, arcu nulla ornare purus, et pharetra
                  tortor lectus at lectus. Cras congue rhoncus eros et
                  facilisis. Maecenasvehicula pretium turpis, in volutpat mauris
                  imperdiet vel. Nulla facilisi. Sed at justo sem, at iaculis
                  ligula phasellus ligula tortor.
                </p>
              </div>
            </div>

            <div className="about-list">
              <div className="about-list__head">
                <div className="about-list__icon-holder">
                  <img src={Avatar} alt="" className="about-list__icon" />
                </div>
                <h4 className="about-list__title">About Us</h4>
              </div>
              <p className="about-list__detail">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over he years, sometimes by
                accident, sometimes on purpose (injected humour and the like
              </p>
            </div>

            <div className="about-list">
              <div className="about-list__head flex-right">
                <h4 className="about-list__title margin-rgt">Our Histroy</h4>
                <div className="about-list__icon-holder">
                  <img src={Diamond} alt="" className="about-list__icon" />
                </div>
              </div>
              <p className="about-list__detail">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>

            <div className="about-list">
              <div className="about-list__head">
                <div className="about-list__icon-holder">
                  <img src={Square} alt="" className="about-list__icon" />
                </div>
                <h4 className="about-list__title">Our Background</h4>
              </div>
              <p className="about-list__detail">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure n words, consectetur, from a Lorem Ipsum
                passage, and going through the cites of the word in classical
                literature, discovered the undoubtable source. Lorem Ipsum comes
                from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                Malorum" (The Extremes of Good and Evil) by Cicero, written in
                45 BC. This book is a treatise on the theory of ethics, very
                popular during the Renaissance.
              </p>
            </div>

            <SpecialProgram />
          </div>

          <div className="right-side">
            <PageSidebar />
          </div>
        </main>
      </div>
    </Scoped>
  );
};

export default About;

const Desc = ({ imageUrl, title, desc }) => {
  return (
    <div className="about-list">
      <div className="about-list__head">
        <div className="about-list__icon-holder">
          <img src={imageUrl} alt={title} className="about-list__icon" />
        </div>
        <h4 className="about-list__title">{title}</h4>
      </div>
      <p className="about-list__detail">{desc}</p>
    </div>
  );
};

const css = `
& .about{
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
}
& .about-img{
    width: 40%;
    height: 32rem;
    object-fit: cover;
    border-radius: 10px;
}
& .about-content{
    width: 58%;
}
& .about-title{
font-size: 2.2rem;
color: var(--title-text-color);
margin-bottom: 2rem;
}
& .about-detail{
    font-size: 1.9rem;
    color: var(--content-text-color);
    line-height: 1.4;
}
& .about-list{
    margin-top: 4rem;
}

& .about-list__head{
    display: flex;
    align-items: center;
}
& .about-list__icon-holder{
    position: relative;
    border: 3px solid var(--primary-color);
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
}
& .about-list__icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5rem;
    height: 5rem;

}
& .about-list__title{
    font-size: 2.2rem;
    color: var(--title-text-color);
    margin-left: 2.5rem;
}
& .about-list__detail{
    width: 70%;
    text-align: center;
    margin: auto;
    font-size: 1.9rem;;
    color: var(--content-text-color);
    line-height: 1.5;
}
& .flex-right{
    justify-content: flex-end;
}
& .margin-rgt{
margin-right: 2.5rem;
}
@media only screen and (max-width: 500px) {
   & .about{
        display: block;
    }
   & .about-img{
        width: 100%;
    }
   & .about-content{
        width: 100%;
        margin-top: 1rem;
    }
   & .about-list__detail{
        width: 100%;
        margin-top: 1rem;
    }
}

`;
