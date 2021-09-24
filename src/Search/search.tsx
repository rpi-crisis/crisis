import {ReactElement} from "react";

let {search}:Location = window.location;
let queryNullable:string|null = new URLSearchParams(search).get('s');
let query:string = (queryNullable == null) ? "" : queryNullable;

function Search() {

    let searchBar:ReactElement =
        <div id="search-bar">
            <form action="/" method="get">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search website"
                    name="s"
                />
                <button type="submit">Search</button>
            </form>
        </div>

    return searchBar;
}

export default Search