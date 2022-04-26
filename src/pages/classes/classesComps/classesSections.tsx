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
        {/* Issue: white screens when adding this, or even doing sections.length */}
        {/* Plan: idea was to have the sections listed on the right and clickable to 
          display more info per section */}

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