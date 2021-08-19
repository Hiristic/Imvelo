import styled from "styled-components";

export const Link = styled.a`
  color: ${({ theme, color }) => color || theme.colors.contentPrimary};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  font-size: ${(props) => props.fontSize || "0.9em"};
  font-family: ${({ fontFamily }) => fontFamily || "inherit"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  margin-left: ${(props) => props.marginLeft || "0px"};
`;
