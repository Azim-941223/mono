import clsx from "clsx";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { propTypes } from "../../types/Verification";
import { modalPhoneInputFunc, phoneInputFunc } from "../../utils/Verification";
import css from "./Verification.module.scss";

const Modal: React.FC<propTypes> = ({
  variant,
  isActive,
  setIsActive,
  isHidden,
}: propTypes) => {
  const { t } = useTranslation("Verification");
  const ref = useRef<HTMLDivElement>(null);

  type errorTextKey = keyof typeof errorTextsObj;
  const errorTextsObj = {
    loginError: {
      h1: "modal.error",
      p: "modal.loginError",
    },
    registerError: {
      h1: "modal.error",
      p: "modal.registerError",
    },
    phoneError: {
      h1: "modal.error",
      p: "modal.phoneError",
    },
    forgotError: {
      h1: "modal.forgotError-title",
      p: "modal.forgotError",
    },
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (variant !== "forgotError") {
      setIsActive(false);
      return;
    }

    const regex = new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);
    if (regex.test(inputValue)) {
      setIsActive(false);
      setInputValue("");
    }
  }

  return (
    <div
      ref={ref}
      className={clsx({
        [css["modal"]]: true,
        [css["modal--active"]]: isActive,
        [css["modal--hidden"]]: isHidden,
      })}
    >
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h1>{t(errorTextsObj[variant as errorTextKey].h1)}</h1>
            <p>{t(errorTextsObj[variant as errorTextKey].p)}</p>
            {variant === "forgotError" ? (
              <input
                ref={inputRef}
                type="text"
                placeholder={t("phone-number")}
                value={inputValue}
                onChange={(e) => modalPhoneInputFunc(setInputValue, e)}
                required
              />
            ) : null}
          </div>
          <button type="submit">{t("modal.button")}</button>
        </form>
      </section>
    </div>
  );
};

export default Modal;
