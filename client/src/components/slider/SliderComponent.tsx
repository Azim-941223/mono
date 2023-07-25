import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scss from "./SliderComponent.module.scss";
import { useTranslation } from "react-i18next";

const SliderComponent: React.FC = () => {
  const { t } = useTranslation(["main"]);
  const sliderRef = useRef<any>(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton onClick={handleNext} />,
    prevArrow: <PrevButton onClick={handlePrevious} />,
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        <div className={scss.slider}>
          <div className={scss.global}>
            <div className={scss.main}>
              <h1>{t("main.title")}</h1>
              <hr />
              <p>{t("main.paragraph")}</p>
              <button className={scss.catalog}>{t("main.catalog")}</button>
              <button className={scss.application}>
                {t("main.application")}
              </button>
            </div>
            <div className={scss.right_side}>
              <button onClick={handlePrevious}></button>
              <button className={scss.next_btn} onClick={handleNext}></button>
            </div>
          </div>
        </div>
        <div className={scss.slider}>
          <div className={scss.global2}>
            <div className={scss.main}>
              <h1>{t("main.title")}</h1>
              <hr />
              <p>{t("main.paragraph")}</p>
              <button className={scss.catalog}>{t("main.catalog")}</button>
              <button className={scss.application}>
                {t("main.application")}
              </button>
            </div>
            <div className={scss.right_side}>
              <button onClick={handlePrevious}></button>
              <button className={scss.next_btn} onClick={handleNext}></button>
            </div>
          </div>
        </div>
        <div className={scss.slider}>
          <div className={scss.global3}>
            <div className={scss.main}>
              <h1>{t("main.title")}</h1>
              <hr />
              <p>{t("main.paragraph")}</p>
              <button className={scss.catalog}>{t("main.catalog")}</button>
              <button className={scss.application}>
                {t("main.application")}
              </button>
            </div>
            <div className={scss.right_side}>
              <button onClick={handlePrevious}></button>
              <button className={scss.next_btn} onClick={handleNext}></button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
const NextButton: React.FC<{ onClick: () => void }> = ({ onClick }) => null;
const PrevButton: React.FC<{ onClick: () => void }> = ({ onClick }) => null;
export default SliderComponent;
