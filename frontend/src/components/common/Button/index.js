import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
  position: relative;
  outline: none;
  display: flex;
  justify-content: ${({ jc }) => jc || "center"};
  align-items: center;

  //border: none;
  font-size: 1em;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "48px")};
  padding: ${(props) => (props.padding ? props.padding : "16px")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "8px"};
  background-color: ${(props) =>
    props.disabled
      ? "lightgrey"
      : props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.secondary};

  border-width: ${(props) => (props.borderWidth ? props.borderWidth : 0)};
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : "transparent"};

  transition: 0.3s;
  opacity: 1;
  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  `}

  ${({ secondary, theme }) =>
    secondary &&
    `
    border: 2px solid;
    background-color: transparent;
    border-color: ${theme.colors.secondary};
    color: ${theme.colors.secondary};
  `}
`;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  secondary: PropTypes.bool,
};

export default Button;
