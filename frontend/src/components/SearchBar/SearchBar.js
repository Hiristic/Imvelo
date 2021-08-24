import styled from "styled-components";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = styled.div`
    display:flex;
    width: 250px;
    height: 35px;
    margin-left: auto;
    background-color: white;
    border-radius: 4px;
`;

const MyInput = styled.input`
 background: url(faSearch);
padding-left:10px;
border: none;
&:focus {
    outline: none;
    
  }
`;

const SearchBar = () => {
    return (
        <Search>
            <FontAwesomeIcon icon={faSearch}
                style={{
                    marginTop: '10px',
                    marginLeft: '10px',
                    color: '#2aac64',

                }} />
            <MyInput type="text" placeholder="Sök" />
        </Search>
    );
};

export default SearchBar;