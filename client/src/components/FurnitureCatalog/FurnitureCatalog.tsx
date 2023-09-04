import scss from "./FurnitureCatalog.module.scss";
import { useTranslation } from "react-i18next";
import vivoArmchair from "../../assets/images/FurnitureCatalog/vivo_armchair.png";
import udineSofa from "../../assets/images/FurnitureCatalog/udine_sofa.png";
import ricoSofa from "../../assets/images/FurnitureCatalog/rico_sofa.png";
import bostonArmchair from "../../assets/images/FurnitureCatalog/boston_armchair.png";
import angulMirror from "../../assets/images/FurnitureCatalog/angul_mirror.png";
import sillonMirror from "../../assets/images/FurnitureCatalog/sillon_mirror.png";
import adnetMirror from "../../assets/images/FurnitureCatalog/adnet_mirror.png";
import zaabaliMirror from "../../assets/images/FurnitureCatalog/zaabali_mirror.png";
import modularSofa from "../../assets/images/FurnitureCatalog/modular_sofa.png";
import chillSofa from "../../assets/images/FurnitureCatalog/chill_sofa.png";
import shikSofa from "../../assets/images/FurnitureCatalog/shik_sofa.png";
import mossSofa from "../../assets/images/FurnitureCatalog/moss_sofa.png";

interface Product {
  id: number;
  imageUrl: string;
  price: string;
  description: string;
}

const hits = [
  {
    id: 1,
    imageUrl: vivoArmchair,
    description: "vivo.description",
    price: "690 $",
  },
  {
    id: 2,
    imageUrl: udineSofa,
    description: "udine.description",
    price: "16 200 $",
  },
  {
    id: 3,
    imageUrl: ricoSofa,
    description: "rico.description",
    price: "67 890 $",
  },
  {
    id: 4,
    imageUrl: bostonArmchair,
    description: "boston.description",
    price: "23 770 $",
  },
];
const mirrors = [
  {
    id: 1,
    imageUrl: angulMirror,
    description: "angul.description",
    price: "16 200 $",
  },
  {
    id: 2,
    imageUrl: sillonMirror,
    description: "sillon.description",
    price: "22 000 $",
  },
  {
    id: 3,
    imageUrl: adnetMirror,
    description: "adnet.description",
    price: "47 000 $",
  },
  {
    id: 4,
    imageUrl: zaabaliMirror,
    description: "zaabali.description",
    price: "2550 $",
  },
];
const sofas = [
  {
    id: 1,
    imageUrl: modularSofa,
    description: "modular.description",
    price: "2630 $",
  },
  {
    id: 2,
    imageUrl: chillSofa,
    description: "chill.description",
    price: "43 680 $",
  },
  {
    id: 3,
    imageUrl: shikSofa,
    description: "shik.description",
    price: "23 550 $",
  },
  {
    id: 4,
    imageUrl: mossSofa,
    description: "moss.description",
    price: "26 030 $",
  },
];

const FurnitureCard: React.FC<{ product: Product }> = ({ product }) => {
  const { t } = useTranslation(["FurnitureCatalog"]);
  return (
    <div className={scss.furniture_card}>
      <img src={product.imageUrl} />
      <div className={scss.description}>
        <p>{t(product.description)}</p>
        <p className={scss.price}>{product.price}</p>
      </div>
    </div>
  );
};

const FurnitureCatalog: React.FC = () => {
  const { t } = useTranslation(["FurnitureCatalog"]);
  return (
    <div className={scss.container}>
      <div className={scss.furniture_list}>
        <div className={scss.hits}>
          <div className={scss.title}>
            <p>{t("furniture_title.hits")}</p>
          </div>
          <div className={scss.hit}>
            {hits.map((product) => (
              <FurnitureCard key={product.description} product={product} />
            ))}
          </div>
        </div>
        <div className={scss.hits}>
          <div className={scss.title}>
            <p>{t("furniture_title.mirrors")}</p>
          </div>
          <div className={scss.hit}>
            {mirrors.map((product) => (
              <FurnitureCard key={product.description} product={product} />
            ))}
          </div>
        </div>
        <div className={scss.hits}>
          <div className={scss.title}>
            <p>{t("furniture_title.sofas")}</p>
          </div>
          <div className={scss.hit}>
            {sofas.map((product) => (
              <FurnitureCard key={product.description} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCatalog;
