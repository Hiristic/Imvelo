import styled from "styled-components";
import IMG1 from "../../../assets/images/Allmantpabud_tcm3-13892.svg";
import IMG2 from "../../../assets/images/Ansiktsskydd_tcm3-13899.svg";
import IMG3 from "../../../assets/images/Skyddsklader_tcm3-13905.svg";
import ProductClassification from "./ProductClassification";
import { Text } from "../../../components/common/Typography";
import Restrictions from "./Restrictions";
import RiskMatrix from "./RiskMatrix";

const Container = styled.div`
  position: relative;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 24px;
`;

const Heading = styled.p`
  width: auto;
  font-size: 0.85em;
  color: #878790;
  font-weight: 600;
  margin-bottom: 9px;
`;

const SubRowComponent = ({ row }) => {
  return (
    <Container>
      <GridWrapper>
        <div>
          <Heading>Skyddsutrustning</Heading>
          <div style={{ display: "flex" }}>
            <img style={{}} alt={"img1"} src={IMG1} />
            <img style={{ marginLeft: "10px" }} alt={"img2"} src={IMG2} />
            <img style={{ marginLeft: "10px" }} alt={"img3"} src={IMG3} />
          </div>
        </div>
        <div>
          <Heading>Produkttyp</Heading>
          <Text fontWeight={500}>Rengöringsmedel</Text>
        </div>
        <div>
          <Heading>Synonymer</Heading>
          <Text fontWeight={500}> Inga synonymer</Text>
        </div>

        <div style={{ minWidth: 0 }}>
          <Heading>Produktens klassificering</Heading>
          <ProductClassification />
          <ProductClassification />
          <ProductClassification />
          <ProductClassification />
        </div>
        <div>
          <Heading>Restriktionslitor</Heading>
          <Restrictions />
          <Restrictions />
          <Restrictions />
        </div>
        <div>
          <Heading>Kommentar</Heading>
          <Text fontWeight={500}>Använd lila handskar</Text>
        </div>
      </GridWrapper>
      <div>
        <Heading>Riskklassning utifrån riskbedömning</Heading>
        <RiskMatrix color={"red"} number={3} />
        <RiskMatrix color={"green"} number={1} />
      </div>
    </Container>
  );
};

export default SubRowComponent;
