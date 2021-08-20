import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <img
        className="dropbtn"
        src="img/hamburger-menu.png"
        alt="hamburger-menu"
      />
      <div className="dropdown-content">
        <a href="#section-1">Selçuk</a>
        <a href="#section-2">Kaş</a>
        <a href="#section-3">Cappadocia</a>
        <a href="#section-4">İstanbul</a>
      </div>
    </div>
  );
};
export default Dropdown;
