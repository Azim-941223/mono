import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import css from "./SliderFurniture.scss";
import bos1 from "../../assets/images/ChairBoston/Boston2.png";
import bos2 from "../../assets/images/ChairBoston/Boston3.png";
import bos3 from "../../assets/images/ChairBoston/Boston4.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SliderFurniture() {
  return (
    <Swiper
      className="slider"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img className=".Right__image" src={bos1} alt="image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className=".Right__image" src={bos2} alt="image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={css.Right__image} src={bos3} alt="image" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={css.Right__image} src={bos1} alt="image" />
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default SliderFurniture;
