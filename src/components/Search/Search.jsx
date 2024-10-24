import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Searchbar ,Search ,stylesnew} from "./Styles";

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
