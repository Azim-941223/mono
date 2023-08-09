import React from "react";
import AboutCompany from "../components/AboutCompany/AboutCompany";
import ContactDetails from "../components/ContactDetails/ContactDetails";
import NewProductsSlider from "../components/NewProductsSlider/NewProductsSlider";
import PopularCategories from "../components/PopularCategories/PopularCategories";
import SliderComponent from "../components/slider/SliderComponent";

function HomePage() {
  return (
    <main>
      <SliderComponent />
      <PopularCategories />
      <NewProductsSlider />
      <AboutCompany />
      <ContactDetails />
    </main>
  );
}

export default HomePage;
