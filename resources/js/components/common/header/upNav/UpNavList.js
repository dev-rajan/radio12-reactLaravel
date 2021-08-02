import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";

const UpNavList = () => {
  return (
    <Scoped css={css}>
      <ul className="up-nav__list">
        <List url={`/`} title="Home" />
        <List url={`/about`} title="About" />
        <List url={`/programme`} title="Programme Schedule" />
        <List url={`/podcast`} title="Podcast" />
        <List url={`/advertisement`} title="Advertisement" />
        <List url={`/team`} title="Our Team" />
        <List url={`/Contact`} title="Contact" />
      </ul>
    </Scoped>
  );
};

export default UpNavList;

const List = ({ url, title }) => {
  return (
    <li className="up-nav__item">
      <Link to={url} className="up-nav__link">
        {title}
      </Link>
    </li>
  );
};

const css = `
& .up-nav__list {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  & .up-nav__item {
    height: 100%;
    list-style-type: none;
  }
  & .up-nav__link {
    display: inline-block;
    padding: 1.75rem 1.2rem;
    text-decoration: none;
    color: var(--up-nav-color);
    font-weight: 500;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    transition: 0.4s;
  }
  & .up-nav__link:hover {
    background-color: var(--up-nav-hover-color);
    /* color: white; */
  }
  & .dropdown-list {
    top: 100%;
    border-top: none;
  }
  & .dropdown-link {
    font-size: 1.6rem;
    font-weight: 500;
  }
  @media only screen and (max-width: 1200px) {
    & .up-nav__link {
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 1050px) {
    & .up-nav__list {
      display: none;
    }
  }
  
`;
