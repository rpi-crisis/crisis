import React, { FC, useState } from "react";
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
      <div className="right-sidebox">
        {/*sections.length > 0 ? sections.map((el: Section, pos: number) => (
          <div className="class-header" key={pos}>
            <div>{el.section}</div>
            <div>{el.crn}</div>
            <div>{el.remaining} / {el.capacity}</div>
          </div>
        )) : <div>No Sections</div>*/}
        {sections}
      </div>
    </div>
  );
};

export default ClassesSections;