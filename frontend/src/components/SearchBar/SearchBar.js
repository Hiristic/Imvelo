import styled from "styled-components";
import React from "react";
import SearchIcon from "../../assets/images/search.svg";

const Search = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  margin-left: auto;
  background-color: #f5f6fa;
  border-radius: 4px;
  align-items: center;
  padding: 10px;
`;

const MyInput = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 10px;
  background: transparent;
  border: none;
  font-size: 1em;
  &:focus {
    outline: none;
  }

  &::placeholder,
  ::-webkit-input-placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #c0c0d0;
    opacity: 1; /* Firefox */
    text-align: ${({ alignPlaceholder }) => alignPlaceholder || "left"};
  }

  &:-ms-input-placeholder {
    color: #c0c0d0;
    text-align: ${({ alignPlaceholder }) => alignPlaceholder || "left"};
  }
`;

const SearchBar = () => {
  return (
    <Search>
      <img
        src={SearchIcon}
        style={{
          width: "12px",
          height: "12px",
          color: "#2aac64",
        }}
      />
      <MyInput type="text" placeholder="Sök" />
    </Search>
  );
};

export default SearchBar;
