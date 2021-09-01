import { Search } from "./searchbar.styled";
import React from "react";
import SearchIcon from "../../assets/images/search.svg";
import Autocomplete from "./Autocomplete.js";

const SearchBar = () => {
  return (
    <Search>
      <img
        src={SearchIcon}
        style={{
          width: "15px",
          height: "15px",
          color: "#2aac64",
        }}
      />
      <Autocomplete />
    </Search>
  );
};

export default SearchBar;
