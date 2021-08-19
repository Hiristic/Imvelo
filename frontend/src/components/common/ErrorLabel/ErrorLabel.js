import styled from "styled-components";

export const ErrorLabel = styled.p`
  color: red;
  text-align: ${({ textAlign }) => textAlign || "right"};
  font-weight: bold;
  margin-bottom: ${({ mb }) => mb || "8px"};
  margin-top: ${({ mt }) => mt || "8px"};
  font-size: 0.7em;
`;
