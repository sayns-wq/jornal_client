import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./button.module.css";

interface inputPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  register?: UseFormRegisterReturn<string>;
  placeholder?: string;
}
export default function Button({
  type = "submit",
  placeholder = "",
  register,
}: inputPropsType) {
  return (
    <button className={styles.button} type={type} {...register}>
      {placeholder}
    </button>
  );
}
