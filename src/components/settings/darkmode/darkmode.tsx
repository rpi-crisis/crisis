import React, { ChangeEventHandler } from "react";
import "./darkmode.css";
import "../settings.css";


const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};
const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersLight = window.matchMedia && 
      window.matchMedia("(prefers-color-scheme: light)").matches;

const defaultLight = 
      storedTheme === "light" || (storedTheme === null && prefersLight);

if (defaultLight) {
  setLight();
}

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setLight();
  }
  else {
    setDark();
  }
};

const DarkModeButton = () => {
  return (
    <div className="settings-item">
      <span className="settings-item-title">
        Dark/Light Mode:
      </span>
      <label className="switch">
        <input 
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultLight}
        />
        <span className="slider">
        </span>
      </label>
    </div>
  );

};

export default DarkModeButton;