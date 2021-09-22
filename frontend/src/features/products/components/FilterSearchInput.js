import styled from "styled-components";
import SearchIcon from "../../../assets/images/search.svg";
import React, { forwardRef } from "react";

export const CustomInput = styled.input`
  width: 100%;
  padding-left: 15px;
  border: none;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  outline: none;
  &::placeholder,
  ::-webkit-input-placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a8a7ba;
    opacity: 1; /* Firefox */
    text-align: ${({ alignPlaceholder }) => alignPlaceholder || "left"};
  }
  background: transparent;
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  &:-ms-input-placeholder {
    color: lightgray;
    text-align: ${({ alignPlaceholder }) => alignPlaceholder || "left"};
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: #f9f9fa;
  height: auto;
  display: flex;
  align-items: center;
  padding: 12px 28px;
`;

const FilterSearchInput = forwardRef((props, ref) => {
  return (
    <Container>
      <img
        alt={"search"}
        src={SearchIcon}
        style={{
          width: "16px",
          height: "16px",
        }}
      />
      <CustomInput {...props} ref={ref} />
    </Container>
  );
});

export default FilterSearchInput;
