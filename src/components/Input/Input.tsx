import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./input.module.css";

interface inputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<string>;
}
export default function Input({
  type = "text",
  placeholder = "",
  register,
}: inputPropsType) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      {...register}
    ></input>
  );
}
