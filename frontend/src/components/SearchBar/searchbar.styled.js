import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  margin-left: auto;
  background-color: #f5f6fa;
  border-radius: 4px;
  align-items: center;
  padding: 10px;
`;
export const DisplayList = styled.ul`
 
    position: absolute;
    top: 40px;
    border-radius: 4px;
    padding: 10px;
    background-color: white;
    width: 100%;
    margin-left: -10px;   
`;
export const MyInput = styled.input`
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