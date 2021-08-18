import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./index";

export const CustomThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
