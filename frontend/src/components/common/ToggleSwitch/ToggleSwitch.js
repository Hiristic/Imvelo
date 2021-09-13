import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 20px;
  border-radius: 15px;
  background: #c0c0d0;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 2px;
    background: #ffffff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 36px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      margin-left: 18px;
      transition: 0.2s;
    }
  }
`;

const ToggleSwitch = () => {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default ToggleSwitch;
