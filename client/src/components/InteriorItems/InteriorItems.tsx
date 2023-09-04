import scss from "./InteriorItems.module.scss";
import { useTranslation } from "react-i18next";
import mirrorAngul from "../../assets/images/InteriorItems/angul_mirror.png";
import mirrorSillon from "../../assets/images/InteriorItems/sillon_mirror.png";
import mirrorAdnet from "../../assets/images/InteriorItems/adnet_mirror.png";
import vaseFountain from "../../assets/images/InteriorItems/vase_fountain.png";
import vaseEchasse from "../../assets/images/InteriorItems/vase_echasse.png";
import flowerpot from "../../assets/images/InteriorItems/flowerpot.png";
import ceramicVase from "../../assets/images/InteriorItems/ceramic_vase.png";
import roundFlowerpot from "../../assets/images/InteriorItems/round_flowerpot.png";
import watchTrace from "../../assets/images/InteriorItems/trace_watch.png";
import watchSpindle from "../../assets/images/InteriorItems/spindle_watch.png";
import mirrorAliot from "../../assets/images/InteriorItems/aliot_mirror.png";
import mirrorFlam from "../../assets/images/InteriorItems/flam_mirror.png";
import watchMelt from "../../assets/images/InteriorItems/melt_watch.png";
import mirrorZaabali from "../../assets/images/InteriorItems/zaabali_mirror.png";
import posterBadKid from "../../assets/images/InteriorItems/bad_kid_poster.png";
import posterOxrand from "../../assets/images/InteriorItems/oxrand_poster.png";

interface Product {
  id: number;
  imageUrl: string;
  price: string;
  description: string;
}

const items = [
  {
    id: 1,
    imageUrl: mirrorAngul,
    description: "angul.description",
    price: "16 200 $",
  },
  {
    id: 2,
    imageUrl: mirrorSillon,
    description: "sillon.description",
    price: "22 000 $",
  },
  {
    id: 3,
    imageUrl: mirrorAdnet,
    description: "adnet.description",
    price: "47 000 $",
  },
  {
    id: 4,
    imageUrl: vaseFountain,
    description: "fountain.description",
    price: "7090 $",
  },
  {
    id: 5,
    imageUrl: vaseEchasse,
    description: "echasse.description",
    price: "13 000 $",
  },
  {
    id: 6,
    imageUrl: flowerpot,
    description: "flowerpot.description",
    price: "260 $",
  },
  {
    id: 7,
    imageUrl: ceramicVase,
    description: "ceramic.description",
    price: "380 $",
  },
  {
    id: 8,
    imageUrl: roundFlowerpot,
    description: "round_flowerpot.description",
    price: "240 $",
  },
  {
    id: 9,
    imageUrl: watchTrace,
    description: "trace.description",
    price: "560 $",
  },
  {
    id: 10,
    imageUrl: watchSpindle,
    description: "spindle.description",
    price: "2350 $",
  },
  {
    id: 11,
    imageUrl: mirrorAliot,
    description: "aliot.description",
    price: "220 $",
  },
  {
    id: 12,
    imageUrl: mirrorFlam,
    description: "flam.description",
    price: "2630 $",
  },
  {
    id: 13,
    imageUrl: watchMelt,
    description: "melt_wall.description",
    price: "380 $",
  },
  {
    id: 14,
    imageUrl: mirrorZaabali,
    description: "zaabali.description",
    price: "2550 $",
  },
  {
    id: 15,
    imageUrl: posterBadKid,
    description: "bad_kid.description",
    price: "4520 $",
  },
  {
    id: 16,
    imageUrl: posterOxrand,
    description: "oxrand.description",
    price: "2630 $",
  },
];

const ItemCard: React.FC<{ item: Product }> = ({ item }) => {
  const { t } = useTranslation(["InteriorItems"]);
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

const InteriorItems: React.FC = () => {
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

export default InteriorItems;
