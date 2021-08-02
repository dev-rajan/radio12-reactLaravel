import { Scoped } from "kremling";
import React from "react";

const SeeMore = () => {
  return (
    <Scoped css={css}>
    <div className="see-more">
      <a className="see-more-btn">
        <span className="see-more-text">Read More</span>
        <span className="forward">&#x226B;</span>
      </a>
    </div>
    </Scoped>
  );
};

export default SeeMore;

const css = `
& .see-more {
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
}
& .see-more-btn {
  display: flex;
  cursor: pointer;
}
& .see-more-btn:hover .forward {
  transform: translate(4px);
}
& .see-more-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}
& .forward {
  margin: 0 0.3rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--highlight-color);
  transition: 0.2s ease-in-out;
}
`;
