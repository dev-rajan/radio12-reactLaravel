import { Scoped } from "kremling";
import React from "react";

const Comment = ({ children }) => {
  return (
    <Scoped css={css}>
      <div className="card comment">
        <h3 className="comment-title">कमेन्ट गर्नेहोस्</h3>
        {children}
      </div>
    </Scoped>
  );
};

export default Comment;

const css = `
& .comment {
    padding: 1.5rem 2.5rem;
    margin-top: 2rem;
  }
 & .comment-title {
    color: var(--primary-color);
    margin-bottom: 1rem;
    border-bottom: 3px solid var(--highlight-color);
    display: inline-block;
  }
`;
