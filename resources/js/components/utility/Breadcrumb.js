import { Scoped } from "kremling";
import { Link } from "react-router-dom";
import React from "react";

const Breadcrumb = ({ title, category }) => {
  return (
    <Scoped css={css}>
      <ul className="breadcrumb">
        <li className="breadcrumb__item">
          <Link to="/" className="breadcrumb__link">
            गृहपृष्ठ
          </Link>
        </li>
        {category ? <li className="breadcrumb__item">{category}</li> : ""}
        <li className="breadcrumb__item">{title}</li>
      </ul>
    </Scoped>
  );
};

export default Breadcrumb;

const css = `
& .breadcrumb{
    margin-bottom: 2rem;
}
& .breadcrumb__item {
    display: inline;
    font-size: 14px;
    color:var(--title-text-color);
    font-weight: 700;
    cursor: pointer;
}
& .breadcrumb__item + .breadcrumb__item:before {
    padding:0 8px;
    font-size: 13px;
    color: var(--content-text-color);
    font-weight: 700;
    content: "/";
}
& .breadcrumb__item:last-child {
    color: var(--content-text-color);
    font-weight: 300;
    text-decoration: none;
    cursor: default;
}
@media only screen and (max-width: 750px) {
	& .breadcrumb {
		display: none;
	}
}

`;
