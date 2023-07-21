import React from "react";
import ContactDetails from "../components/ContactDetails/ContactDetails";
import NewProductsSlider from "../components/NewProductsSlider/NewProductsSlider";
import PopularCategories from "../components/PopularCategories/PopularCategories";

function HomePage() {
  return (
    <main>
      <PopularCategories />
      <NewProductsSlider />
      <ContactDetails />
    </main>
  );
}

export default HomePage;
