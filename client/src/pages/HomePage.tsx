import React from "react";
import NewProductsSlider from "../components/NewProductsSlider/NewProductsSlider";
import PopularCategories from "../components/PopularCategories/PopularCategories";

function HomePage() {
  return (
    <main>
      <PopularCategories />
      <NewProductsSlider />
    </main>
  );
}

export default HomePage;
