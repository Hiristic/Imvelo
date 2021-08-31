import styled from "styled-components";

const AlignCell = styled.div`
  text-align: ${({ align }) => align || "left"};
  padding: ${({ padding }) => padding};
`;

export default AlignCell;
