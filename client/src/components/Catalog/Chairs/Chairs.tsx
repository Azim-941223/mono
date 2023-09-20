import scss from "./Chairs.module.scss";
import { useTranslation } from "react-i18next";
import teoChair from "../../../assets/images/ChairsCatalog/teo_chair.png";
import andersonChair from "../../../assets/images/ChairsCatalog/anderson_chair.png";
import sokChair from "../../../assets/images/ChairsCatalog/sok_chair.png";
import barChair from "../../../assets/images/ChairsCatalog/bar_chair.png";
import normChair from "../../../assets/images/ChairsCatalog/norm_bar_chair.png";
import pioreTable from "../../../assets/images/ChairsCatalog/piore_chair.png";
import rilChair from "../../../assets/images/ChairsCatalog/ril_chair.png";
import blackDiningTable from "../../../assets/images/ChairsCatalog/black_dining_table.png";
import brownDiningTable from "../../../assets/images/ChairsCatalog/brown_dining_table.png";
import danteNightstand from "../../../assets/images/ChairsCatalog/dante_nightstand.png";
import oxrandTable from "../../../assets/images/ChairsCatalog/oxrand_table.png";
import yanahaArmchair from "../../../assets/images/ChairsCatalog/yanaha_armchair.png";
import diningTable from "../../../assets/images/ChairsCatalog/dining_table.png";


interface Product {
  id: number;
  imageUrl: string;
  price: string;
  description: string;
}

const items = [
  {
    id: 1,
    imageUrl: teoChair,
    description: "teo_chair.description",
    price: "380 $",
  },
  {
    id: 2,
    imageUrl: andersonChair,
    description: "anderson_chair.description",
    price: "240 $",
  },
  {
    id: 3,
    imageUrl: sokChair,
    description: "sok_chair.description",
    price: "220 $",
  },
  {
    id: 4,
    imageUrl: barChair,
    description: "bar_chair.description",
    price: "2340 $",
  },
  {
    id: 5,
    imageUrl: normChair,
    description: "norm_chair.description",
    price: "53 060 $",
  },
  {
    id: 6,
    imageUrl: pioreTable,
    description: "piore_table.description",
    price: "2350 $",
  },
  {
    id: 7,
    imageUrl: rilChair,
    description: "ril_chair.description",
    price: "67 890 $",
  },
  {
    id: 8,
    imageUrl: blackDiningTable,
    description: "black_dining_table.description",
    price: "2630 $",
  },
  {
    id: 9,
    imageUrl: brownDiningTable,
    description: "brown_dining_table.description",
    price: "43 680 $",
  },
  {
    id: 10,
    imageUrl: danteNightstand,
    description: "dante_nightstand.description",
    price: "43 680 $",
  },
  {
    id: 11,
    imageUrl: oxrandTable,
    description: "oxrand_table.description",
    price: "2630 $",
  },
  {
    id: 12,
    imageUrl: yanahaArmchair,
    description: "yanaha_armchair.description",
    price: "43 680 $",
  },
  {
    id: 13,
    imageUrl: diningTable,
    description: "dining_table.description",
    price: "2630 $",
  },
];

const ItemCard: React.FC<{ item: Product }> = ({ item }) => {
  const { t } = useTranslation(["ChairsCatalog"]);
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

const Chairs: React.FC = () => {
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

export default Chairs;
