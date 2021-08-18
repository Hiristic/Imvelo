import styled from "styled-components";

const sizes = ["2.369rem", "1.777rem", "1.333rem", "1rem", "0.750rem", "10px"];

export const Heading = styled.div.attrs(({ level }) => ({
  role: "heading",
  "aria-level": level || 1,
}))`
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : "0px"};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
  color: ${({ theme, color }) => color || theme.colors.contentPrimary};
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-weight: bold;
  font-size: ${({ level }) => sizes[level - 1]};
  font-family: ${(props) => props.fontFamily || "inherit"};
`;
