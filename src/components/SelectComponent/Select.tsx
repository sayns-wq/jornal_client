import Select from "react-select";
import { options, OptionType, sylesConfig } from "./constants";
import { Control, Controller, UseFormRegisterReturn } from "react-hook-form";
import { InputsType } from "@/app/createArticle/types";
type selectOptionsPropsType = {
  control: Control<InputsType>;
  name: keyof InputsType;
  placeholder?: string;
};

export default function SelectComponent({
  control,
  name,
  placeholder = "select",
}: selectOptionsPropsType) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, ref } }) => (
          <Select
            options={options}
            styles={sylesConfig}
            onChange={(e) => onChange((e as any)?.label)}
            onBlur={onBlur}
            ref={ref}
            placeholder={placeholder}
          ></Select>
        )}
      ></Controller>
    </>
  );
}
