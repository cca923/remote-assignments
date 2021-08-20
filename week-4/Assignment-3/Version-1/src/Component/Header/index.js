import React from "react";
import DefaultMenu from "./DefaultMenu";
import Dropdown from "./Dropdown";

const Header = () => (
  <header className="main-header">
    <h1 className="name">
      <a href="/#">CCA</a>
    </h1>

    <DefaultMenu />
    <Dropdown />
  </header>
);

export default Header;
