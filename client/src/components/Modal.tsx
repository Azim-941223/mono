import React, {useState} from "react";
import css from "./Modal.scss";
import mod from "../assets/images/Modal/Modal.png";
import { useTranslation } from "react-i18next";
export default function Modal(){
    const { t } = useTranslation("Modal");
    const [modal, setModal] = useState(false)
    const toggleModal = () =>{
        setModal(!modal)
    }
    return(
        <>
<div className="modal1">
    <div className="modal__left">
        <h4 className="modal__left-title">{t("title")}</h4>
        <p className="modal__left-text">{t("text")}</p>
<div className="form">
<label className="form_label">
<input className="forms__field" name="login" type="text" placeholder={t("number")}/>
</label>
<br/>
    <div className="form-1">
    <label className="form_label">
        <input className="forms__field-1"  name="message" placeholder={t("projectinfo")}/>
        </label>
    </div>
<br/>
<label className="form_label">
    <input className="forms__field-2" name="email" type="email" placeholder= {t("tagphoto")}/>
</label>
<p className="forms__text">{t("price")}</p>
<button className="form__btn"
        onClick={toggleModal}
        >
            {t("send")}
        </button>
</div>
    </div>
    <div className="modal__right">
    <img className="modal__right-img" src={mod} alt="image" />
    <p className={css.proba}></p>
    </div>
</div>
        {modal &&(
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <h1 className="modal__title">{t("sent")}  <svg className="modal-symbol" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4998 27.4896C7.33442 27.4896 1.51025 21.6654 1.51025 14.5C1.51025 7.33458 7.33442 1.51041 14.4998 1.51041C21.6653 1.51041 27.4894 7.33458 27.4894 14.5C27.4894 21.6654 21.6653 27.4896 14.4998 27.4896ZM14.4998 3.32291C8.33734 3.32291 3.32275 8.3375 3.32275 14.5C3.32275 20.6625 8.33734 25.6771 14.4998 25.6771C20.6623 25.6771 25.6769 20.6625 25.6769 14.5C25.6769 8.3375 20.6623 3.32291 14.4998 3.32291Z" fill="white"/>
<path d="M12.7842 18.8258C12.5426 18.8258 12.313 18.7292 12.1438 18.56L8.72424 15.1404C8.37382 14.79 8.37382 14.21 8.72424 13.8596C9.07465 13.5092 9.65465 13.5092 10.0051 13.8596L12.7842 16.6388L18.9951 10.4279C19.3455 10.0775 19.9255 10.0775 20.2759 10.4279C20.6263 10.7783 20.6263 11.3583 20.2759 11.7088L13.4247 18.56C13.2555 18.7292 13.0259 18.8258 12.7842 18.8258Z" fill="white"/>
</svg> </h1> 
         <p className="modal__text">{t("popup")} </p>
          <button className="close-modal"  onClick={toggleModal} > X
 </button>
                </div>
            </div>

        </div>
        )}






        </>
    )
}