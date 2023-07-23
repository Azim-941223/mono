import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import css from "./Header.module.scss";
import Button from "../Button/Button";
import searchIcon from "../../assets/icons/ic_search.svg";
import cartIcon from "../../assets/icons/ic_cart.svg";
import heartIcon from "../../assets/icons/ic_heart.svg";
import personIcon from "../../assets/icons/ic_person.svg";

import { functional } from "../../types/Header";
import { navLink } from "../../types/Header/index";

function Header() {
  const { t } = useTranslation("Header");

  const navLinks: navLink[] = [
    {
      name: "home",
      to: "/",
    },
    {
      name: "catalog",
      to: "/catalog",
    },
    {
      name: "about-us",
      to: "/about-us",
    },
    {
      name: "contact",
      to: "/contact",
    },
    {
      name: "payment",
      to: "/payment",
    },
  ];

  const userFunctional: functional[] = [
    {
      src: searchIcon,
      alt: "search",
    },
    {
      src: cartIcon,
      alt: "cart",
    },
    {
      src: heartIcon,
      alt: "favorite",
    },
  ];

  return (
    <header className={css.Header}>
      <div className={`container ${css["Header__container"]}`}>
        <div className={css.left}>
          <h1>Mono</h1>
          <div>
            {navLinks.map((elem, index) => (
              <Link key={index} to={elem.to}>
                {t(elem.name)}
              </Link>
            ))}
          </div>
        </div>

        <div className={css.right}>
          {userFunctional.map((elem, index) => (
            <Button key={index}>
              <img src={elem.src} alt={elem.alt} />
            </Button>
          ))}
          <hr />
          <Button>
            <img src={personIcon} alt="person" />
            <p>{t("sign-up")}</p>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
