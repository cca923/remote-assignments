import React from "react";
import Banner from "./Banner";
import Section from "./Section";

const MainContent = (props) => {
  return (
    <div className="main-content">
      <Banner changeHeadline={props.changeHeadline} />
      <Section handleShowMoreCity={props.handleShowMoreCity} />
    </div>
  );
};

export default MainContent;
