import React from "react";

const Section4 = () => {
  return (
    <section className="section hidden" id="section-4">
      <h2>İstanbul</h2>
      <div className="row">
        <div className="primary col">
          <h3>Taksim Square</h3>
          <img className="feat-img" src="img/İstanbul/1.png" alt="Taksim" />
          <p className="introduction">獨立大街及路面電車</p>
        </div>

        <div className="secondary col">
          <h3>Galata Bridge</h3>
          <img
            className="feat-img"
            src="img/İstanbul/2.png"
            alt="Galata bridge"
          />
          <p className="introduction">搭渡輪橫跨海峽</p>
        </div>

        <div className="tertiary col">
          <h3>Ayasofya Müzesi</h3>
          <img className="feat-img" src="img/İstanbul/3.png" alt="Ayasofya" />
          <p className="introduction">聖索菲亞大教堂</p>
        </div>

        <div className="forth col">
          <h3>Süleymaniye Mosque</h3>
          <img className="feat-img" src="img/İstanbul/4.png" alt="mosque" />
          <p className="introduction">清真寺</p>
        </div>
      </div>
    </section>
  );
};
export default Section4;
