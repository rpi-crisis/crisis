import React, {useState} from "react";
import '../App.css';
import Search from "./search";

const ListPage = () => {

  const list:info_type[] = [
    {id: 1, text: "Example item"}
  ];

  let [betterList, setList] = useState<info_type[]>(list)
  const list_add = (data:info_type) => {
    setList([...betterList,data]);
  }
  return (
    <div>
      <Search key="Searchbar" data={betterList} update={list_add} />
      <ul>
        {betterList.map((item:info_type) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
export type info_type = {id:number, text:string};