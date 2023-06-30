import React from "react";
import "./App.scss";
import { useTranslation } from "react-i18next";
import "./i18next";


const App:React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className='App'>
      <h1>{t("App.title")}</h1>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
    </div>
  );
};

export default App;
