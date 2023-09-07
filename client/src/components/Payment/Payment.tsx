import React,{useState} from "react";
import css from "./Payment.scss";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import Delivery from "./Delivery/Delivery";
import { useTranslation } from "react-i18next";
function Payment() {
  const { t } = useTranslation("Payment");
    const [status, setStatus] = useState("signIn");
  return (
    <div className={css.proba}>
       <form className="popup__form">
       <div className="popup__form-top">
        <p onClick={()=> setStatus("signIn")} className={`popup__title ${status === "signIn" && "popup__title_active"}`}>{t("paymentmethod")}</p>

        <p onClick={()=> setStatus("signUp")} className={`popup__title ${status === "signUp" && "popup__title_active"}`}>{t("delivery")}</p>
</div>
{
    status === "signUp"  
}
<button type='button'>{status === "signIn" ? <PaymentMethod/> : <Delivery/>}</button>
       </form>     
    </div>
  );
};
export default Payment;
