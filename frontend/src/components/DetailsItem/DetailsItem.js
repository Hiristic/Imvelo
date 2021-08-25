import { Text } from "../common/Typography";
import styled, { useTheme } from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 30% 1fr;
`;

const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const DetailsItem = ({ heading, text, total }) => {
  const theme = useTheme();

  return (
    <Container>
      <Text color={theme.colors.contentGreen} fontWeight={500}>
        {heading}
      </Text>
      <TotalWrapper>
        <Text fontWeight={500}>{text}</Text>
        <div>
          <Text
            fontSize={"0.8em"}
            marginBottom={"5px"}
            color={theme.colors.contentSecondary}
            fontWeight={500}
          >
            Total
          </Text>
          <Text fontSize={"2em"} fontWeight={700}>
            {total}
          </Text>
        </div>
      </TotalWrapper>
    </Container>
  );
};

export default DetailsItem;
