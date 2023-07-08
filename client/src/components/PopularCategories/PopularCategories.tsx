import React from "react";
import { useTranslation } from "react-i18next";

import css from "./PopularCategories.module.scss";
import sofasImg from "../../assets/images/PopularCategories/categories_sofas.png";
import tablesImg from "../../assets/images/PopularCategories/categories_tables.png";
import wardrobesImg from "../../assets/images/PopularCategories/categories_wardrobes.png";
import kitchenSetImg from "../../assets/images/PopularCategories/categories_kitchen-set.png";
import bedsImg from "../../assets/images/PopularCategories/categories_beds.png";
import chairsImg from "../../assets/images/PopularCategories/categories_chairs.png";
import newsImg1 from "../../assets/images/PopularCategories/news-image1.png";
import newsImg2 from "../../assets/images/PopularCategories/news-image2.png";
import { category, news } from "../../types/PopularCategories";
import Button from "../Button/Button";

const categoriesArr: category[] = [
  { name: "sofas", img: sofasImg },
  { name: "tables", img: tablesImg },
  { name: "wardrobes", img: wardrobesImg },
  { name: "kitchen-set", img: kitchenSetImg },
  { name: "beds", img: bedsImg },
  { name: "chairs", img: chairsImg },
];

const newsArr: news[] = [
  {
    img: newsImg1,
    title: "news.summer-title",
    description: "news.summer-description",
    button: "news.more",
  },
  {
    img: newsImg2,
    title: "news.home-oasis-title",
    discount: 40,
    description: "news.home-oasis-description",
    button: "news.go-to-collection",
  },
];

function PopularCategories() {
  const { t } = useTranslation(["popularCategories"]);

  const renderCategories = categoriesArr.map((elem: category, index) => (
    <section
      key={index}
      aria-label={t(elem.name)}
      className={`${css[elem.name]} ${css["category"]}`}
    >
      <img src={elem.img} alt={elem.name} />
      <div className={css["background-dimming"]}></div>
      <h1>{t(elem.name)}</h1>
    </section>
  ));

  const renderNews = newsArr.map((elem: news, index) => (
    <section
      key={index}
      aria-label={t(elem.title)}
      className={`${css["news"]}`}
    >
      <img src={elem.img} alt={elem.title} />

      <div>
        <h1>{t(elem.title)}</h1>
        {elem.discount ? <h2>{elem.discount}%</h2> : ""}
        <p>{t(elem.description)}</p>
        <Button arrow primary>{t(elem.button)}</Button>
      </div>
    </section>
  ));

  return (
    <article className={css["PopularCategories"]}>
      <div className="container">
        <div className={css["PopularCategories__header"]}>
          <h1>{t("title")}</h1>
          <hr />
        </div>

        <nav className={css["PopularCategories__content"]}>
          {renderCategories}
        </nav>

        <nav className={css["PopularCategories__news"]}>{renderNews}</nav>
      </div>
    </article>
  );
}

export default PopularCategories;
