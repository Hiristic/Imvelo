import styled from "styled-components";

export const CustomInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #d9d9e3;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  margin-left: ${(props) => props.marginLeft || "0px"};
  text-decoration: none;
  outline: none;
  &::placeholder,
  ::-webkit-input-placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a8a7ba;
    opacity: 1; /* Firefox */
    text-align: ${({ alignPlaceholder }) => alignPlaceholder || "left"};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  &:-ms-input-placeholder {
    color: lightgray;
    text-align: ${({ alignPlaceholder }) => alignPlaceholder || "left"};
  }
  background-color: ${({ backgroundColor }) => backgroundColor || "#FBFBFB"};
  ${({ isFocused }) =>
    isFocused &&
    `
   border: 1px solid #117ACE;
  `}
`;
