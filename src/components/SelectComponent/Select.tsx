import Select from "react-select";
import { options, OptionType, sylesConfig } from "./constants";
import { Control, Controller, UseFormRegisterReturn } from "react-hook-form";
import { InputsType } from "@/app/createArticle/types";
type selectOptionsPropsType = {
  register: UseFormRegisterReturn<string>;
  control: Control<InputsType>;
  name: keyof InputsType;
};

export default function SelectComponent({
  register,
  control,
  name,
}: selectOptionsPropsType) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            options={options}
            styles={sylesConfig}
            onChange={(e) => onChange((e as any)?.label)}
            onBlur={onBlur}
            ref={ref}
          ></Select>
        )}
      ></Controller>
    </>
  );
}
