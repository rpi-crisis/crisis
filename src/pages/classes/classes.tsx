import React, { FC /*,  useState, useEffect */ } from "react";
import "./classes.css";

// import { CourseSearcher } from "../../scripts/fuzzy-search";

import NavBar from "../../components/navbar/navbar";
// import SearchBar from "../../components/search/search";
import Pages from "../pageList";
// import Class from "../../components/class/class";
// import {Course} from "../../types";

// interface InputState {
//   results: Course[];
// }
//
// const searcher = new CourseSearcher();

const ClassesPage: FC = () => {

  // const [state, setState] = useState<InputState>({results:[]});
  //
  // const [searchbar_content, content_update] = useState<string>("");
  //
  // const searchQuery = (query: string): void => {
  //   if(query === "") {
  //     setState({results: []});
  //     return;
  //   }
  //   const results = searcher.search(query).slice(0,7);
  //   console.log(results);
  //   setState({results: results});
  // };
  //
  // const call_search = React.useCallback((value: string): void => {
  //   searchQuery(value);
  // }, []);
  //
  // useEffect(() => {
  //   const timeOutId = setTimeout(() => call_search(searchbar_content),200);
  //   return () => clearTimeout(timeOutId);
  // },[searchbar_content,call_search]);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar pages={Pages("Classes")}/>
        <h3>Enter the department you want</h3>
        {/*<SearchBar content_update={content_update}/>*/}
        {/*{state.results.map((el,pos) => {return <Class key={pos} data={el}/>;})}*/}
      </header>
    </div>
  );
};

export default ClassesPage;