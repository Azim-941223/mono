import clsx from "clsx";
import React from "react";

import css from "./Button.module.scss";
import icArrow from "../../assets/icons/ic_arrow-right.svg";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  arrow?: boolean;
}

function Button({ children, primary, secondary, arrow }: ButtonProps) {
  const classNames = clsx({
    [css.Button]: true,
    [css.primary]: primary,
    [css.secondary]: secondary,
  });
  return (
    <button className={classNames}>
      <span>{children}</span>
      {arrow ? <img src={icArrow} alt="arrow-left" /> : ""}
    </button>
  );
}

export default Button;
