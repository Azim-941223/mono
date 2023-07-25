import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import css from "./Header.module.scss";
import Button from "../Button/Button";
import searchIcon from "../../assets/icons/ic_search.svg";
import cartIcon from "../../assets/icons/ic_cart.svg";
import heartIcon from "../../assets/icons/ic_heart.svg";
import personIcon from "../../assets/icons/ic_person.svg";
import { functional, selectOption } from "../../types/Header";
import { navLink } from "../../types/Header/index";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

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

const selectOptions: selectOption[] = [
  {
    lang: "en",
    text: "English",
  },
  {
    lang: "ru",
    text: "Russian",
  },
];

const Header: React.FC = () => {
  const { t, i18n } = useTranslation("Header");
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setLang(language);
  };

  const selectRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<string>("en");
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const handleOutsideClick = (e: MouseEvent) => {
    if (!selectRef.current?.contains(e.target as HTMLElement)) {
      setIsSelect(false);
      document.removeEventListener("click", handleOutsideClick);
    }
  };
  useEffect(() => {
    if (isSelect) {
      document.addEventListener("click", handleOutsideClick);
    }
  }, [isSelect]);

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
          <div
            ref={selectRef}
            className={clsx({
              [css["select"]]: true,
              [css["select--active"]]: isSelect,
            })}
            onClick={() => {
              setIsSelect(!isSelect);
              document.removeEventListener("click", handleOutsideClick);
            }}
          >
            <span>{lang}</span>
            <ul className={css["select__menu"]}>
              {selectOptions.map((elem, index) => (
                <li
                  key={index}
                  onClick={() => {
                    changeLanguage(elem.lang);
                  }}
                  className={clsx({
                    [css["disabled"]]: lang === elem.lang,
                  })}
                >
                  ({elem.lang}) {elem.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
