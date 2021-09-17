import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
  margin-left: auto;
  background-color: #f5f6fa;
  border-radius: 4px;
  align-items: center;
  padding: 10px;
  position: relative;
`;

export const DisplayList = styled.div`
  position: absolute;
  top: 55px;
  left: 0;
  border-radius: 4px;
  padding: 16px;
  background-color: white;
  width: 100%;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
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

export const Text = styled.p`
  color: #a8a7ba;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding-bottom: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;
export const SearchMoreButton = styled.p`
  border-top: 1px solid #ececf1;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: #2aac64;
  padding: 15px 0px 10px 0px;
`;
