import { OptionsOrGroups, StylesConfig } from "react-select";

export type OptionType = { [key: string]: string };
export type OptionsType = OptionsOrGroups<OptionType, any>;
export const options: OptionsType = [{ label: "aaaaaa" }];
export const sylesConfig: StylesConfig<OptionsType> = {
  control: (styles) => ({
    ...styles,
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.06);",
    boxSizing: "border-box",
    marginLeft: "5px 0",
    transition: "all 0.7s",
    fontSize: "14px",
    padding: "5px 17px",
    paddingRight: "10px",
    ":hover": {
      border: "1px solid blueviolet",
    },
  }),
  input: (styles) => ({
    ...styles,
    fontSize: "14px",
    padding: 0,
  }),
};
