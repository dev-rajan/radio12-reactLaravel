import { Scoped } from "kremling";
import React from "react";
import { Link } from "react-router-dom";

const Tags = ({ title, tagClass }) => {
  return (
    <Scoped css={css}>
      <div className={`tag-wrapper ${tagClass}`}>
        <Link to="/categories" className="tag">
          {title}
        </Link>
      </div>
    </Scoped>
  );
};

export default Tags;

const css = `
/* -----tag----- */
& .tag {
  display: inline-block;
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  color: var(--tag-text-color);
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 3px;
  cursor: pointer;
  background-image: var(--tag-gradient);
  background-size: 230%;
  transition: all 0.5s ease-in-out;
}
& .tag:hover {
  background-position: 100%;
}
& .card-img__tag {
  position: absolute;
  margin-left: 2.5rem;
  z-index: 5;
}

`;
