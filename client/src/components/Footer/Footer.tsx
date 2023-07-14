import React from "react";
import { useTranslation } from "react-i18next";
import {
  footerNumber,
  footerSocials,
  footerStore,
} from "../../constants/Footer";
import { footerDelivery } from "../../constants/Footer/index";

import css from "./Footer.module.scss";

function Footer() {
  const { t } = useTranslation("Footer");

  const renderNavLinks = footerStore.map((elem, index) => (
    <a key={index} href="#">
      {t("store."+elem)}
    </a>
  ));

  const renderDelivery = footerDelivery.map((elem, index) => (
    <p key={index}>
      {t("delivery."+elem.dayA)}-{t("delivery."+elem.dayB)}-<time>{elem.timeA}</time>-
      <time>{elem.timeB}</time>
    </p>
  ));

  const renderSocials = footerSocials.map((elem, index) => (
    <a key={index} href={elem.href} target="_blank" rel="noreferrer">
      <img src={elem.src} alt={elem.alt} />
    </a>
  ));

  return (
    <footer className={css.Footer}>
      <div className={`container ${css.container}`}>
        <section>
          <h1>Mono</h1>

          <p>
            {t("description")}
          </p>
        </section>

        <section>
          <h1>{t("store.title")}</h1>

          <nav className={css.navLinks}>{renderNavLinks}</nav>
        </section>

        <section>
          <h1>{t("delivery.title")}</h1>

          <div>{renderDelivery}</div>
        </section>

        <section>
          <h1>{t("contacts.title")}</h1>

          <div>
            <address>{footerNumber}</address>
            <div className={css.socials}>{renderSocials}</div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
