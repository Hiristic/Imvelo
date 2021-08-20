import styled, { useTheme } from "styled-components";
import SvgImage from "../SvgImage/SvgImage";
import FireIcon from "../../assets/images/FireIcon.svg";
import { Text } from "../common/Typography";

const Container = styled.div``;

const IconWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ background }) => background};
  width: fit-content;
  border-radius: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ProductInfo = ({ backgroundColor, color, number, text }) => {
  const theme = useTheme();
  return (
    <Container>
      <Wrapper>
        <IconWrapper background={backgroundColor}>
          <SvgImage source={FireIcon} size={"20px"} color={color} />
        </IconWrapper>
        <Text
          marginLeft={"10px"}
          fontSize={"1em"}
          fontWeight={400}
          color={theme.colors.contentSecondary}
        >
          {text}
        </Text>
      </Wrapper>
      <Text fontWeight={"bold"} fontSize={"2.5em"}>
        {number}
      </Text>
    </Container>
  );
};

export default ProductInfo;
