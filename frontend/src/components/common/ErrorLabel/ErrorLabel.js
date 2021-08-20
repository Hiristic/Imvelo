import styled from "styled-components";

export const ErrorLabel = styled.p`
  color: #f05453;
  text-align: ${({ textAlign }) => textAlign || "left"};
  font-weight: 500;
  margin-bottom: ${({ mb }) => mb || "8px"};
  margin-top: ${({ mt }) => mt || "8px"};
  font-size: 0.9em;
`;
