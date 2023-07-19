import React from 'react'
import { useTranslation } from "react-i18next";

import {
headerSocials
} from "../constants/Header/index";

import css from "./Header.module.scss";



function Header() {

    const { t } = useTranslation("Header");


    // const renderSocials = headerSocials.map((elem, index) => (
    //   <a key={index} href={elem.href} target="_blank" rel="noreferrer">
    //     <img src={elem.src} alt={elem.alt} />
    //   </a>
    // ));



  return (
    <header className={css.Header}>


<div className={`container ${css.container}`}>


<section className={css.title}>
    <p> {t("title")} </p>
</section>

<section>
    <p>{t("list.main")} </p>
</section>

<section>
    <p>{t("list.catalog")} </p>
</section>

<section>
    <p>{t("list.about")} </p>
</section>

<section>
    <p>{t("list.contacts")} </p>
</section>


<section>
    <p>{t("list.payment")} </p>
</section>



<section className={css.rightside} >
    <p>{t("enter")} </p>
</section>

</div>


        </header>
    


  )
}

export default Header
