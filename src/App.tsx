import React from "react";
import Navbar from "./sections/Navbar";
import Wrapper from "./sections/Wrapper";
import Footer from "./sections/Footer";
import Background from "./components/Background";
import "./scss/index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Background />
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes><Route</Routes>
          <Wrapper />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
