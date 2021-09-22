import styled from "styled-components";

const Circle = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ color }) => color || "lightgrey"};
  border-radius: 100px;
  margin-right: 5px;
`;

const Container = styled.div`
  background: #ececf1;
  border-radius: 4px;
  padding: 4px 6px;
  font-weight: 500;
  font-size: 0.85em;
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 4px;
`;

const RiskMatrix = ({ color, number }) => {
  return (
    <Container>
      <Circle color={color} />
      {number}
    </Container>
  );
};

export default RiskMatrix;
