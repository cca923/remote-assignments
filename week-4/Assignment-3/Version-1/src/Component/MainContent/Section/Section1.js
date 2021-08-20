import React from "react";

const Section1 = () => {
  return (
    <section className="section" id="section-1">
      <h2>Selçuk</h2>
      <div className="row">
        <div className="primary col">
          <h3>Efes</h3>
          <img className="feat-img" src="img/Selçuk/1.png" alt="Efes" />
          <p className="introduction">古羅馬大道</p>
        </div>

        <div className="secondary col">
          <h3>Efes</h3>
          <img className="feat-img" src="img/Selçuk/2.png" alt="Efes" />
          <p className="introduction">古代劇場</p>
        </div>

        <div className="tertiary col">
          <h3>Efes</h3>
          <img className="feat-img" src="img/Selçuk/3.png" alt="Efes's cat" />
          <p className="introduction">古蹟裡的貓</p>
        </div>

        <div className="forth col">
          <h3>City Market</h3>
          <img className="feat-img" src="img/Selçuk/4.png" alt="city market" />
          <p className="introduction">假日市集</p>
        </div>
      </div>
    </section>
  );
};
export default Section1;
