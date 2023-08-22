import React from "react"
import Catalog from "../Catalog/Catalog"
import css from "./Furniture.module.scss";
import bos from "../../assets/images/ChairBoston/Boston1.png";
import { useTranslation } from "react-i18next";
import SliderFurniture from "../SliderFurniture/SliderFurniture";

function Furniture() {
  const { t } = useTranslation("ChairBoston");
  return (
    <div>
      <Catalog/>
      <div className={css.ShouldChange}>
      <div className={css.ChairBostonContainer}>
        <div className={css.ChairBoston}>
          <div className={css.Right}>
          <img  className={css.Right__image} src={bos} alt="image"/>
          <div className={css.Right__image_bottom}> 
          <SliderFurniture/>
          </div>
          </div>
           <div className={css.Left}>
           <h1 className={css.Left_title}>{t("chairtitle")}</h1>
           <p className={css.Left_subtitle}>{t("chairsubtitle")}</p>
             <h3 className={css.Left_price}>23 770 $</h3>
             <p className={css.characterst__name1}>{t("chaircolor")}</p>

             <div className={css.Left__colours}>
             <svg className={css.Left__colour}  width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.729492" width="29" height="29" fill="#333333"/>
</svg>

<svg className={css.Left__colour} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.729492" width="29" height="29" fill="#666666"/>
</svg>

<svg className={css.Left__colour} width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.729492" width="29" height="29" fill="#AEABAB"/>
</svg>
             </div>
<div className={css.Left__button}>
<button  className={css.Left__btn}>  {t("basket")} 
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8387 15.4419H6.71099C5.76954 15.4419 4.86614 15.0489 4.229 14.3657C3.59186 13.6825 3.26854 12.7653 3.34462 11.8388L4.13391 2.51751C4.16244 2.22738 4.05782 1.94663 3.85812 1.73137C3.65842 1.51612 3.38265 1.40381 3.08785 1.40381H1.44271C1.05282 1.40381 0.729492 1.08561 0.729492 0.701906C0.729492 0.318197 1.05282 0 1.44271 0H3.09737C3.79157 0 4.44772 0.290118 4.91368 0.786132C5.17044 1.06689 5.36063 1.39446 5.46524 1.75945H17.3427C18.3031 1.75945 19.1875 2.13379 19.8342 2.80762C20.4713 3.49081 20.7946 4.3799 20.7185 5.32513L20.205 12.3442C20.1004 14.0568 18.5789 15.4419 16.8387 15.4419ZM5.51279 3.15389L4.77105 11.9511C4.7235 12.4939 4.90418 13.0086 5.27505 13.4111C5.64592 13.8135 6.15943 14.0288 6.71099 14.0288H16.8387C17.8276 14.0288 18.7215 13.2052 18.7976 12.2319L19.3111 5.21283C19.3492 4.66066 19.1685 4.13658 18.7976 3.75287C18.4267 3.3598 17.9132 3.14453 17.3522 3.14453H5.51279V3.15389Z" fill="#D9D9D9"/>
<path d="M14.9918 20.1212C13.9457 20.1212 13.0898 19.2789 13.0898 18.2494C13.0898 17.22 13.9457 16.3777 14.9918 16.3777C16.0378 16.3777 16.8937 17.22 16.8937 18.2494C16.8937 19.2789 16.0378 20.1212 14.9918 20.1212ZM14.9918 17.7815C14.7255 17.7815 14.5163 17.9874 14.5163 18.2494C14.5163 18.5115 14.7255 18.7174 14.9918 18.7174C15.258 18.7174 15.4672 18.5115 15.4672 18.2494C15.4672 17.9874 15.258 17.7815 14.9918 17.7815Z" fill="#D9D9D9"/>
<path d="M7.38531 20.1212C6.33926 20.1212 5.4834 19.2789 5.4834 18.2494C5.4834 17.22 6.33926 16.3777 7.38531 16.3777C8.43136 16.3777 9.28721 17.22 9.28721 18.2494C9.28721 19.2789 8.43136 20.1212 7.38531 20.1212ZM7.38531 17.7815C7.11904 17.7815 6.90983 17.9874 6.90983 18.2494C6.90983 18.5115 7.11904 18.7174 7.38531 18.7174C7.65157 18.7174 7.86078 18.5115 7.86078 18.2494C7.86078 17.9874 7.65157 17.7815 7.38531 17.7815Z" fill="#D9D9D9"/>
<path d="M19.5114 7.01905H8.09993C7.71004 7.01905 7.38672 6.70085 7.38672 6.31714C7.38672 5.93343 7.71004 5.61523 8.09993 5.61523H19.5114C19.9013 5.61523 20.2246 5.93343 20.2246 6.31714C20.2246 6.70085 19.9013 7.01905 19.5114 7.01905Z" fill="#D9D9D9"/>
</svg>
</button>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2295 28.3652C19.9555 28.3652 19.6904 28.3305 19.4695 28.2525C16.0937 27.1169 10.7295 23.086 10.7295 17.1307C10.7295 14.0967 13.2304 11.6348 16.3058 11.6348C17.7993 11.6348 19.1955 12.2069 20.2295 13.2298C21.2634 12.2069 22.6597 11.6348 24.1532 11.6348C27.2286 11.6348 29.7295 14.1053 29.7295 17.1307C29.7295 23.0947 24.3653 27.1169 20.9895 28.2525C20.7686 28.3305 20.5034 28.3652 20.2295 28.3652ZM16.3058 12.9351C13.9639 12.9351 12.0551 14.8161 12.0551 17.1307C12.0551 23.0513 17.8611 26.3454 19.9025 27.0302C20.0616 27.0822 20.4062 27.0822 20.5653 27.0302C22.5979 26.3454 28.4127 23.06 28.4127 17.1307C28.4127 14.8161 26.5039 12.9351 24.1621 12.9351C22.8188 12.9351 21.5727 13.5505 20.7686 14.6168C20.5211 14.9462 19.9555 14.9462 19.7081 14.6168C18.8862 13.5419 17.649 12.9351 16.3058 12.9351Z" fill="#666666"/>
<rect x="1.22949" y="0.5" width="38" height="39" stroke="#666666"/>
</svg>
</div>
<p className={css.characterst__name2}>{t("chaircharact")}</p>
<div className={css.characterist}>
<div className={css.char__title}>
  <p>{t("height")}</p>
  <p className={css.characterst__name}>{t("94sm")}</p>
  </div> 

  <div className={css.char__title}>
  <p>{t("material")}</p>
  <p className={css.characterst__name}>{t("metal")}</p>
  </div> 
</div>
<div className={css.characterist1}>
<div className={css.char__title1}>
  <p>{t("depth")}</p>
  <p className={css.characterst__name}>{t("62sm")}</p>
  </div> 
  <div className={css.char__title1}>
  <p>{t("wrapping")}</p>
  <p className={css.characterst__name}>{t("textille")}</p>
  </div> 
</div>
<div className={css.characterist2}>
<div className={css.char__title2}>
  <p>{t("width")}</p>
  <p className={css.characterst__name}>{t("80sm")}</p>
  </div> 

  <div className={css.char__title2}>
  <p>{t("mechanism")}</p>
  <p className={css.characterst__name}>{t("turning")}</p>
  </div> 
</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Furniture;