// import React, {useState} from "react";
// import css from "./BasketButton.scss";
// import { useTranslation } from "react-i18next";
// import Courier2 from './Courier2/Courier2';
// import Pointofissue2 from './Pointofissue2/Pointofissue2';
// function BasketButton() {
//     const { t } = useTranslation("PaymentMethod")
//     const [status, setStatus] = useState('signIn')
//   return (
//     <div className={css.proba}>
//         <div className="basket__container">
//             <h1 className="basket__title">Корзина</h1>

//             <h3 className="delivery__catalog-title">{t("title2")}</h3>
//         <div className="delivery__row1">
//           <div>
//           <p className="delivery__catalog-text2">{t("countries")}</p>
//           <input className="delivery__row1-input" type="text"  placeholder={t("countries")}/>
//           </div>
//          <div>
//          <p className="delivery__catalog-text2">{t("locality")}</p>
//          <input className="delivery__row1-input" type="text" placeholder={t("locality")}/>
//          </div>
//          <div>
//          <p className="delivery__catalog-text2">{t("streets")}</p>
//          <input className="delivery__row1-input" type="text" placeholder={t("streets")}/>
//          </div>
//          <div>
//          <p className="delivery__catalog-text2">{t("houses")}</p>
//          <input className="delivery__row1-input" type="text" placeholder={t("houses")}/>
//          </div>
// <div>
// <button className="delivery__row1-btn">{t("confirm")}</button>
// </div>
//         </div>
//         <p className="delivery__catalog-text">{t("shipping")}</p>
//         <div className="delivery__row2">
//         <p onClick={()=> setStatus('signIn')} className={`delivery__title ${status === 'signIn' && 'delivery__title_active'}`}>{t("courier")}</p>
//         <p onClick={()=> setStatus('signUp')} className={`delivery__title ${status === 'signUp' && 'delivery__title_active'}`}>{t("point")}</p>
//         </div>
//         {
//     status === 'signUp'  
// }
// <button type='button'>{status === 'signIn' ? <Courier2/> : <Pointofissue2/>}</button>
// <div className="cardinformation">
//     <h3>Способ оплаты</h3>
//     <div className="cardinformation__row">
//         <div className="cardinformation__left">

//             <div className="cardinformation__left-up">
//             </div>
//         </div>
//         <div className="cardinformation__right">
//             <p>Привязанные карты</p>
//         </div>
//     </div>
// </div>
//       </div>
//     </div>
//   )
// }

// export default BasketButton
