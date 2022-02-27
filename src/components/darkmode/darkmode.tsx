import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./darkmode.css";

let isDark: boolean = false;

const DarkMode = () => {

  const swapDark = () => {
    
  };

  return <span className="toggleDarkButton" onClick={()=>swapDark()}>
    <button type="button">YOOO</button>
  </span>



};

export default DarkMode;