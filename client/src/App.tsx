import React from "react";
import "./App.scss";
import { useTranslation } from "react-i18next";
import "./i18next";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";

const App: React.FC = () => {
  const { i18n } = useTranslation(["main"]);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog/>}/>
      </Routes>

      <Footer />
    </div>
  );
};
export default App;
