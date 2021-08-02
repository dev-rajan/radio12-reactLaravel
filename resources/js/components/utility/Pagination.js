import { Scoped } from "kremling";
import React from "react";
import Prev from "../../assets/img/next.svg";

const Pagination = () => {
  return (
    <Scoped css={css}>
      <div className="pagination">
        <ButtonPrev imageUrl={Prev} title="PREV" />
        <p className="page-detail" href="#">
          Page 1 of 10
        </p>
        <ButtonNext imageUrl={Prev} title="NEXT" />
      </div>
    </Scoped>
  );
};

export default Pagination;

const ButtonPrev = ({ imageUrl, title }) => {
  return (
    <a className="page-prev" href="#">
      <img className="icon prev-arrow" src={imageUrl} alt={title} />
      <span className="prev-title">{title}</span>
    </a>
  );
};

const ButtonNext = ({ imageUrl, title }) => {
  return (
    <a className="page-next" href="#">
      <span className="next-title"> {title} </span>
      <img className="icon next-arrow" src={imageUrl} alt={title} />
    </a>
  );
};

const css = `
& .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  & .page-prev,
  & .page-next {
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    color: white;
    border-radius: 50px;
    background-color: var(--pagination-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .page-prev:hover & .prev-arrow {
    transform: scale(1.2);
  }
  & .page-prev:hover & .prev-title {
    transform: scale(1.2);
  }
  & .page-next:hover & .next-arrow {
    transform: scale(1.2) rotate(180deg);
  }
  & .page-next:hover & .next-title {
    transform: scale(1.2);
  }
  & .page-detail {
    padding: 1rem 2rem;
    border-radius: 50px;
    color: var(--pagination-color);
    font-size: 1.3rem;
    font-weight: 700;
    background-color: #e1e1e1;
  }
  & .prev-title,
  & .next-title {
    font-size: 1.3rem;
    line-height: 1.2;
  }
  & .next-arrow {
    transform: rotate(180deg);
    margin-left: 1rem;
    width: 1.3rem;
  }
  & .prev-arrow {
    margin-right: 1rem;
    width: 1.3rem;
  }
  
`;
