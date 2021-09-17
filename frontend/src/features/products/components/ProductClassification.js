import styled from "styled-components";
import { Text } from "../../../components/common/Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ClassificationCode = styled.div`
  background-color: #ececf1;
  padding: 4px 6px;
  font-weight: 500;
  font-size: 0.85em;
  border-radius: 4px;
  align-items: center;
  width: fit-content;
  margin-right: 8px;
`;

const ProductClassification = () => {
  return (
    <Container>
      <ClassificationCode>H225</ClassificationCode>
      <Text fontWeight={400}>
        Misstänks kunna skada fertiliteten eller det oföddafdfdfdsfdsfdsf
      </Text>
    </Container>
  );
};

export default ProductClassification;
