import styled from "styled-components";

export const Label = styled.p`
  text-align: left;
  font-weight: 600;
  font-size: 0.8em;
  color: ${(props) => props.color || props.theme.colors.contentPrimary};
  padding-left: 5px;
  padding-right: 5px;
  position: absolute;
  top: -8px;
  left: 12px;
  background-color: #fbfbfb;
  border-radius: 10px;
`;
