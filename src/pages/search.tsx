import React, {FC, FormEvent, useState} from "react";
import '../App.css';
import {info_type} from './list-search'

const Search: FC<{data:info_type[],update:(data:info_type) => void}> = ({data,update}) => {
  let [add_field, add_update] = useState<string>("");

  const handleAdd: React.FormEventHandler<HTMLInputElement> = (event: FormEvent<HTMLInputElement>) => {
    add_update(event.currentTarget.value as string);
  }

  const handleItemUpdate = (data:info_type) => {
    if(data.text.trim() !== "") {
      update(data)
    }
  }

  return (
    <div>
      <input
        type="text"
        id="header-add"
        placeholder="Add items to list"
        onChange={handleAdd}
      />
      <button type="submit" onClick={() => {handleItemUpdate({id:data.length+1,text:add_field})}}>Add</button>
      <form action="/search" method="get">
        <input
          type="text"
          id="header-search"
          placeholder="Search items in list"
          name="s"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;