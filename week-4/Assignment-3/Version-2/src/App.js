import React from "react";
import "./index.css";
import Header from "./Component/Header";
import MainContent from "./Component/MainContent";
import Footer from "./Component/Footer";

const App = () => {
  const openMenu = (e) => {
    e.preventDefault();
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.remove("hidden");
  };

  const closeMenu = (e) => {
    e.preventDefault();
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.add("hidden");
  };

  const changeHeadline = (e) => {
    e.preventDefault();
    const headline = document.querySelector(".headline");
    headline.textContent = "Have a Good Time!";
  };

  const handleShowMoreCity = (e) => {
    e.preventDefault();
    const section4 = document.querySelector("#section-4");
    const showMoreBtn = document.querySelector(".show-more-btn");
    section4.classList.remove("hidden");
    showMoreBtn.style.display = "none";
  };

  return (
    <div className="App">
      <Header openMenu={openMenu} closeMenu={closeMenu} />
      <MainContent
        changeHeadline={changeHeadline}
        handleShowMoreCity={handleShowMoreCity}
      />
      <Footer />
    </div>
  );
};

export default App;
