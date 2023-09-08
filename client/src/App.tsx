import React from "react";
import "./App.scss";
import "./i18next";
//const App: React.FC = () => {
//  return (
//    <div className="App">
//      <SliderComponent />
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Accessoires from "./components/Accessoires/Accessoires";
import Contacts from "./components/Contacts/Contacts";
import Catalog from "./components/Catalog/Catalog";
import CatalogPage from "./pages/CatalogPage";
import Payment from "./components/Payment/Payment";
import InteriorItems from "./components/InteriorItems/InteriorItems";
import Beds from "./components/Catalog/Beds/Beds";
import Armchairs from "./components/Catalog/Armchairs/Armchairs";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogpage" element={<Catalog/>} />
        <Route path="/catalog" element={<CatalogPage/>} />
        <Route path="/contact" element={<Contacts/>} />
        <Route path="/accessoires" element={<Accessoires/>} />
        <Route path="/childroom" element={<Beds/>} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/interior" element={<InteriorItems />} />
        <Route path="/beds" element={<Beds />} />
        <Route path="/armchairs" element={<Armchairs />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
