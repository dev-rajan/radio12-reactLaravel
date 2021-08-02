import { Scoped } from "kremling";
import React, { useState } from "react";
import SideNav from "./SideNav";

const Ham = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    if (showMenu === false) {
      setShowMenu(true);
    }
  };
  return (
    <Scoped css={css}>
      <div>
        <div className="side-nav" onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {showMenu ? (
          <SideNav showMenu={showMenu} setShowMenu={setShowMenu} />
        ) : (
          ""
        )}
      </div>
    </Scoped>
  );
};

export default Ham;

const css = `
/* -------------side-nav --------------*/
& .side-nav {
  position: relative;
  height: 2rem;
  width: 25px;
  display: none;
  cursor: pointer;
}
& .side-nav span {
  position: absolute;
  top: 0;
  height: 2px;
  width: 25px;
  background-color: var(--primary-color);
}

& .side-nav span:nth-child(2) {
  top: 8px;
}
& .side-nav span:nth-child(3) {
  top: 16px;
}
@media only screen and (max-width: 1050px) {
  & .side-nav {
    display: inline-block;
  }
}
@media only screen and (max-width: 500px) {
  & .side-nav {
    z-index: 100;
  }
  & .side-nav span {
    background-color: white;
  }
}
`;
