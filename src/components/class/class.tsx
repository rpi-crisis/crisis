import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./class.css";

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const Class: FC<{data: any}> = ({data}) => {
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
      <div className="class" onClick={toggle_shown}>
        {data.id}<br/>{data.title}
      </div>
      <div className="wrapper" style={{display:display ? "flex" : "none"}}>
        <div className="cover" onClick={toggle_shown} />
        <div className="detailed">
          <div className="exit" onClick={toggle_shown}/>
          <div id="class-header">
            <Link to={"class/" + data.department + data.id_num}>{data.title}</Link>
            <div>{data.id}</div>
            <div>Credits: {data.credits}</div>
          </div>
          <div id="class-body">
            <div className="body-title">Descriptions</div>
            <div id="class-description">
              {data.description}
            </div>
            <div className="body-title">Transfers</div>
            <div id="transfers">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {data.transfer.length > 0 ? data.transfer.map((el: any, pos: number) => (
                <div id="class-header" key={pos}>
                  <div>{el.title}</div>
                  <div>{el.id}</div>
                  <div>{el.school}</div>
                  <div>{el.location}</div>
                </div>
              )) : <div>No Transfers</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
