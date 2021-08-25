import styled, { useTheme } from "styled-components";
import Card from "../../components/Card/Card";
import { Text } from "../../components/common/Typography";
import ProductInfo from "../../components/Productinfo/ProductInfo";
import { DoughnutChart } from "../../components/Charts";
import { BarChart } from "../../components/Charts";
import DetailsItem from "../../components/DetailsItem/DetailsItem";

const data = {
  labels: ["Level1", "Level2", "Level3", "Level4", "Level5"],
  datasets: [
    {
      data: [123, 42, 62, 81, 23],
      backgroundColor: ["#228A50", "#C0E7D2", "#117ACE", "#05253E", "#ECECF1"],
    },
  ],
};

const data1 = {
  labels: [
    ["PRIO", " Riskminksning"],
    ["PRIO", " Utfasning"],
    "SIN-lista",
    ["REACH", "SVHC"],
    ["REACH", "Kandidatlista"],
    ["REACH", "Bilaga XIV"],
    ["REACH", "Bilaga XVII"],
  ],
  datasets: [
    {
      label: "Produkter",
      data: [12, 19, 3, 5, 2, 3, 10],
      backgroundColor: "#2AAC64",
    },
  ],
};

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
  display: grid;
  grid-template-columns: 10% 25% repeat(3, 10%);
  padding: 25px 33px;
  grid-gap: 0 80px;
`;

const BarChartWrapper = styled(Card)`
  grid-area: bar;
`;

const DonutChartWrapper = styled(Card)`
  grid-area: pie;
  padding: 36px 30px;
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
        <Details>
          <DetailsItem
            heading={"Granskning"}
            text={"Ej granskade produkter"}
            total={27}
          />
          <DetailsItem
            text={"Granskningar som behöver uppdateras"}
            total={18}
          />
          <DetailsItem
            heading={"Riskbedömning"}
            text={"Ej riskbedömda produkter"}
            total={22}
          />
          <DetailsItem
            text={"Riskbedömningar som utgår inom 2 månader"}
            total={23}
          />
          <DetailsItem text={"Riskbedömningar som har utgått"} total={16} />
        </Details>
        <BarChartWrapper>
          <Text
            fontSize={"1em"}
            marginBottom={"50px"}
            textAlign={"center"}
            fontWeight={400}
          >
            Totala antalet unika produkter på respektive restriktionslista
          </Text>
          <BarChart data={data1} />
        </BarChartWrapper>
        <DonutChartWrapper>
          <Text
            fontSize={"0.9em"}
            marginBottom={"30px"}
            textAlign={"center"}
            fontWeight={500}
          >
            Totala antalet unika produkter i respektive risknivå
          </Text>
          <DoughnutChart data={data} riskNumber={120} />
        </DonutChartWrapper>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
