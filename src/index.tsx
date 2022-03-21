import React from "react";
import ReactDOM from "react-dom";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
