import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../../../utility/Search";

const SideNav = ({ showMenu, setShowMenu }) => {
  const handleClose = () => {
    if (showMenu === true) {
      setShowMenu(false);
    }
  };
  return (
    <Scoped css={css}>
      <div className="side-nav-modal">
        <div className="close" onClick={handleClose}>
          &#x2573;
        </div>
        <div className="side-nav__content">
          <ul className="side-nav-list">
            <li className="search">
              <Search />
            </li>
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
      </div>
    </Scoped>
  );
};

export default SideNav;

const List = ({ url, title }) => {
  return (
    <li className="side-nav-item">
      <Link to={url} className="side-nav-link">
        {title}
      </Link>
    </li>
  );
};

const css = `
& .side-nav-modal {
    position: fixed;
    z-index: 3000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: table;
    transition: opacity 0.5s ease;
  }
  & .side-nav__content {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 30rem;
    background-color: rgb(236, 255, 255);
  }
  & .side-nav-list {
    position: absolute;
    top: 10%;
    width: 100%;
    height: 90%;
    list-style-type: none;
    text-align: center;
    padding-bottom: 5rem;
    overflow-y: auto;
  }
  & .search {
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    text-align: left;
  }
  & .side-nav-list::-webkit-scrollbar {
    width: 0;
  }
  
  & .side-nav-link {
    display: inline-block;
    width: 70%;
    padding: 1.5rem 1rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
    border-right: 5px solid transparent;
    background-image: var(--nav-bg-gradient);
    background-size: 230%;
    transition: all 0.5s ease-in-out;
  }
  & .side-nav-link:hover {
    border-right: 5px solid var(--highlight-color);
    background-position: 100%;
    color: #fff;
  }
  & .close {
    z-index: 100;
  }
  
  & .modal-enter {
    opacity: 0;
  }
  
  & .modal-leave-active {
    opacity: 0;
  }
`;
