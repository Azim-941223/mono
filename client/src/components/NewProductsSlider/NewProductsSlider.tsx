import React, { useRef, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import "swiper/css";
import css from "./NewProductsSlider.module.scss";
import chair from "../../assets/images/NewProductsSlider/chair1.png";
import chairBack from "../../assets/images/NewProductsSlider/chair1-back.png";
import iconArrowhead from "../../assets/icons/ic_arrowhead.svg";
import iconHeart from "../../assets/icons/ic_heart.svg";
import iconHeartSelected from "../../assets/icons/ic_heart-selected.svg";

function NewProductsSlider() {
  const { t } = useTranslation("NewProductsSlider");

  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);

  const [fadeEffect, setFadeEffect] = useState<string>("left");
  const [colors, setColors] = useState([
    { color: "#AA968C", active: false },
    { color: "#CB7F58", active: false },
    { color: "#0A1573", active: false },
  ]);

  return (
    <article className={`${css["NewProductsSlider"]}`}>
      <div className="container">
        <div className={css["NewProductsSlider__header"]}>
          <h1>{t("title")}</h1>
          <hr />
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={35}
          navigation={{ prevEl: prevBtn.current, nextEl: nextBtn.current }}
          allowTouchMove={false}
          slidesPerView={
            window.screen.width > 1280
              ? Number((1280 / 355).toFixed(2))
              : Number((window.screen.width / 355).toFixed(2))
          }
          onNavigationPrev={() => {
            if (fadeEffect === "right") {
              setFadeEffect("both");
            }
          }}
          onSlideChange={() => {
            setFadeEffect("both");

            if (prevBtn.current?.disabled) {
              setFadeEffect("left");
            }
          }}
          onReachEnd={() => {
            setFadeEffect("right");
          }}
          onReachBeginning={() => {
            setFadeEffect("left");
          }}
          className={clsx({
            [css["NewProductsSlider__swiper"]]: true,
            [css[`${fadeEffect}-fade`]]: true,
          })}
        >
          {[...Array(10)].map((elem, index) => (
            <SwiperSlide key={index} className={css["card"]}>
              <div className={css["card__top"]}>
                <img src={chair} alt="chair" />
                <img src={chairBack} alt="chair back" />
              </div>

              <div className={css["card__bottom"]}>
                <div className={css["card__text"]}>
                  <h2>{t("chair")} Teo</h2>
                  <h1>$380</h1>
                </div>

                <div className={css["card__colors"]}>
                  {colors.map((elem2, index2, arr) => (
                    <button
                      key={index2}
                      className={clsx({
                        [css["card__color-radio"]]: true,
                        [css["card__color-radio_active"]]: elem2.active,
                      })}
                      style={{ backgroundColor: elem2.color }}
                    ></button>
                  ))}
                </div>
              </div>

              <button className={css["card__featured"]}>
                <img src={iconHeart} alt="heart icon" />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button ref={prevBtn} className={css["prev-btn"]}>
        <img src={iconArrowhead} alt="arrowhead-left" />
      </button>
      <button ref={nextBtn} className={css["next-btn"]}>
        <img src={iconArrowhead} alt="arrowhead-right" />
      </button>
    </article>
  );
}

export default NewProductsSlider;
