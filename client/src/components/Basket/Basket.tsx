import React from "react";
import scss from "./Basket.module.scss";
import { useTranslation } from "react-i18next";
import chairAnderson from "../../assets/images/Basket/anderson_chair (1).png";
import chairTeo from "../../assets/images/Basket/teo_chair.png";
import tableOxrand from "../../assets/images/Basket/oxrand_table.png";
import armchairVivo from "../../assets/images/Basket/vivo_armchair.png";
import bedBunk from "../../assets/images/Basket/bunk_bed.png";
import armchairBelva from "../../assets/images/Basket/belva_armchair.png";
import minusSquare from "../../assets/icons/Basket/minus_square.svg";
import addSquare from "../../assets/icons/Basket/add_square.svg";
import colorAnderson from "../../assets/icons/Basket/anderson_color.svg";
import colorOxrand from "../../assets/icons/Basket/oxrand_color.svg";
import colorVivo from "../../assets/icons/Basket/vivo_color.svg";
import colorBunkbed from "../../assets/icons/Basket/bunk_bed_color.svg";
import colorBelva from "../../assets/icons/Basket/belva_color.svg";
import { useState } from "react";

interface Product {
  id: number;
  imageUrl: string;
  imageColor: string;
  title: string;
  material: string;
  upholstery: string;
  mechanism: string;
  price: number;
  amount: number;
}

const items = [
  {
    id: 1,
    imageUrl: chairAnderson,
    imageColor: colorAnderson,
    title: "anderson_chair.title",
    material: "anderson_chair.material",
    upholstery: "anderson_chair.upholstery",
    mechanism: "anderson_chair.mechanism",
    price: 240,
    amount: 240,
  },
  {
    id: 2,
    imageUrl: chairTeo,
    imageColor: colorAnderson,
    title: "teo_chair.title",
    material: "anderson_chair.material",
    upholstery: "anderson_chair.upholstery",
    mechanism: "anderson_chair.mechanism",
    price: 380,
    amount: 380,
  },
  {
    id: 3,
    imageUrl: tableOxrand,
    imageColor: colorOxrand,
    title: "oxrand_table.title",
    material: "anderson_chair.material",
    upholstery: "anderson_chair.upholstery",
    mechanism: "anderson_chair.mechanism",
    price: 2630,
    amount: 2630,
  },
  {
    id: 4,
    imageUrl: armchairVivo,
    imageColor: colorVivo,
    title: "vivo_armchair.title",
    material: "anderson_chair.material",
    upholstery: "anderson_chair.upholstery",
    mechanism: "anderson_chair.mechanism",
    price: 690,
    amount: 690,
  },
  {
    id: 5,
    imageUrl: bedBunk,
    imageColor: colorBunkbed,
    title: "bunk_bed.title",
    material: "anderson_chair.material",
    upholstery: "anderson_chair.upholstery",
    mechanism: "anderson_chair.mechanism",
    price: 1090,
    amount: 1090,
  },
  {
    id: 6,
    imageUrl: armchairBelva,
    imageColor: colorBelva,
    title: "belva_armchair.title",
    material: "anderson_chair.material",
    upholstery: "anderson_chair.upholstery",
    mechanism: "anderson_chair.mechanism",
    price: 2340,
    amount: 2340,
  },
];

const ItemTable: React.FC<{
  item: Product;
  onQuantityChange: (quantity: number, totalPrice: number) => void;
}> = ({ item, onQuantityChange }) => {
  const { t } = useTranslation(["Basket"]);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const incrementQuantity = () => {
    setQuantity((quantity) => quantity + 1);
    setTotalPrice((totalPrice) => totalPrice + Number(item.price));
    onQuantityChange(quantity + 1, totalPrice + Number(item.price));
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - Number(item.price));
      onQuantityChange(quantity - 1, totalPrice - Number(item.price));
    }
  };

  return (
    <div className={scss.global}>
      <img src={item.imageUrl} />
      <div className={scss.title}>
        <h3>{t(item.title)}</h3>
        <div className={scss.main_title}>
          <p>{t(item.material)}</p>
          <p>{t(item.upholstery)}</p>
          <p>{t(item.mechanism)}</p>
          <img src={item.imageColor} />
        </div>
      </div>
      <div className={scss.minus_plus}>
        <img src={minusSquare} onClick={decrementQuantity} />
        {quantity}
        <img src={addSquare} onClick={incrementQuantity} />
      </div>
      <div className={scss.price}>
        <p>{item.price}$</p>
        <p>{totalPrice}$</p>
      </div>
    </div>
  );
};

const Basket: React.FC = () => {
  const { t } = useTranslation(["Basket"]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleQuantityChange = () => {
    setTotalQuantity((quantity) => quantity + 1);
    // setTotalPrice((totalPrice) => totalPrice + Number(item.price));
  };

  return (
    <div className={scss.container}>
      <div className={scss.basket}>
        <div>
          <h1>{t("basket.basket")}</h1>
        </div>
        <div className={scss.basket_left_right}>
          <div className={scss.basket_left}>
            <p>{t("basket.title")}</p>
          </div>
          <div className={scss.basket_right}>
            <p>{t("basket.quantity")}</p>
            <p>{t("basket.price")}</p>
            <p>{t("basket.amount")}</p>
          </div>
        </div>
      </div>
      <div className={scss.main}>
        <div>
          {items.map((product) => (
            <ItemTable
              key={product.title}
              item={product}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
        <div className={scss.order}>
          <div className={scss.order_left}>
            <div>
              <h1>{t("total.amount")}</h1>
              <p>{t("total.products")}</p>
              <p>{t("total.your_products")}</p>
            </div>
            <div>
              <h1>{totalPrice} $</h1>
              <p>{totalQuantity}</p>
            </div>
          </div>
          <div className={scss.order_right}>
            <button>{t("total.order")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Basket;
