import React, { FC } from "react";
import "./classes.css";

import NavBar from "../../components/navbar/navbar";
import Pages from "../pageList";
import Class from "../../components/class/class";
import { CourseSearcher } from "../../scripts/fuzzy-search";
import { useAppSelector } from "../../store";

const searcher = new CourseSearcher();

const ClassesPage: FC = () => {

  const pathname = window.location.pathname;
  const classCode = pathname.substring(7);
  const classDept = classCode.substring(0,4).toUpperCase();
  const classNum = classCode.substring(4);

  const { courses } = useAppSelector(state => state.courses);

  searcher.update(Object.values(courses));
  const results = searcher.search(classCode);

  //let validID: true;
  //if(classCode.length != 8){
  //  validID: false;
  //}

  if(classCode.length != 8){
    return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={Pages("Classes")}/>
          <h3>ERROR 404: PAGE NOT FOUND</h3>
          invalid class code
        </header>
      </div>
    );
  }
  else if(results[0].id == classDept + "-" + classNum){
    return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={Pages("Classes")}/>
          <h3>
            {results[0].title}
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span>{classDept} {classNum}</span>
            <span>&nbsp;&nbsp;&nbsp;</span>
            <span>Credits: {results[0].credits}</span>
          </h3>
          <div id="class-body">
            <div className="body-title">Description</div>
            <div id="class-description">
              {results[0].title}
            </div>
            <div className="body-title">Transfers</div>
            <div id="transfers">
              {results[0].transfer.length > 0 ? results[0].transfer.map((el: any, pos: number) => (
                <div id="class-header" key={pos}>
                  <div>{el.title}</div>
                  <div>{el.id}</div>
                  <div>{el.school}</div>
                  <div>{el.location}</div>
                </div>
              )) : <div>No Transfers</div>}
            </div>
          </div>
        </header>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <header className="App-header">
          <NavBar pages={Pages("Classes")}/>
          <h3>No class found</h3>
          Did you mean any of these:
          {results.splice(0,5).map((el,pos) => {return <Class key={pos} data={el}/>;})}
        </header>
      </div>
    );
  }
};
export default ClassesPage;