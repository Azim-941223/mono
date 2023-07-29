import { formType, inputType } from "../../types/Verification";
import { SetStateAction } from "react";

export function phoneInputFunc(
  elem: inputType,
  e: React.ChangeEvent<HTMLInputElement>
) {
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
  }));
}

export function modalPhoneInputFunc(
  setValue: React.Dispatch<SetStateAction<string>>,
  e: React.ChangeEvent<HTMLInputElement>
) {
  setValue((state: string) =>
    Number(e.target.value) || e.target.value === "" || e.target.value === "+"
      ? e.target.value.substring(0, 1) !== "+"
        ? "+" + e.target.value
        : e.target.value
      : state
  );
}
