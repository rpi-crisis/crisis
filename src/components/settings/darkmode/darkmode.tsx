import React, {useState, useEffect} from "react";
import "./darkmode.css";
import "../settings.css";


const DarkModeButton = () => {

  const [display, update_display] = useState<boolean>(false);

  const toggle_shown = () => {
    update_display(!display);
  };
  
  useEffect(() => {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    const handleEsc = (event: any) => {
      if (event.keyCode === 27){
        update_display(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  return (
    <div className="settings-item">
      <span className="settings-item-title">
        Dark Mode:
      </span>
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider">
        </span>
      </label>
    </div>
  );

};

export default DarkModeButton;