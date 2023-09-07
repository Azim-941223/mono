import React from "react";
import css from "./Pointofissue.scss";
import { useTranslation } from "react-i18next";
function Pointofissue() {
  const { t } = useTranslation("PaymentMethod");
  return (
    <div className={css.proba}>
        <div className="point__container">
            <div className="point__row">
                <div className="point__list">
                    <p className="point__list-text">{t("street")}</p>
                    <p className="point__list-text">{t("street2")}</p>
                    <p className="point__list-text">{t("street3")}</p>
                    <p className="point__list-text">{t("street4")}</p>
                    <p className="point__list-text">{t("street5")}</p>
                    <h4 className="point__list-price">{t("cost1")}</h4>
                </div>
                <div className="point__map">
                <iframe  className="point__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Adb5aadedd9a17cd265fa57acf2568d005b42a5a9cdc3a9961d3a847055605c13&amp;source=constructor" width="100%" height="400"></iframe>
                </div>
            </div>
            <h4 className="point__list-price">{t("courdel")}</h4>
<p className="point__list-text"> {t("textt1")}<br/>
{t("textt2")}</p>
        </div>
    </div>
  );
};

export default Pointofissue;
