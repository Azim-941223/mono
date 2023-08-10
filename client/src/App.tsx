import React from "react";
import "./App.scss";
import "./i18next";
import SliderComponent from "./components/slider/SliderComponent";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FurnitureCatalog from "./components/FurnitureCatalog/FurnitureCatalog";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <SliderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/furniture" element={<FurnitureCatalog />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
