
import React from 'react'
import { useTranslation } from "react-i18next";

const App:React.FC = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
  return (
    <h1 className='App'>{t ("app.title")}</h1>
  )
}

export default App
