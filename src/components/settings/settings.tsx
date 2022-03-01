import React, {useState, useEffect} from "react";
import { BiCog } from "react-icons/bi";
import "./settings.css";


const Settings = () => {
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
    <div>
      <span  onClick={toggle_shown}>
        <BiCog className="settings-icon"/>
      </span>

      <div className="settings-wrapper" style={{display:display ? "flex" : "none"}}>
        <div className="settings-cover" onClick={toggle_shown} />
        <div className="settings-detailed">
          <div className="settings-exit" onClick={toggle_shown}/>
          
          <h3><u>Settings:</u></h3>
          <div>No settings as of now</div> 
          <i>(Work In Progress)</i>
          
        </div>
      </div>
    </div>
  );
};


export default Settings;