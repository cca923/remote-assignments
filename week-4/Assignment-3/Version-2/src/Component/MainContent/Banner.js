import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <h1 className="headline" onClick={props.changeHeadline}>
        Welcome to my Turkey Travel Gallery
      </h1>
      <span className="tagline">- 土耳其的四個城市 -</span>
    </div>
  );
};

export default Banner;
