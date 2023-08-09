import React from "react";
import "./App.scss";
import "./i18next";
import SliderComponent from "./components/slider/SliderComponent";
const App: React.FC = () => {
  return (
    <div className="App">
      <SliderComponent />
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage/>} />
      </Routes>

      <Footer />
    </div>
  );
};
export default App;
