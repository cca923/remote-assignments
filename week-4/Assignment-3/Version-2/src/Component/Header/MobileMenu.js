import React from "react";

const MobileMenu = (props) => {
  return (
    <div>
      <img
        className="dropbtn"
        src="img/hamburger-menu.png"
        alt="hamburger-menu"
        onClick={props.openMenu}
      />

      <div className="mobile-menu hidden">
        <div className="mobile-nav">
          <ul>
            <li>
              <a href="#section-1">Selçuk</a>
            </li>
            <li>
              <a href="#section-2">Kaş</a>
            </li>
            <li>
              <a href="#section-3">Cappadocia</a>
            </li>
            <li>
              <a href="#section-4">İstanbul</a>
            </li>
          </ul>
        </div>
        <div>
          <img
            className="closebtn"
            src="img/close.png"
            alt="close-icon"
            onClick={props.closeMenu}
          />
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
