import scss from "./Armchairs.module.scss";
import { useTranslation } from "react-i18next";
import udineArmchair from "../../../assets/images/ArmchairsCatalog/udine_armchair.png";
import twenArmchair from "../../../assets/images/ArmchairsCatalog/twen_armchair.png";
import lindArmchair from "../../../assets/images/ArmchairsCatalog/lind_armchair.png";
import stoneArmchair from "../../../assets/images/ArmchairsCatalog/stone_armchair.png";
import bostonArmchair from "../../../assets/images/ArmchairsCatalog/boston_armchair.png";
import xoArmchair from "../../../assets/images/ArmchairsCatalog/xo_armchair.png";
import vivoArmchair from "../../../assets/images/ArmchairsCatalog/vivo_armchair.png";
import grizzlyArmchair from "../../../assets/images/ArmchairsCatalog/grizzly_armchair.png";
import belvaArmchair from "../../../assets/images/ArmchairsCatalog/belva_armchair.png";
import puffArmchair from "../../../assets/images/ArmchairsCatalog/puff_armchair.png";
import pioreArmchair from "../../../assets/images/ArmchairsCatalog/piore_armchair.png";
import ricoSofa from "../../../assets/images/ArmchairsCatalog/rico_sofa.png";
import modularSofa from "../../../assets/images/ArmchairsCatalog/modular_sofa.png";
import chillSofa from "../../../assets/images/ArmchairsCatalog/chill_sofa.png";
import shikSofa from "../../../assets/images/ArmchairsCatalog/shik_sofa.png";
import mossSofa from "../../../assets/images/ArmchairsCatalog/moss_sofa.png";


interface Product {
  id: number;
  imageUrl: string;
  price: string;
  description: string;
}

const items = [
  {
    id: 1,
    imageUrl: udineArmchair,
    description: "udine_armchair.description",
    price: "16 200 $",
  },
  {
    id: 2,
    imageUrl: twenArmchair,
    description: "twen_armchair.description",
    price: "22 000 $",
  },
  {
    id: 3,
    imageUrl: stoneArmchair,
    description: "stone_armchair.description",
    price: "470 000 $",
  },
  {
    id: 4,
    imageUrl: lindArmchair,
    description: "lind_armchair.description",
    price: "43 090 $",
  },
  {
    id: 5,
    imageUrl: bostonArmchair,
    description: "boston_armchair.description",
    price: "23 770 $",
  },
  {
    id: 6,
    imageUrl: xoArmchair,
    description: "xo_armchair.description",
    price: "24 660 $",
  },
  {
    id: 7,
    imageUrl: vivoArmchair,
    description: "vivo_armchair.description",
    price: "690 $",
  },
  {
    id: 8,
    imageUrl: grizzlyArmchair,
    description: "grizzly_armchair.description",
    price: "38 000 $",
  },
  {
    id: 9,
    imageUrl: belvaArmchair,
    description: "belva_armchair.description",
    price: "2340 $",
  },
  {
    id: 10,
    imageUrl: puffArmchair,
    description: "puff_armchair.description",
    price: "53 060 $",
  },
  {
    id: 11,
    imageUrl: pioreArmchair,
    description: "piore_armchair.description",
    price: "2350 $",
  },
  {
    id: 12,
    imageUrl: ricoSofa,
    description: "rico_sofa.description",
    price: "67 890 $",
  },
  {
    id: 13,
    imageUrl: modularSofa,
    description: "modular_sofa.description",
    price: "2630 $",
  },
  {
    id: 14,
    imageUrl: chillSofa,
    description: "chill_sofa.description",
    price: "43 680 $",
  },
  {
    id: 15,
    imageUrl: shikSofa,
    description: "shik_sofa.description",
    price: "23 550 $",
  },
  {
    id: 16,
    imageUrl: mossSofa,
    description: "moss_sofa.description",
    price: "26 030 $",
  }
];

const ItemCard: React.FC<{ item: Product }> = ({ item }) => {
  const { t } = useTranslation(["ArmchairsCatalog"]);
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

const Armchairs: React.FC = () => {
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

export default Armchairs;
