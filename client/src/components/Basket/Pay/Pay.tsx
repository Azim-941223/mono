import scss from "./Pay.module.scss";
import { useState } from "react";
import map from "../../../assets/images/Basket/Pay/map.png";
import visa from "./../../../assets/icons/visa.svg";
import qiwi from "../../../assets/icons/qiwi.svg";
import mastercard from "../../../assets/icons/mastercard.svg";
import paypal from "../../../assets/icons/paypal.svg";
import { useTranslation } from "react-i18next";

const Pay: React.FC = () => {
  const { t } = useTranslation(["BasketPay"]);

  const [inputData, setInputData] = useState({
    country: "",
    locality: "",
    street: "",
    building: "",
    linkedCards: "",
    cardNumber: "",
    validityPeriod: "",
    verificationCode: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const logInputData = () => {
    console.log("Input Data:", inputData);
  };

  return (
    <div className={scss.container}>
      <div>
        <div className={scss.upper_div}>
          <h1>{t("basket")}</h1>
          <p className={scss.terms_delivery}>{t("delivery_terms")}</p>
          <div>
            <label>
              <p>{t("country")}</p>
              <input
                type="text"
                placeholder={t("country")}
                required
                name="country"
                value={inputData.country}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <p>{t("locality")}</p>
              <input
                type="text"
                placeholder={t("locality")}
                required
                name="locality"
                value={inputData.locality}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <p>{t("street")}</p>
              <input
                type="text"
                placeholder={t("street")}
                required
                name="street"
                value={inputData.street}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <p>{t("building")}</p>
              <input
                type="text"
                placeholder={t("building")}
                required
                name="building"
                value={inputData.building}
                onChange={handleInputChange}
              />
            </label>
            <button className={scss.confirm_btn} onClick={logInputData}>
              {t("submit_btn")}
            </button>
          </div>
        </div>
        <div className={scss.adress_map}>
          <div className={scss.adress}>
            <label>
              <p>{t("shipping_method")}</p>
              <input type="text" placeholder={t("by_courier")} required />
            </label>
            <p>{t("address_line1")}</p>
            <p>{t("address_line2")}</p>
            <p>{t("address_line3")}</p>
            <p>{t("address_line4")}</p>
            <p>{t("address_line5")}</p>
            <p className={scss.address_cost}>
              {t("cost")}
              <span>15$</span>
            </p>
          </div>
          <div className={scss.map}>
            <img src={map} alt="map" />
          </div>
        </div>
      </div>

      <div className={scss.lower_div}>
        <div className={scss.payment_method}>
          <h2>{t("payment_method")}</h2>
          <div className={scss.frame}>
            <div>
              <label className={scss.round_checkbox}>
                <input type="checkbox" />
                <span className={scss.checkmark}></span>
              </label>
              <img src={visa} alt="visa icon" />
              <span>Visa</span>
            </div>
            <div>
              <label className={scss.round_checkbox}>
                <input type="checkbox" />
                <span className={scss.checkmark}></span>
              </label>
              <img src={qiwi} alt="visa icon" />
              <span>Qiwi</span>
            </div>
            <div>
              <label className={scss.round_checkbox}>
                <input type="checkbox" />
                <span className={scss.checkmark}></span>
              </label>
              <img src={mastercard} alt="visa icon" />
              <span>Mastercard</span>
            </div>
            <div>
              <label className={scss.round_checkbox}>
                <input type="checkbox" />
                <span className={scss.checkmark}></span>
              </label>
              <img src={paypal} alt="visa icon" />
              <span>Paypal</span>
            </div>
          </div>

          <div className={scss.lower_frame}>
            <div>
              <h2>{t("sum")}</h2> <h2>7 385 $</h2>
            </div>
            <div>
              <p>{t("items")}</p> <span>7 385 $</span>
            </div>
            <div>
              <p>{t("delivery")}</p> <span>15 $</span>
            </div>
          </div>
        </div>

        <div className={scss.complete_payment}>
          <div className={scss.labels}>
            <label>
              <p>{t("linked_cards")}</p>
              <input
                type="text"
                placeholder={t("new_card")}
                required
                name="linkedCards"
                value={inputData.linkedCards}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <p>{t("card_number")}</p>
              <input
                type="number"
                placeholder="1234 1234 1234"
                required
                name="cardNumber"
                value={inputData.cardNumber}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className={scss.labels}>
            <label>
              <p>{t("validity_period")}</p>
              <input
                type="text"
                placeholder={t("month_year")}
                required
                name="validityPeriod"
                value={inputData.validityPeriod}
                onChange={handleInputChange}
                maxLength={5}
              />
            </label>
            <label>
              <p>{t("verification_code")}</p>
              <input
                type="number"
                placeholder="CVC"
                required
                name="verificationCode"
                value={inputData.verificationCode}
                onChange={handleInputChange}
                maxLength={3}
              />
            </label>
          </div>
          <div className={scss.remember_card}>
            <input type="checkbox" /> <span>{t("remember_card")}</span> <br />
            <input type="checkbox" /> <span>{t("get_receipt")}</span>
          </div>
          <p>{t("term_of_use")}</p>
          <div className={scss.btns}>
            <button className={scss.pay_btn}>{t("pay_btn")}</button>
            <button className={scss.cancel_btn}>{t("cancel_btn")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
