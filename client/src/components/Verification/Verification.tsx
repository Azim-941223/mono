import { useEffect, useState } from "react";
import clsx from "clsx";

import css from "./Verification.module.scss";
import personIcon from "../../assets/icons/ic_person_2.svg";
import lockIcon from "../../assets/icons/ic_lock.svg";
import phoneIcon from "../../assets/icons/ic_phone.svg";
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

  const [variant, setVariant] = useState<string>("login");
  const renderVariants = variants.map((elem: string, index) => (
    <h2
      key={index}
      className={clsx({
        [css.active]: variant === elem,
      })}
      onClick={() => setVariant(elem)}
    >
      {elem}
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
    },
  ];
  const renderInputs = (array: inputType[]) =>
    array.map((elem, index) => (
      <label key={index} aria-label={elem.aria}>
        <img src={elem.src} alt={elem.alt} />
        <input
          type={elem.type}
          placeholder={elem.placeholder}
          value={elem.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            elem.setValue((state: formType) => ({
              ...state,
              [elem.objKey]:
                elem.objKey === "phone"
                  ? Number(e.target.value) ||
                    e.target.value === "" ||
                    e.target.value === "+"
                    ? e.target.value.substring(0, 1) !== "+"
                      ? "+" + e.target.value
                      : e.target.value
                    : state[elem.objKey]
                  : e.target.value,
            }))
          }
          required
        />
      </label>
    ));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (variant === "login") {
      const userData = {
        phone: loginInputsValue.phone,
        password: loginInputsValue.password,
      };
      dispatch(fetchLogin(userData))
        .unwrap()
        .then((res) => {
          console.log(res);
          if (res.meta.requestStatus === "rejected") {
            return;
          }
          setLoginInputsValue(loginFormTemplate);
        })
        .catch((err) => {
          const status = err.message.replace(/[^0-9.]/g, "");

          if (!status) {
            console.log(err.code);
            return;
          }

          if (status === "400") {
            setModalVariant("error");
            setIsModalActive(true);
            console.log("Неверное имя или пароль");
          }
        });
    } else {
      const userData = {
        phone: registerInputsValue.phone,
        name: registerInputsValue.name,
        password: registerInputsValue.password,
      };
      const res = dispatch(fetchRegister(userData)).then((data) => {
        console.log(data);
        if (data.meta.requestStatus === "rejected") {
          return;
        }
        setRegisterInputsValue(registerFormTemplate);
      });
    }
  }

  const [modalVariant, setModalVariant] = useState<string>("error");
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

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <article className={css.Verification}>
      <div className={css.container}>
        <h1>Добро пожаловать</h1>

        <nav>{renderVariants}</nav>

        <form className={css.form} onSubmit={handleSubmit}>
          <div>
            {variant === "login" ? (
              <>{renderInputs(loginInputs)}</>
            ) : (
              <>{renderInputs(registerInputs)}</>
            )}
          </div>

          <div className={css["form__buttons"]}>
            <button
              type="submit"
              className={css.submit}
              onClick={() => setIsModalHidden(false)}
            >
              Войти
            </button>
            <div>
              <p>Или</p>
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
