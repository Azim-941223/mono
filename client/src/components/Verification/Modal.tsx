import clsx from "clsx";
import { useRef, useState } from "react";
import { propTypes } from "../../types/Verification";
import css from "./Verification.module.scss";

const Modal: React.FC<propTypes> = ({
  variant,
  isActive,
  setIsActive,
  isHidden,
}: propTypes) => {
  const ref = useRef<HTMLDivElement>(null);

  const [errorText, setErrorText] = useState({
    h1: "Ошибка",
    p: "Неверный номер телефона или пароль",
  });

  const [forgotText, setForgotText] = useState({
    h1: "Забыли пароль?",
    p: "Укажите и подтвердите ваш e-mail адрес. В ближайшее время Вы получите на указаннный g-mail адрес ссылку для создания нового пароля.",
  });

  function handleClick() {
    if (variant === "error") {
      setIsActive(false);
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
        <div>
          <h1>{variant === "error" ? errorText.h1 : forgotText.h1}</h1>
          <p>{variant === "error" ? errorText.p : forgotText.p}</p>
          {variant !== "error" ? <input type="email" /> : ""}
        </div>
        <button onClick={handleClick}>Отправить ещё раз</button>
      </section>
    </div>
  );
};

export default Modal;
