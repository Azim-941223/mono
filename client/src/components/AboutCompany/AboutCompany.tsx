import React from "react";

import css from "./AboutCompany.module.scss";
import Button from "../Button/Button";
import image from "../../assets/images/AboutCompany/image.png";
import textBackground from "../../assets/images/AboutCompany/text-background.png";
import { useTranslation } from "react-i18next";

function AboutCompany() {
  const { t } = useTranslation("AboutCompany");

  return (
    <article className={css.AboutCompany}>
      <div className="container">
        <div className={css["AboutCompany__header"]}>
          <h1>{t("title")}</h1>
          <hr />
        </div>

        <div className={css["AboutCompany__content"]}>
          <div className={css["left"]}>
            <div className={css["left__top"]}>
              <img src={textBackground} alt="background" />
              <p>{t("our-collection")}</p>
            </div>

            <div className={css["left__bottom"]}>
              <p>{t("virtual-platform")}</p>
              <Button secondary arrow>{t("button")}</Button>
            </div>
          </div>

          <div className={css["right"]}>
            <img src={image} alt="image" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default AboutCompany;
