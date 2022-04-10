import React, { FC, useState } from "react";
import { Course, Transfer } from "../../../types";
import ClassesTransfers from "./classesTransfers";
import "../classes.css";
import "../../../components/class/class.css";

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
      <div id="class-body">
        <div className="body-title">Description</div>
        <div className="class-description">{course.description}</div>
        <ClassesTransfers transfers={course.transfer}/>
      </div>
    </div>
  );

};	

export default ClassesInfo;