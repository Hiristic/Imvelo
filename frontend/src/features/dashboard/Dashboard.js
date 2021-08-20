import styled, { useTheme } from "styled-components";
import Card from "../../components/Card/Card";
import { Text } from "../../components/common/Typography";
import ProductInfo from "../../components/Productinfo/ProductInfo";

const Container = styled.div`
  width: 100%;
  padding-top: 53px;
  padding-bottom: 72px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const Wrapper = styled.div`
  max-width: 1064px;
  margin: auto;
  grid-gap: 23px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 340px;
  grid-template-rows: 220px 220px 456px;
  grid-template-areas:
    "main main main main"
    "details details details details"
    "bar bar bar pie";
`;

const Main = styled(Card)`
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Details = styled(Card)`
  grid-area: details;
`;

const BarChart = styled(Card)`
  grid-area: bar;
`;

const PieChart = styled(Card)`
  grid-area: pie;
`;

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Container>
      <Wrapper>
        <Main>
          <Text fontWeight={500} color={theme.colors.contentGreen}>
            Översikt antalet produkter för vald avdelning
          </Text>
          <ProductWrapper>
            <ProductInfo
              number={120}
              text={"Produkter"}
              backgroundColor={"#F4FBF7"}
              color={"#2AAC64"}
            />
            <ProductInfo
              number={51}
              text={"Unik Produkt"}
              backgroundColor={"#F2F8FC"}
              color={"#117ACE"}
            />
          </ProductWrapper>
        </Main>
        <Details />
        <BarChart />
        <PieChart />
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
