import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

import css from "./Verification.module.scss";
import personIcon from "../../assets/icons/ic_person_2.svg";
import lockIcon from "../../assets/icons/ic_lock.svg";
import phoneIcon from "../../assets/icons/ic_phone.svg";
import hideIcon from "../../assets/icons/ic_hide.svg";
import {
  formType,
  inputType,
  registerFormType,
} from "../../types/Verification";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchLogin,
  fetchRegister,
  selectIsAuth,
} from "../../redux/slices/authSlice";
import { Navigate } from "react-router-dom";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import { phoneInputFunc } from "../../utils/Verification";

const variants = ["login", "register"];

const loginFormTemplate = {
  phone: "",
  password: "",
};
const registerFormTemplate = {
  phone: "",
  name: "",
  password: "",
};

const Verification: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const { t } = useTranslation("Verification");

  const [variant, setVariant] = useState<string>("login");
  const renderVariants = variants.map((elem: string, index) => (
    <h2
      key={index}
      className={clsx({
        [css.active]: variant === elem,
      })}
      onClick={() => setVariant(elem)}
    >
      {t(elem)}
    </h2>
  ));

  const [loginInputsValue, setLoginInputsValue] =
    useState<formType>(loginFormTemplate);
  const [registerInputsValue, setRegisterInputsValue] =
    useState<registerFormType>(registerFormTemplate);
  const loginInputs: inputType[] = [
    {
      aria: "phone-number",
      src: phoneIcon,
      alt: "phone",
      type: "text",
      placeholder: "phone-number",
      value: loginInputsValue.phone,
      setValue: setLoginInputsValue,
      objKey: "phone",
    },
    {
      aria: "password",
      src: lockIcon,
      alt: "lock",
      type: "password",
      placeholder: "password",
      value: loginInputsValue.password,
      setValue: setLoginInputsValue,
      objKey: "password",
    },
  ];
  const registerInputs: inputType[] = [
    {
      aria: "phone-number",
      src: phoneIcon,
      alt: "phone",
      type: "text",
      placeholder: "phone-number",
      value: registerInputsValue.phone,
      setValue: setRegisterInputsValue,
      objKey: "phone",
    },
    {
      aria: "name",
      src: personIcon,
      alt: "person",
      type: "text",
      placeholder: "name",
      value: registerInputsValue.name,
      setValue: setRegisterInputsValue,
      objKey: "name",
      minLength: 2,
    },
    {
      aria: "password",
      src: lockIcon,
      alt: "lock",
      type: "password",
      placeholder: "password",
      value: registerInputsValue.password,
      setValue: setRegisterInputsValue,
      objKey: "password",
      minLength: 5,
    },
  ];
  const renderInputs = (array: inputType[]) => {
    const ref = useRef<HTMLInputElement[] | null[]>([]);

    return array.map((elem, index) => (
      <label key={index} aria-label={elem.aria}>
        <img src={elem.src} alt={elem.alt} />
        <input
          ref={(el) => (ref.current[index] = el)}
          type={elem.type}
          placeholder={t(elem.placeholder)}
          value={elem.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            phoneInputFunc(elem, e)
          }
          minLength={elem.minLength ? elem.minLength : 0}
          required
        />
        {elem.type === "password" ? (
          <button
            type="button"
            onClick={() => {
              switch (ref.current[index]?.type) {
                case "password":
                  console.log("text");
                  ref.current[index]!.type = "text";
                  break;

                case "text":
                  console.log("password");
                  ref.current[index]!.type = "password";
                  break;

                default:
                  break;
              }
            }}
          >
            <img src={hideIcon} alt="show/hide" />
          </button>
        ) : null}
      </label>
    ));
  };
  const renderLoginForm = renderInputs(loginInputs);
  const renderRegisterForm = renderInputs(registerInputs);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (variant === "login") {
      const userData: formType = {
        phone: loginInputsValue.phone,
        password: loginInputsValue.password,
      };
      if (!userData.phone.length && !userData.password.length) {
        return;
      }
      dispatch(fetchLogin(userData))
        .unwrap()
        .then((res) => {
          console.log(res);
          if (res.meta.requestStatus === "rejected") {
            return;
          }
          setLoginInputsValue(loginFormTemplate);
          console.log("yes");
        })
        .catch((err) => {
          const status = err.message.replace(/[^0-9.]/g, "");

          if (!status) {
            return;
          }

          if (status === "400") {
            setModalVariant("loginError");
            setIsModalActive(true);
          }
        });
    } else {
      const regex = new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/);
      const userData: registerFormType = {
        phone: registerInputsValue.phone,
        name: registerInputsValue.name,
        password: registerInputsValue.password,
      };
      if (!regex.test(userData.phone)) {
        setModalVariant("phoneError");
        setIsModalActive(true);
        return;
      }
      dispatch(fetchRegister(userData))
        .unwrap()
        .then((res) => {
          if (res.meta.requestStatus === "rejected") {
            return;
          }
          setRegisterInputsValue(registerFormTemplate);
        })
        .catch((err) => {
          setModalVariant("registerError");
          setIsModalActive(true);
        });
    }
  }

  const [modalVariant, setModalVariant] = useState<string>("loginError");
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isModalHidden, setIsModalHidden] = useState<boolean>(true);
  useEffect(() => {
    const transition = 100;
    if (!isModalActive && !isModalHidden) {
      setTimeout(() => {
        setIsModalHidden(true);
      }, transition);
    }
  }, [isModalActive]);
  function handleForgotClick() {
    setModalVariant("forgotError");
    setIsModalActive(true);
    setIsModalHidden(false);
  }

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <article className={css.Verification}>
      <div className={css.container}>
        <h1>{t("title")}</h1>

        <nav>{renderVariants}</nav>

        <form className={css.form} onSubmit={handleSubmit}>
          <div>
            {variant === "login" ? (
              <>{renderLoginForm}</>
            ) : (
              <>{renderRegisterForm}</>
            )}
            {variant === "login" ? (
              <p className={css.forgotPassword} onClick={handleForgotClick}>
                {t("modal.forgotError-title")}
              </p>
            ) : null}
          </div>

          <div className={css["form__buttons"]}>
            <button
              type="submit"
              className={css.submit}
              onClick={() => setIsModalHidden(false)}
            >
              {t("submit-login")}
            </button>
            <div>
              <p>{t("or")}</p>
              <hr />
            </div>
            <button type="button">Гугл</button>
          </div>
        </form>
      </div>

      <Modal
        variant={modalVariant}
        isActive={isModalActive}
        isHidden={isModalHidden}
        setIsActive={setIsModalActive}
      />
    </article>
  );
};

export default Verification;
