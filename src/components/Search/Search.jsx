import React from "react";
import { Search, Searchbar, stylesnew } from "../../Pages/Style";
import { IoIosSearch } from "react-icons/io";

function Searchstar() {
  return (
    <Search>
      <IoIosSearch style={stylesnew.searchicon} />
      <Searchbar>
        <input className="search" placeholder="Search by name" />
      </Searchbar>
    </Search>
  );
}

export default Searchstar;
