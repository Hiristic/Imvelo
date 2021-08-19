import styled from "styled-components";

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: solid 1.5px lightgray;
  border-radius: 5px;
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 500;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  ${Checkmark} {
    &:after {
      left: 6px;
      top: 3px;
      width: 6px;
      height: 12px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export const Input = styled.input`
  &:focus + ${Container}::before {
    outline: none;
    box-shadow: 0px;
  }
  &:checked + ${Checkmark} {
    &:after {
      display: block;
    }
    background-color: ${({ theme }) => theme.colors.secondary};
    border: solid ${({ theme }) => theme.colors.secondary};
  }
`;
