import React, { ChangeEventHandler, FC } from "react";

import { useAppDispatch, useAppSelector } from "../../../store";
import { SET_THEME } from "../../../store/slices/settings";


import "./darkmode.css";
import "../settings.css";
const DarkModeButton: FC = () => {
  const dispatch = useAppDispatch();

  const setTheme = (theme: string) => {
    dispatch({ type: SET_THEME, payload: theme});
    document.documentElement.setAttribute("data-theme", theme);
  };

  const settings = useAppSelector(state => state.settings);
  setTheme(settings.theme);

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = () => {
    setTheme(settings.theme === "light" ? "dark" : "light");
  };

  return (
    <div className="settings-item">
      <span className="settings-item-title">
        Toggle Dark Mode:
      </span>
      <label className="switch">
        <input 
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={settings.theme !== "light"}
        />
        <span className="slider">
        </span>
      </label>
    </div>
  );

};

export default DarkModeButton;