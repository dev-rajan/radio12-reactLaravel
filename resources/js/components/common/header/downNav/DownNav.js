import React from "react";
import { Link } from "react-router-dom";
import { Scoped } from "kremling";
import Search from "../../../utility/Search";

const categories = [
  "समाज",
  "राष्ट्रिय",
  "अन्तराष्ट्रिय",
  "राजनीति",
  "मनोरञ्जन",
  "अर्थ",
  "कला",
  "विज्ञान",
  "स्वास्थ्य",
  "विचार",
  "साहित्य",
  "ब्लग",
];

const DownNav = () => {
  return (
    <>
      <Scoped css={css}>
        <nav className="down-nav">
          <ul className="down-nav__list">
            <li className="down-nav__item">
              <Link to="/" className="down-nav__link router-link-active">
                गृहपृष्ठ
              </Link>
            </li>
            {categories
              .map((a, index) => (
                <NavItem key={index} url={`/categories`} title={a} />
              ))
              .slice(0, 7)}
            <li className="down-nav__item dropdown">
              <a className="down-nav__link">
                ग्यालरी
                <span className="down-arrow">&#10095;</span>
              </a>
              <div className="dropdown-list">
                <DropItem url={`/images`} title="फोटो ग्यालरी" />
                <DropItem url={`/video`} title="भिडियो ग्यालरी" />
              </div>
            </li>
            <li className="down-nav__item dropdown">
              <a className="down-nav__link">
                अन्य
                <span className="down-arrow">&#10095;</span>
              </a>
              <div className="dropdown-list">
                {categories
                  ?.map((a, index) => <DropItem key={index} title={a} />)
                  .slice(7, 12)}
              </div>
            </li>
            <li className="down-nav__item search">
              <Search />
            </li>
          </ul>
        </nav>
      </Scoped>
    </>
  );
};

export default DownNav;

const NavItem = ({ url, title }) => {
  return (
    <li className="down-nav__item">
      <Link to={url} className="down-nav__link">
        {title}
      </Link>
    </li>
  );
};

const DropItem = ({ url, title }) => {
  return (
    <Link to={url} className="dropdown-link">
      {title}
    </Link>
  );
};

const css = `
/*---------------- Down Navigation---------------------- */
& .down-nav {
  position: relative;
  width: 100%;
  height: 6.5rem;
  padding: 0 4.5rem;
  background-color: var(--primary-color);
  z-index: 2000;
}
& .down-nav__list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
& .down-nav__item {
  height: 100%;
  list-style-type: none;
}

& .down-nav__link {
  display: inline-block;
  padding: 2.3rem 1.5rem 1.5rem;
  align-self: center;
  font-size: 1.7rem;
  font-weight: 500;
  margin-right: 0.6rem;
  color: white;
  text-decoration: none;
  border-bottom: 5px solid transparent;
}
& .down-nav__link:hover {
  border-bottom: 5px solid var(--highlight-color);
}
& .router-link-active {
  border-bottom: 5px solid var(--highlight-color);
}
& .dropdown-list .router-link-active {
  background: var(--secondary-color);
  border-bottom: none;
}
& .search {
  flex: 10%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}
@media only screen and (max-width: 1050px) {
  & .down-nav {
    display: none;
  }
}

`;
