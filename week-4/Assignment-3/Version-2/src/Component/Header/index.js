import React from "react";
import DefaultMenu from "./DefaultMenu";
import MobileMenu from "./MobileMenu";

const Header = (props) => (
  <header className="main-header">
    <h1 className="name">
      <a href="/#">CCA</a>
    </h1>

    <DefaultMenu />
    <MobileMenu openMenu={props.openMenu} closeMenu={props.closeMenu} />
  </header>
);

export default Header;
