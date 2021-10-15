import React, {useState} from "react";
import '../App.css';
import InputComponent from "./input-component";

const TestInput = () => {
  let [t1, f1] = useState<string>("");
  let [t2, f2] = useState<string>("");
  let [t3, f3] = useState<string>("");

  return(

    <div>
      <InputComponent id="test1" placeholder="I am test1" setOutside={f1}/>
      <InputComponent id="test2" placeholder="I am test2" setOutside={f2}/>
      <InputComponent setOutside={f3}/>
    </div>
  );
}

export default TestInput;