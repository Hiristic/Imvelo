import styled from "styled-components";
import React, { useState, useRef } from 'react';
import SearchIcon from "../../assets/images/search.svg";
import useDebouncedEffect from 'use-debounced-effect-hook';

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
 
    color: #c0c0d0;
    opacity: 1; 
    text-align: ${({ alignPlaceholder }) => alignPlaceholder || "left"};
  }

  &:-ms-input-placeholder {
    color: #c0c0d0;
    text-align: ${({ alignPlaceholder }) => alignPlaceholder || "left"};
  }
`;

const SearchBar = () => {
  const renderCountRef = useRef(0);
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const handleInputChange = ({ target: { value } }) => setInputValue(value);


  useDebouncedEffect(() => {
    setDebouncedValue(inputValue);
  }, [
    console.log(inputValue),
  ], 3000);

  renderCountRef.current += 1;

  return (
    <Search value={inputValue} onChange={handleInputChange}>
      <p>
        {debouncedValue || ''}
      </p>

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
