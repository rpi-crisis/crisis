import React, { useState, FC } from "react";
import InputComponent from "../components/input-component";
import { getJsonData } from "../scripts/data-fetch"
import { search } from "../scripts/fuzzy-search"
import '../theme.css';

interface InputState {
  results: any[];
  time: number;
}

const TestInput : FC = () => {
  let courses_json: any[] = [];
  if(courses_json !== []) {
    getJsonData().then(res => {
        courses_json = res
      }
    );
  }

  const [state, setState] = useState<InputState>({results: [], time: 0});

  function onChange(query: string): void {
    if(query==="") {
      setState({results: [], time: 0});
      return;
    }
    console.log(courses_json)
    let before = performance.now();
    let results = search(query, courses_json, ["id", "title", "description"])
    let after = performance.now();
    setState({ results, time: Math.round(after-before) });
  }

  return (
    <div>
      <InputComponent id="search" placeholder="Enter text to search" setOutside={() => {}} runOnInput={onChange}/>
      {state.results.length === 0 ? <div>Empty</div> :
        <div>
          {state.results.map(course =><div key={course.id}><code>{course.id}</code> {course.title}</div>)}
          <strong>took {state.time} ms</strong>
        </div>

      }
    </div>
  );
}

export default TestInput;
