import React, { FC } from "react";
import ClassesTransfers from "./classesTransfers";
import ClassesSections from "./classesSections";
import { Transfer } from "../../../types";
import "../classes.css";
import "../../../components/class/class.css";

const ClassesInfo: FC<{course: any}> = ({course}) => {

  return (
    <div>
      <h3 className="course-titles">
        <span className="course-title-items">{course.title}</span>
        <span className="course-title-items">{course.id}</span>
        <span className="course-title-items">Credits: {course.credits}</span>
      </h3>
      <div className="whole-body">
        <span className="left-body">
          <div className="body-title description-title  ">Description</div>
          <div className="class-description">{course.description}</div>
          <ClassesTransfers transfers={course.transfer}/>
        </span>
        <span className="right-body">
          <ClassesSections sections={course.sections}/>
          <div className="body-title">
            Related Classes
          </div>
          <div className="right-sidebox">
            <u className="req-title">
              Prerequisites courses:
            </u>
            {/* Issue: white screens when doing course.prereq.length
                    or any other course.something 
                also it seems like a lot of information is still 
                  not here yet*/}
            <div> 
              {course.prereq}
            </div>
            <u className="req-title">
              Corequisite courses:
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
          <div className="body-title">
            <br/>
            Other details
          </div>
          <div className="right-sidebox">
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