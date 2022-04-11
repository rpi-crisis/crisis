import React, { FC } from "react";
import { Section } from "../../../types";
import "../classes.css";

const ClassesSections: FC<{sections: Section[]}> = ({sections}) => {
  return(
    <div>
      <div className="body-title">
        <span>
          Sections
        </span>
      </div>  
      <div className="sectionsList">
        {sections.length > 0 ? sections.map((el: any, pos: number) => (
          <div id="class-header" key={pos}>
            <div>{el.section}</div>
            <div>{el.crn}</div>
            <div>{el.remaining}</div>
            <div>{el.capacity}</div>
          </div>
        )) : <div>No Transfers</div>}
      </div>
    </div>
  );
};

export default ClassesSections;