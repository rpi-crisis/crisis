import React from 'react';
import './App.css';

let name: string;
name = "HAMMAD";
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let printName: (name: string) => void;
//let printName: Function;
// or
//function printName(name: string){
//  console.log(name);
//}

printName("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

type Person={
  name: string;
  age?: number;
};

let personA: Person = {
  name: "A",
};

let lotsOfPeople:Person[];

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
