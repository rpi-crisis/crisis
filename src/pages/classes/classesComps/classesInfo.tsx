import React, { FC, useState } from "react";
import { Course, Transfer, Section, Meeting } from "../../../types";
import ClassesTransfers from "./classesTransfers";
import ClassesSections from "./classesSections";
import "../classes.css";
import "../../../components/class/class.css";
import courses from "../../../store/slices/courses";

const ClassesInfo: FC<{course: any}> = ({course}) => {

  return (
    <div>
      <h3>
        {course.title}
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>{course.id}</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>Credits: {course.credits}</span>
      </h3>
      <div className="whole-body">
        <span className="left-body">
          <div className="body-title description-title  ">Description</div>
          <div className="class-description">{course.description}</div>
          {/* <ClassesSections sections={course.sections}/> */}
          <ClassesTransfers transfers={course.transfer}/>
        </span>
        <span className="right-body">
          <div className="body-title">
            Related Classes
          </div>
          <div className="requirements">
            <u className="req-title">
              Class prerequisites:
            </u>
            <div>
              {course.prereq}
            </div>
            <u className="req-title">
              Class corequisite:
            </u>
            <div >
              {course.coreq}
            </div>
            <u className="req-title">
              Cross-listed courses:
            </u>
            <div >
              {course.cross}
            </div>
          </div>
          <div className="requirements">
            <div>
              Communication Intensive:
              <i>
                &nbsp;{course.ci}
              </i>
            </div>
            <div>
              When Offered:
              <i>
                {course.offered}
              </i>
            </div>
          </div>
        </span>
      </div>
    </div>
  );

};	

export default ClassesInfo;