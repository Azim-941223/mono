import React from "react";
import "./App.scss";
import "./i18next";
import SliderComponent from "./components/slider/SliderComponent";
//const App: React.FC = () => {
//  return (
//    <div className="App">
//      <SliderComponent />
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Accessoires from "./components/Accessoires/Accessoires";
import Childroom from "./components/Childroom/Childroom";
import Furniture from "./components/Furniture/Furniture";
import Sofas from "./components/Sofas/Sofas";
import Offices from "./components/Offices/Offices";
import Plumbing from "./components/Plumbing/Plumbing";
import Lightning from "./components/Lightning/Lightning";
import Outside from "./components/Outside/Outside";
import Technic from "./components/Technic/Technic";
import Contacts from "./components/Contacts/Contacts";
import Catalog from "./components/Catalog/Catalog";
import CatalogPage from "./pages/CatalogPage";
import Payment from "./components/Payment/Payment";
import AboutUs from "./components/AboutUs/AboutUs";
import FurnitureCatalog from "./components/FurnitureCatalog/FurnitureCatalog";
import InteriorItems from "./components/InteriorItems/InteriorItems";
import Beds from "./components/Catalog/Beds/Beds";
import Armchairs from "./components/Catalog/Armchairs/Armchairs";
import Office from "./components/Catalog/Office/Office";

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
        <Route path="/childroom" element={<Childroom/>} />
        <Route path="/furniture" element={<Furniture/>} />
        <Route path="/sofas" element={<Sofas/>} />
        <Route path="/offices" element={<Offices/>}/>
        <Route path="/plumbing" element={<Plumbing/>}/>
        <Route path="/lightning" element={<Lightning/>}/>
        <Route path="/outside" element={<Outside/>}/>
        <Route path="/technic" element={<Technic/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/furniture" element={<FurnitureCatalog />} />
        <Route path="/interior" element={<InteriorItems />} />
        <Route path="/beds" element={<Beds />} />
        <Route path="/armchairs" element={<Armchairs />} />
        <Route path="/office" element={<Office />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
