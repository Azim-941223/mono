import React from "react";
import "./App.scss";
import "./i18next";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FurnitureCatalog from "./components/FurnitureCatalog/FurnitureCatalog";
import InteriorItems from "./components/InteriorItems/InteriorItems";
import Beds from "./components/Catalog/Beds/Beds";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage/>} />
        <Route path="/furniture" element={<FurnitureCatalog />} />
        <Route path="/interior" element={<InteriorItems />} />
        <Route path="/beds" element={<Beds />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
