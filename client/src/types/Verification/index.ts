import { Dispatch, SetStateAction } from "react";

export interface formType {
  phone: string;
  name?: string;
  password: string;
}

export interface registerFormType {
  phone: string;
  name: string;
  password: string;
}

export interface inputType {
  aria: string;
  src: string;
  alt: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: any;
  objKey: string;
}

export interface propTypes {
  variant: string;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isHidden: boolean;
}
