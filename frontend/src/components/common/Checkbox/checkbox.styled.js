import styled from "styled-components";

export const Checkmark = styled.span`
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ size }) => size + "px" || "25px"};
  width: ${({ size }) => size + "px" || "25px"};
  border: solid 1.5px lightgray;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: "";
    position: relative;
    display: none;
  }
`;

export const Container = styled.label`
  position: relative;
  padding-left: ${({ placeholder }) => placeholder && "35px"};
  cursor: pointer;
  font-size: 0.9em;
  font-weight: 500;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${Checkmark} {
    &:after {
      width: ${({ size }) => (size ? size / 4 + "px" : "6px")};
      height: ${({ size }) => (size ? size / 2 + "px" : "12px")};
      border: solid #fff;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export const Input = styled.input`
  // position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
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
