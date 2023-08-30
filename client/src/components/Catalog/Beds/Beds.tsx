import scss from "./Beds.module.scss";
import { useTranslation } from "react-i18next";
import bunkBed from "../../../assets/images/BedsCatalog/bunk_bed.png";
import mickeyBed from "../../../assets/images/BedsCatalog/mickey_bed.png";
import teddyBed from "../../../assets/images/BedsCatalog/teddy_bed.png";
import kittyBed from "../../../assets/images/BedsCatalog/kitty_bed.png";
import miroShelf from "../../../assets/images/BedsCatalog/miro_shelf.png";
import fjordNightstand from "../../../assets/images/BedsCatalog/fjord_nightstand.png";
import bostonChair from "../../../assets/images/BedsCatalog/boston_chair.png";
import fjordWardrobe from "../../../assets/images/BedsCatalog/fjord_wardrobe.png";

interface Product {
  id: number;
  imageUrl: string;
  price: string;
  description: string;
}

const items = [
  {
    id: 1,
    imageUrl: bunkBed,
    description: "bunk_bed.description",
    price: "1090 $",
  },
  {
    id: 2,
    imageUrl: mickeyBed,
    description: "mickey.description",
    price: "690 $",
  },
  {
    id: 3,
    imageUrl: teddyBed,
    description: "teddy.description",
    price: "22 000 $",
  },
  {
    id: 4,
    imageUrl: kittyBed,
    description: "kitty.description",
    price: "470 000 $",
  },
  {
    id: 5,
    imageUrl: miroShelf,
    description: "miro.description",
    price: "1600 $",
  },
  {
    id: 6,
    imageUrl: fjordNightstand,
    description: "fjord_nightstand.description",
    price: "43 090 $",
  },
  {
    id: 7,
    imageUrl: bostonChair,
    description: "boston.description",
    price: "23 770$",
  },
  {
    id: 8,
    imageUrl: fjordWardrobe,
    description: "fjord_wardrobe.description",
    price: "560 $",
  },
];

const ItemCard: React.FC<{ item: Product }> = ({ item }) => {
  const { t } = useTranslation(["BedsCatalog"]);
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

const Beds: React.FC = () => {
  return (
    <div className={scss.container}>
      <div className={scss.items_list}>
        {items.map((product) => (
          <ItemCard key={product.description} item={product} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Beds;
