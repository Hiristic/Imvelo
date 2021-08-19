import styled from "styled-components";

export const Text = styled.p`
  width: ${({ width }) => width || "100%"};
  color: ${({ theme, color }) => color || theme.colors.contentPrimary};
  text-align: ${({ textAlign }) => textAlign || "center"};
  font-weight: ${({ fontWeight }) => fontWeight || "inherit"};
  font-size: ${(props) => props.fontSize || "0.9em"};
  font-family: ${(props) => props.fontFamily || "inherit"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
  margin-right: ${(props) => props.marginRight || "0px"};
`;
