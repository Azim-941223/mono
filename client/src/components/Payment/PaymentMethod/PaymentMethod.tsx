import React from 'react'
import css from "./PaymentMethod.scss";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function PaymentMethod() {
  const { t } = useTranslation("PaymentMethod");

  return (
    <div className="payment__catalog">
      <p  className={css.proba}></p>
      <p className="payment__title1">{t("payment")}</p>

      <p className="payment__text">{t("text1")}</p>
    
    <hr/>
    <p className="payment__title2">{t("bankcard")}</p>

    <p className="payment__text">{t("paymentinfo")} <br/>
    {t("paymentinfo2")} <br/>
    {t("paymentinfo3")}
    </p>


      <div className="payment__row">
        <Link to={"https://usa.visa.com/pay-with-visa/find-card/"}> <svg className="payment__row-first" width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2293 5.70784C24.2026 7.81523 26.1074 8.99131 27.5424 9.69049C29.0167 10.408 29.5119 10.868 29.5063 11.5095C29.495 12.4914 28.3302 12.9247 27.2399 12.9416C25.3379 12.9712 24.2322 12.4281 23.3529 12.0173L22.6678 15.2234C23.5499 15.63 25.1832 15.9845 26.8769 16C30.8526 16 33.4537 14.0375 33.4678 10.9946C33.4833 7.13293 28.1262 6.9191 28.1628 5.19295C28.1754 4.66962 28.6748 4.11112 29.7693 3.96903C30.3109 3.89728 31.8064 3.84242 33.5016 4.62319L34.167 1.5212C33.2554 1.18919 32.0835 0.871254 30.6247 0.871254C26.8826 0.871254 24.2505 2.86047 24.2293 5.70784ZM40.5609 1.13855C39.835 1.13855 39.223 1.56199 38.9501 2.21194L33.2709 15.7721H37.2437L38.0343 13.5873H42.8892L43.3478 15.7721H46.8493L43.7937 1.13855H40.5609ZM41.1166 5.09166L42.2631 10.5866H39.1232L41.1166 5.09166ZM19.4125 1.13855L16.2809 15.7721H20.0666L23.1968 1.13855H19.4125ZM13.812 1.13855L9.87153 11.0987L8.27762 2.62976C8.09052 1.68439 7.35195 1.13855 6.53178 1.13855H0.0900353L0 1.5634C1.32239 1.85039 2.82486 2.31323 3.73506 2.80842C4.29215 3.11088 4.45112 3.37536 4.63401 4.09424L7.653 15.7721H11.6539L17.7876 1.13855H13.812Z" fill="#254AA5"/>
</svg>
        </Link>
      

      <Link to={"https://brand.mastercard.com/brandcenter-ca/more-about-our-brands.html"}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.4016 20.1538C47.1534 18.6647 45.7885 17.672 43.9271 17.672C43.3067 17.672 42.8104 17.672 42.1899 17.672C41.0731 17.5479 40.8249 17.9202 40.8249 18.7888C40.8249 23.1319 40.8249 27.3509 40.8249 31.694C40.8249 33.9276 38.5914 36.2852 35.9855 36.7816C27.7957 38.6429 19.6059 40.3801 11.4161 42.2415C10.5475 42.4896 9.55477 42.4896 8.56206 42.4896C8.1898 42.4896 7.56937 42.2415 7.44528 41.8692C7.32119 41.621 7.69345 41.1247 7.94162 40.8765C8.31389 40.6283 8.81025 40.3801 9.3066 40.132C10.7957 39.6356 12.4088 39.1393 13.8978 38.6429C19.9781 36.6575 26.0585 34.6721 32.1388 32.5626C34.8687 31.694 36.3578 29.8327 36.3578 27.475C36.4818 20.0297 36.3578 12.4603 36.3578 5.01506C36.3578 3.77418 35.7373 2.78148 34.3723 2.28513C32.7592 1.66469 31.2701 2.16103 29.9052 2.78147C21.219 6.87637 12.657 10.9713 3.97079 15.0662C1.48903 16.3071 0 18.0443 0 20.5261C0 27.5991 0 34.6721 0 41.7451C0 42.1174 -3.02968e-05 42.4896 0.124058 42.7378C0.992674 45.0955 3.22629 46.5845 6.2044 46.5845C12.2847 46.5845 18.365 46.5845 24.4453 46.5845C30.5256 46.5845 36.4818 46.5845 42.5622 46.5845C43.9271 46.5845 45.0439 46.3364 46.0366 45.4678C47.2775 44.475 47.2775 43.1101 47.2775 41.8692C47.2775 34.9203 47.2775 28.0954 47.2775 21.1465C47.5257 21.0224 47.5257 20.5261 47.4016 20.1538ZM22.0876 17.9202C22.7081 16.3071 24.0731 15.3144 26.0585 15.0662C27.4234 14.9421 28.5402 15.6866 28.7884 16.9275C29.0366 18.7888 26.803 21.0224 24.4453 21.0224C22.584 21.0224 21.4672 19.6575 22.0876 17.9202Z" fill="#E47418"/>
</svg>
      </Link>


<Link to={"https://brand.mastercard.com/brandcenter-ca/more-about-our-brands.html"}>
<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="24" r="13.5" fill="#E80B26"/>
<circle cx="33" cy="24" r="13.5" fill="#F59D31"/>
<path d="M24 34.0623C26.762 31.5903 28.5 27.9982 28.5 23.9999C28.5 20.0016 26.762 16.4094 24 13.9375C21.238 16.4094 19.5 20.0016 19.5 23.9999C19.5 27.9982 21.238 31.5903 24 34.0623Z" fill="#FC6020"/>
</svg>
</Link>


<Link to={"https://www.paypal.com/fi/home"}><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.414 40.7797L18.038 36.8167L16.6482 36.7845H10.0117L14.6237 7.54139C14.638 7.45311 14.6845 7.3708 14.7525 7.31234C14.8205 7.25389 14.9076 7.22168 14.9983 7.22168H26.1883C29.9032 7.22168 32.4668 7.99472 33.8053 9.52052C34.4328 10.2363 34.8325 10.9843 35.0257 11.8074C35.2285 12.6711 35.2321 13.703 35.0341 14.9616L35.0198 15.0535V15.8599L35.6473 16.2154C36.1758 16.4958 36.5957 16.8167 36.9178 17.1841C37.4546 17.7961 37.8018 18.5739 37.9485 19.4961C38.1 20.4445 38.0499 21.573 37.8018 22.8507C37.5154 24.3204 37.0526 25.6004 36.4275 26.6479C35.8525 27.613 35.12 28.4134 34.2503 29.0338C33.42 29.6231 32.4334 30.0705 31.318 30.3568C30.2372 30.6383 29.0049 30.7803 27.6532 30.7803H26.7824C26.1596 30.7803 25.5548 31.0046 25.08 31.4066C24.604 31.817 24.2891 32.3777 24.1925 32.9908L24.1268 33.3475L23.0245 40.3323L22.9744 40.5888C22.9613 40.6699 22.9387 40.7105 22.9052 40.7379C22.8754 40.763 22.8325 40.7797 22.7907 40.7797H17.414Z" fill="#253B80"/>
<path d="M36.2418 15.1465C36.2084 15.36 36.1703 15.5783 36.1273 15.8026C34.6516 23.3791 29.603 25.9965 23.1551 25.9965H19.872C19.0835 25.9965 18.419 26.5691 18.2961 27.3469L16.6152 38.0072L16.1392 41.029C16.0593 41.5396 16.453 42 16.9684 42H22.7912C23.4807 42 24.0665 41.499 24.175 40.819L24.2323 40.5232L25.3286 33.5658L25.399 33.1841C25.5064 32.5017 26.0933 32.0006 26.7828 32.0006H27.6537C33.2952 32.0006 37.7116 29.7102 39.0024 23.0821C39.5416 20.3132 39.2624 18.0012 37.8356 16.3752C37.4038 15.8849 36.8681 15.4781 36.2418 15.1465Z" fill="#179BD7"/>
<path d="M34.6989 14.5307C34.4734 14.465 34.2408 14.4054 34.0022 14.3517C33.7624 14.2992 33.5167 14.2527 33.2638 14.2121C32.3786 14.069 31.4087 14.001 30.3696 14.001H21.599C21.3831 14.001 21.1779 14.0499 20.9942 14.1382C20.5897 14.3326 20.2891 14.7156 20.2164 15.1844L18.3506 27.0019L18.2969 27.3466C18.4198 26.5688 19.0842 25.9962 19.8728 25.9962H23.1558C29.6038 25.9962 34.6524 23.3777 36.1281 15.8023C36.1722 15.5781 36.2092 15.3598 36.2426 15.1462C35.8692 14.9482 35.4648 14.7788 35.0294 14.6344C34.922 14.5987 34.811 14.5641 34.6989 14.5307Z" fill="#222D65"/>
<path d="M20.993 14.1396C21.1779 14.0513 21.3819 14.0024 21.5979 14.0024H30.3685C31.4076 14.0024 32.3775 14.0704 33.2626 14.2135C33.5155 14.2541 33.7613 14.3006 34.0011 14.3531C34.2397 14.4068 34.4723 14.4664 34.6978 14.5321C34.8099 14.5655 34.9208 14.6001 35.0294 14.6347C35.4648 14.779 35.8693 14.9496 36.2427 15.1464C36.6817 12.3466 36.2391 10.4402 34.7252 8.71399C33.0562 6.8136 30.044 6 26.1896 6H14.9996C14.2122 6 13.5406 6.57262 13.4189 7.35163L8.75801 36.8953C8.66615 37.4799 9.11709 38.0072 9.70641 38.0072H16.6149L18.3494 27.0021L20.2152 15.1846C20.288 14.7158 20.5886 14.3328 20.993 14.1396Z" fill="#253B80"/>
</svg>
</Link>

      </div>


      <p className="payment__title2" >{t("payment2")}</p>
      <p  className="payment__text"> {t("text2")} <br/>
      {t("text3")} <br/>
      {t("text4")}  <br/>
      {t("text5")} </p>


          <p className="payment__text">
          {t("text6")}  <br/>
          {t("text7")} 
          </p>
    </div>
  )
}

export default PaymentMethod
