import React from "react";

const Section2 = () => {
  return (
    <section className="section" id="section-2">
      <h2>Kaş</h2>
      <div className="row">
        <div className="primary col">
          <h3>Kaş</h3>
          <img className="feat-img" src="img/Kaş/1.png" alt="light-tower" />
          <p className="introduction">出海前的燈塔</p>
        </div>

        <div className="secondary col">
          <h3>Kekova</h3>
          <img className="feat-img" src="img/Kaş/2.png" alt="kekova" />
          <p className="introduction">水面下的城墎</p>
        </div>

        <div className="tertiary col">
          <h3>Kaleköy</h3>
          <img className="feat-img" src="img/Kaş/3.png" alt="sarcophagus" />
          <p className="introduction">屋形石棺</p>
        </div>

        <div className="forth col">
          <h3>Boat trip</h3>
          <img className="feat-img" src="img/Kaş/4.png" alt="boat trip" />
          <p className="introduction">雙層遊船</p>
        </div>
      </div>
    </section>
  );
};
export default Section2;
