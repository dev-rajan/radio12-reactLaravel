import { Scoped } from "kremling";
import React from "react";
import Date from "./Date";
import Ham from "./Ham";
import UpNavList from "./UpNavList";

const UpNav = () => {
  return (
    <Scoped css={css}>
      <nav className="up-nav">
        <Date />

        <UpNavList />

        <Ham />
      </nav>
    </Scoped>
  );
};

export default UpNav;

const css = `
& .up-nav{
    position: relative;
    width: 100%;
    height: 5.5rem;
    padding: 0 4.5rem;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
@media only screen and (max-width: 1200px) {
    & .up-nav{
        padding: 0 3.5rem;
    }
}
@media only screen and (max-width: 1050px) {
    & .up-nav{
        padding: 0 2.5rem;
    }
}
@media only screen and (max-width: 750px) {
    & .up-nav{
        padding: 0 3rem;
    }
}
@media only screen and (max-width: 500px) {
    & .up-nav{
        background-color:#0b7174;
    }
}
@media only screen and (max-width: 360px) {
    & .up-nav{
        z-index: 100;
    }
}

`;
