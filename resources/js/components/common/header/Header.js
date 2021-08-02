import React from "react";
import DownNav from "./downNav/DownNav";
import UpNav from "./upNav/UpNav";
import MainHeader from "./mainHeader/MainHeader";
import { Scoped } from "kremling";

const Header = () => {
  return (
    <Scoped css={css}>
      <div className="header">
        <UpNav />

        <MainHeader />

        <DownNav />
      </div>
    </Scoped>
  );
};

export default Header;

const css = `
/*---------------------------------- Header----------------------------- */
& .header {
  position: relative;
  width: 100%;
  height: 39rem;
  margin-bottom: 1.5rem;
}
@media only screen and (max-width: 750px) {
  & .header {
    height: 38rem;
  }
}
@media only screen and (max-width: 500px) {
  & .header {
    height: 33rem;
  }
}
@media only screen and (max-width: 360px) {
  & .header {
    height: 32rem;
  }
}
`;
