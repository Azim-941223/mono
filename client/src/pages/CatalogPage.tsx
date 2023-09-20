import React from "react";
import Modal from "../components/Modal";
import Catalog from "../components/Catalog/Catalog";
import FurnitureCatalog from "../components/FurnitureCatalog/FurnitureCatalog";
import InteriorItems from "../components/InteriorItems/InteriorItems";

function CatalogPage() {
  return (
    <div>
        <Catalog/>
        <FurnitureCatalog/>
        <Modal/>
    </div>
  );
};

export default CatalogPage;
