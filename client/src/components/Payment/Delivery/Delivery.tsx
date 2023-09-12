import Courier from "./Courier/Courier";
import css from "./Delivery.scss";
import React, { useState } from "react";
import Pointofissue from "./Pointofissue/Pointofissue";
import { useTranslation } from "react-i18next";
function Delivery() {
  const { t } = useTranslation("PaymentMethod");
  const [status, setStatus] = useState("signIn");
  return (
    <div className={css.proba}>
      <div className="delivery__catalog">
        <h3 className="delivery__catalog-title">{t("delivery")}</h3>
        <p className="delivery__catalog-text1">{t("title1")}</p>
        <hr />
        <h3 className="delivery__catalog-title">{t("title2")}</h3>
        <div className="delivery__row1">
          <div>
            <p className="delivery__catalog-text2">{t("countries")}</p>
            <input
              className="delivery__row1-input"
              type="text"
              placeholder={t("countries")}
            />
          </div>
          <div>
            <p className="delivery__catalog-text2">{t("locality")}</p>
            <input
              className="delivery__row1-input"
              type="text"
              placeholder={t("locality")}
            />
          </div>

          <div>
            <p className="delivery__catalog-text2">{t("streets")}</p>
            <input
              className="delivery__row1-input"
              type="text"
              placeholder={t("streets")}
            />
          </div>

          <div>
            <p className="delivery__catalog-text2">{t("houses")}</p>
            <input
              className="delivery__row1-input"
              type="text"
              placeholder={t("houses")}
            />
          </div>
          <div>
            <button className="delivery__row1-btn">{t("confirm")}</button>
          </div>
        </div>
        <p className="delivery__catalog-text">{t("shipping")}</p>
        <div className="delivery__row2">
          <p
            onClick={() => setStatus("signIn")}
            className={`delivery__title ${
              status === "signIn" && "delivery__title_active"
            }`}
          >
            {t("courier")}
          </p>
          <p
            onClick={() => setStatus("signUp")}
            className={`delivery__title ${
              status === "signUp" && "delivery__title_active"
            }`}
          >
            {t("point")}
          </p>
        </div>
        {status === "signUp"}
        <button type="button">
          {status === "signIn" ? <Courier /> : <Pointofissue />}
        </button>
      </div>
    </div>
  );
}

export default Delivery;
