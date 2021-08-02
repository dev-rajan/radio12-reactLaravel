import { Scoped } from "kremling";
import React from "react";
import SearchIcon from "../../assets/img/search.svg";

const Search = () => {
  return (
    <>
      <Scoped css={css}>
        <div className="search">
          <form action="#" className="form">
            <img src={SearchIcon} alt="search-icon" className="search__icon" />
            <input
              type="text"
              className="search__input"
              placeholder="सर्च गर्नुहोस"
            />
          </form>
        </div>
      </Scoped>
    </>
  );
};

export default Search;

const css = `
& .search__icon{
    width: 2rem;
    margin: 0 0 -3rem 1rem;
  }
 & .search__input{
    width: 97%;
    font-size: 1.6rem;
    margin-left: 2.5%;
    font-family: inherit;   
    background-color: transparent;
    padding: 0 1rem 0 3rem;
    border: none;
    border-bottom: 1.5px solid var(--search-color);
  }
 & .search__input:focus{
    outline: none;
    color: var(--search-color);
  }
 & .search__input::-webkit-input-placeholder{
    color:var(--search-color);
    font-size: 1.5rem;
  }
`;
