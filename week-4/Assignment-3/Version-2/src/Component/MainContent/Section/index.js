import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Section = (props) => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />

      <div className="show-more-btn">
        <button onClick={props.handleShowMoreCity}>Show More City!</button>
      </div>

      <Section4 />
    </div>
  );
};
export default Section;
