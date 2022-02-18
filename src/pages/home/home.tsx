import React, { FC, useState, useEffect } from "react";
//import logo from '../../res/images/kool-aid_cat.png';
import "./home.css";

import { getJsonData } from "../../scripts/data-fetch";
import { search } from "../../scripts/fuzzy-search";

import NavBar from "../../components/navbar/navbar";
import SearchBar from "../../components/search/search";
import Pages from "../pageList";
import Class from "../../components/class/class";
import { useAppDispatch, useAppSelector } from "../../store";
import { EMPTY_COURSES, FETCH_COURSES, ADD_COURSE } from "../../store/slices/courseSlice";

interface InputState {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  results: any[];
  time: number;
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
let courses_json: any[] = [];
//let searched: boolean = false //TODO make it say loading before search completed

getJsonData()
  .then(res => {
    courses_json = res;
  }
  );

const HomePage: FC = () => {

  const courseState = useAppSelector(state => state.courses.courses);
  const hasError = useAppSelector(state => state.courses.hasError);
  const dispatch = useAppDispatch();
  
  console.log(courseState);
  
  const addCourses = () => {
    dispatch(ADD_COURSE({name: "data structures"}));
  };

  const clearCourses = () => {
    dispatch(EMPTY_COURSES());
  };

  const fetchCourses = () => {
    dispatch(FETCH_COURSES());
  };

  const [state, setState] = useState<InputState>({results:[], time:0});

  const [searchbar_content, content_update] = useState<string>("");

  const searchQuery = (query: string): void => {
    if(query === "") {
      setState({results: [], time: 0});
      return;
    }
    const before = performance.now();
    const results = search(query, courses_json, ["id", "title", "description"]).slice(0,5);
    const after = performance.now();
    console.log(results);
    setState({results: results, time: Math.round(after - before)});
  };

  const call_search = React.useCallback((value: string): void => {
    searchQuery(value);
  }, []);

  useEffect(() => {  
    const timeOutId = setTimeout(() => call_search(searchbar_content),200);
    return () => clearTimeout(timeOutId);
  },[searchbar_content,call_search]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar pages={Pages("Home")}/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>CRISIS - Correcting Rensselaer{"'"}s Insufferable SIS</h3>
        <SearchBar content_update={content_update}/>
        {hasError && (
          <h2>THERES AN ERROR!!!!</h2>
        )}
        <button onClick={addCourses}>add course</button>
        <button onClick={clearCourses}>clear courses</button>
        <button onClick={fetchCourses}>fetch courses</button>
        {Object.entries(courseState).map(entry => (
          <p key={entry[1].name}>{entry[1].name}</p>
        ))}
        {state.results.map((el,pos) => {return <Class key={pos} data={el}/>;})}
      </header>
    </div>
  );
};

export default HomePage;
