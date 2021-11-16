import React, { useState, FC } from "react";
import InputComponent from "../components/input-component";
import { getJsonData } from "../scripts/data-fetch"
import { search } from "../scripts/fuzzy-search"
import '../theme.css';

interface InputState {
  results: any[];
  time: number;
}

let courses_json: any[] = [];
let tte: number = performance.now();
let searched: boolean = false;

getJsonData()
  .then(res => {
    courses_json = res;
    console.log(res);
  }
);

const TestInput : FC = () => {

  const [state, setState] = useState<InputState>({results: [], time: 0});
  const [input, setInput] = useState<string>("");
  const [ignore, update] = useState<number>(0);

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

  function onInput(){
    if(input.length < 10) {
      tte = performance.now() + 200;
    } else {
      tte = performance.now() + 400;
    }
    searched = false;
  }

  /* TODO figure out how to make this just happen. Maybe have a custom async sleeping promise stored for this component
     that is cancelable when a new keypress happens.
  */
  if(!searched && tte <= performance.now()){
    searched = true;
    searchQuery(input);
  }

  return (
    <div>
      <InputComponent id="search" placeholder="Enter text to search" setOutside={setInput} runOnInput={onInput}/>
      <p>{ (!searched) ? "loading..." : "" }</p>
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
