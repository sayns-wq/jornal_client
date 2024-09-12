import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface inputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn<string>;
}
export default function Input({
  type = "text",
  placeholder = "",
  register,
}: inputPropsType) {
  return <input type={type} placeholder={placeholder} {...register}></input>;
}
