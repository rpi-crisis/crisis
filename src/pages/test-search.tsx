import React, { useState, useEffect, FC } from "react";
import TextInput from "../components/text-input";
import { getJsonData } from "../scripts/data-fetch"
import { search } from "../scripts/fuzzy-search"
import '../theme.css';

interface InputState {
  results: any[];
  time: number;
}

let courses_json: any[] = [];
let searched: boolean = false; // TODO make it say loading before the first search is completed

getJsonData()
  .then(res => {
    courses_json = res;
    console.log(res);
  }
);

const TestSearch : FC = () => {

  const [state, setState] = useState<InputState>({results: [], time: 0});
  const [input, setInput] = useState<string>("");

  const [search_text, search_update] = useState<string>("");

  function searchQuery(query: string): void {
    if(query==="") {
      setState({results: [], time: 0});
      return;
    }
    let before = performance.now();
    let results = search(query, courses_json, ["id", "title", "description"])
    let after = performance.now();
    setState({ results, time: Math.round(after-before) });
  }

  const log_change = (value:string):void => {
    console.log(value);
    searchQuery(value);
    search_update(value);
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => log_change(input), 200);
    return () => clearTimeout(timeOutId);
  }, [input]);

  return (
    <div>
      <TextInput id="search" placeholder="Enter text to search" setOutside={setInput} runOnInput={setInput}/>
      <p>{ /*(!searched) ? "loading..." : ""*/ }</p>
      {state.results.length === 0 ? <div>Empty</div> :
        <div>
          {state.results.map(course =><div key={course.id}><code>{course.id}</code> {course.title}</div>)}
          <strong>took {state.time} ms</strong>
        </div>
      }
    </div>
  );
}

export default TestSearch;
