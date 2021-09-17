import styled from "styled-components";
import RestrictionIcon from "../../../assets/images/restriction.svg";
import { Text } from "../../../components/common/Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  min-height: 24px;
  height: auto;
`;

const RestrictionContainer = styled.div`
  padding: 6px;
  background: #fde8e8;
  border-radius: 4px 0px 0px 4px;
  text-align: center;
  height: 100%;
`;

const TextContainer = styled.div`
  background: #ffffff;
  border-radius: 0px 4px 4px 0px;
  padding: 6px 6px;
  height: 100%;
`;

const Restrictions = () => {
  return (
    <Container>
      <RestrictionContainer>
        <img src={RestrictionIcon} alt={"restriction"} />
      </RestrictionContainer>
      <TextContainer>
        <Text fontSize={"0.85em"}>PRIO Riskminskning</Text>
      </TextContainer>
    </Container>
  );
};

export default Restrictions;
