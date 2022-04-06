import React, { FC, useState } from "react";
import { Course, Transfer } from "../../../types";
import ClassesTransfers from "./classesTransfers";

const ClassesInfo: FC<{course: Course}> = ({course}) => {

  return (
    <div>
      <h3>
        {course.title}
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>{course.id}</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span>Credits: {course.credits}</span>
      </h3>
      <div id="class-body">
        <div className="body-title">Description</div>
        <div id="class-description">NA</div>
        <ClassesTransfers transfers={course.transfer}/>
      </div>
    </div>
  );

};	

export default ClassesInfo;