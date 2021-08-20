import React from "react";

const Section3 = () => {
  return (
    <section className="section" id="section-3">
      <h2>Cappadocia</h2>
      <div className="row">
        <div className="primary col">
          <h3>Göreme</h3>
          <img
            className="feat-img"
            src="img/Cappadocia/1.png"
            alt="open-air museum"
          />
          <p className="introduction">教堂及修道院</p>
        </div>

        <div className="secondary col">
          <h3>Avanos</h3>
          <img className="feat-img" src="img/Cappadocia/2.png" alt="Avanos" />
          <p className="introduction">陶器為名的小鎮</p>
        </div>

        <div className="tertiary col">
          <h3>Devrent</h3>
          <img className="feat-img" src="img/Cappadocia/3.png" alt="Devrent" />
          <p className="introduction">黃褐色乾枯草原及岩石</p>
        </div>

        <div className="forth col">
          <h3>Göreme Panorama</h3>
          <img className="feat-img" src="img/Cappadocia/4.png" alt="Panorama" />
          <p className="introduction">遼闊的地貌</p>
        </div>
      </div>
    </section>
  );
};
export default Section3;
