import { SELECT_THEME } from "../types/Home";

export const selectTheme = (theme) => ({
  type : SELECT_THEME,
  payload : theme
});