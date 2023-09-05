import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import css from "./ContactDetails.module.scss";
import Button from "../Button/Button";
import backgroundImage from "../../assets/images/ContactDetails/background.png";
import closeCircleIcon from "../../assets/icons/ic_close-circle.svg";
import succesCircleIcon from "../../assets/icons/ic_success-circle.svg";
import clsx from "clsx";

function ContactDetails() {
  const { t } = useTranslation("ContactDetails");

  const form = useRef<HTMLFormElement>(null);
  const [isModal, setIsModal] = useState(0);
  const [formInputs, setFormInputs] = useState({
    email: "",
    phone: "",
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mono",
        "template_mono",
        form.current || "",
        "m0SB99m8EJgMWl2Yp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormInputs({ email: "", phone: "" });
    setIsModal(1);
  };

  return (
    <article className={css.ContactDetails}>
      <div className="container">
        <h1>{t("title")}</h1>
      </div>
      <section className={css.content}>
        <div className={`container ${css.sectionContainer}`}>
          <form ref={form} onSubmit={(e) => sendEmail(e)}>
            <p>
              {t("form.title").split("\n")[0]} <br />
              {t("form.title").split("\n")[1]}
            </p>
            <div>
              <input
                type="email"
                name="user_email"
                aria-label="email"
                placeholder={t("form.email")}
                value={formInputs.email}
                onChange={(e) =>
                  setFormInputs((state) => {
                    return { email: e.target.value, phone: state.phone };
                  })
                }
                required
              />
              <input
                type="text"
                name="user_phone"
                aria-label="phone number"
                placeholder={t("form.phone")}
                value={formInputs.phone}
                onChange={(e) =>
                  setFormInputs((state) => {
                    return { email: state.email, phone: e.target.value };
                  })
                }
                required
              />
              <Button primary>{t("form.button")}</Button>
            </div>
          </form>
        </div>
        <div className={css.imageWrapper}>
          <img src={backgroundImage} alt="backgroung image" />
        </div>
      </section>

      <section
        className={clsx({
          [css["form-modal__wrapper"]]: true,
          [css["active"]]: isModal,
          [css["hidden"]]: !isModal,
        })}
      >
        <div className={css["form-modal"]}>
          <h1>
            {t("form-modal.title")} <img src={succesCircleIcon} alt="success" />
          </h1>
          <p>{t("form-modal.text")}</p>

          <button onClick={() => setIsModal(0)}>
            <img src={closeCircleIcon} alt="close button" />
          </button>
        </div>
      </section>
    </article>
  );
}

export default ContactDetails;
