import { body } from "express-validator";

function isPhoneCustom(str: string) {
  let regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  return regex.test(str);
}

export const registerValidation = [
  body("phone", "Неверный формат номера телефона").custom((input) => isPhoneCustom(input)),
  body("password", "Пароль должен содержать минимум 5 символов").isLength({ min: 5 }),
  body("name", "Имя должно содержать минимум 2 символа").isLength({ min: 2 }),
];