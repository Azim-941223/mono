import scss from "./Office.module.scss";
import { useTranslation } from "react-i18next";
import amchairRoll from "../../../assets/images/OfficeCatalog/roll_armchair.png";
import deskAttica from "../../../assets/images/OfficeCatalog/attica_desk.png";
import armchairLover from "../../../assets/images/OfficeCatalog/lover_armchair.png";
import shelfProst from "../../../assets/images/OfficeCatalog/prost_shelf.png";
import deskRTO from "../../../assets/images/OfficeCatalog/rto_desk.png";
import armchairFjord from "../../../assets/images/OfficeCatalog/fjord_armchair.png";

interface Product {
  id: number;
  imageUrl: string;
  price: string;
  description: string;
}

const items = [
  {
    id: 1,
    imageUrl: amchairRoll,
    description: "roll_armchair.description",
    price: "47 000 $",
  },
  {
    id: 2,
    imageUrl: deskAttica,
    description: "attica_desk.description",
    price: "43 090 $",
  },
  {
    id: 3,
    imageUrl: armchairLover,
    description: "lover_armchair.description",
    price: "23 770 $",
  },
  {
    id: 4,
    imageUrl: shelfProst,
    description: "prost_shelf.description",
    price: "560 $",
  },
  {
    id: 5,
    imageUrl: deskRTO,
    description: "rto_desk.description",
    price: "47 0000 $",
  },
  {
    id: 6,
    imageUrl: armchairFjord,
    description: "fjord_armchair.description",
    price: "43 090 $",
  },
];

const ItemCard: React.FC<{ item: Product }> = ({ item }) => {
  const { t } = useTranslation(["OfficeCatalog"]);
  return (
    <div className={scss.item_card}>
      <img src={item.imageUrl} />
      <div className={scss.description}>
        <p>{t(item.description)}</p>
        <p className={scss.price}>{item.price}</p>
      </div>
    </div>
  );
};

const Office: React.FC = () => {
  return (
    <div className={scss.container}>
      <div className={scss.items_list}>
        {items.map((product) => (
          <ItemCard  key={product.description} item={product} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Office;
