import React from "react";
import "./index.css";
import Header from "./Component/Header";
import MainContent from "./Component/MainContent";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
