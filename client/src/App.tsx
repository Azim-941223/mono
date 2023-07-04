import React from "react";
import "./App.scss";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import "./i18next";
import Test from "./Test";
const App: React.FC = () => {
  const { t, i18n } = useTranslation(["main"]);
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <h1>{t("App.title")}</h1>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};
export default App;
