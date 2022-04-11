import React, { FC, useState } from "react";
import { Section } from "../../../types";
import "../classes.css";

const ClassesSections: FC<{sections: Section[]}> = ({sections}) => {

  const [display, update_display] = useState<boolean>(false);

  const toggle_shown = () => {
    update_display(!display);
  };

  return(
    <div>
      <div className="body-title transferlistTitle" onClick={toggle_shown}>
        <span>
          Sections
        </span>
        <span className="arrow"></span>
      </div>  
      <div className="transferList" style={{display:display ? "block" : "none"}}>
        {sections.length > 0 ? sections.map((el: Section, pos: number) => (
          <div className="class-header" key={pos}>
            <div>{el.section}</div>
            <div>{el.crn}</div>
            <div>{el.remaining} / {el.capacity}</div>
          </div>
        )) : <div>No Sections</div>}
      </div>
    </div>
  );
};

export default ClassesSections;