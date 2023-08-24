import React from "react";
import css from "./Catalog.scss";
import image1 from "../../assets/images/Catalog/frame1.png";
import image2 from "../../assets/images/Catalog/frame2.png";
import image3 from "../../assets/images/Catalog/frame3.png";
import image4 from "../../assets/images/Catalog/frame4.png";
import image5 from "../../assets/images/Catalog/frame5.png";
import image6 from "../../assets/images/Catalog/frame6.png";
import image7 from "../../assets/images/Catalog/frame7.png";
import image8 from "../../assets/images/Catalog/frame8.png";
import image9 from "../../assets/images/Catalog/frame9.png";
import image10 from "../../assets/images/Catalog/frame10.png";
import { useTranslation } from "react-i18next";
function Catalog() {
    const { t } = useTranslation("Catalog");
  return (
    <div className="catalog__container">

        <div className="Catalog__search">
           <h1>{t("title")}</h1>

           <form className="form" action="">
            <input className="form__field" type="search" placeholder={t("search")}></input>
            <button className="button button_form" type="submit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8567 21.369C4.86601 21.369 0 16.5802 0 10.6845C0 4.78886 4.86601 0 10.8567 0C16.8473 0 21.7133 4.78886 21.7133 10.6845C21.7133 16.5802 16.8473 21.369 10.8567 21.369ZM10.8567 1.64377C5.79022 1.64377 1.67026 5.69841 1.67026 10.6845C1.67026 15.6706 5.79022 19.7253 10.8567 19.7253C15.9231 19.7253 20.0431 15.6706 20.0431 10.6845C20.0431 5.69841 15.9231 1.64377 10.8567 1.64377Z" fill="white"/>
<path d="M20.9382 23.6171C20.8403 23.6171 20.7424 23.6053 20.6567 23.5936C20.0816 23.5232 19.0415 23.1475 18.4541 21.4687C18.1482 20.5882 18.2583 19.7077 18.76 19.0385C19.2617 18.3693 20.1061 17.9937 21.0728 17.9937C22.3209 17.9937 23.2999 18.4515 23.7404 19.2616C24.1809 20.0716 24.0585 21.1047 23.361 22.1026C22.4922 23.3588 21.55 23.6171 20.9382 23.6171ZM20.204 20.9169C20.412 21.5274 20.7057 21.8326 20.9015 21.8561C21.0972 21.8796 21.4643 21.6565 21.8437 21.1282C22.1986 20.6234 22.223 20.2595 22.1374 20.0951C22.0517 19.9307 21.7091 19.7546 21.0728 19.7546C20.6934 19.7546 20.412 19.872 20.2529 20.0716C20.1061 20.2712 20.0816 20.5764 20.204 20.9169Z" fill="white"/></svg>
            </button>
           </form>
        </div>
        <div className="container__down">
        <div className={css.imageWrapper}>
          </div>
          <div className="catalog2">
            <div className="catalog__cards">
               <img  className="image" src={image1} alt="image" />
               <p className="catalog__text">{t("accessoires")}</p>
            </div>
            <div className="catalog__cards">
              <img  className="image" src={image2} alt="image" />
              <p className="catalog__text">{t("child")}</p>
            </div>
            <div className="catalog__cards">
            <img  className="image" src={image3} alt="image" />
            <p className="catalog__text">{t("furniture")}</p>
            </div>
            <div className="catalog__cards">
            <img  className="image" src={image4} alt="image" />
            <p className="catalog__text">{t("sofas")}</p>
            </div>
            <div className="catalog__cards">
            <img  className="image" src={image5} alt="image" />
            <p className="catalog__text">{t("office")}</p>
            </div>
            <div className="catalog__cards">
            <img  className="image" src={image6} alt="image" />
            <p className="catalog__text">{t("plumbing")}</p>
            </div>
            <div className="catalog__cards">
            <img  className="image" src={image7} alt="image" />
            <p className="catalog__text">{t("light")}</p>
            </div>
            <div className="catalog__cards">
            <img  className="image" src={image8} alt="image" />
            <p className="catalog__text">{t("out")}</p>
            </div>
            <div className="catalog__cards">
            <img  className="image" src={image9} alt="image" />
            <p className="catalog__text">{t("tech")}</p>
            </div>

            <div className="catalog__cards">
            <img  className="image" src={image10} alt="image" />
            <p className="catalog__text">{t("kitchen")}</p>
            </div>
<span className="catalog_line">
<svg   width="1257" height="1" viewBox="0 0 1277 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-4.37114e-08" y1="0.5" x2="1277" y2="0.499888" stroke="black"/>
</svg>
</span>
          </div>
</div>
    </div>
  );
}
export default Catalog;
