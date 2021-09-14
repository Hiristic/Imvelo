import { Text } from "../common/Typography";
import styled, { useTheme } from "styled-components";
import Button from "../common/Button";

const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
`;

const DeleteComponent = () => {
  const theme = useTheme();
  return (
    <>
      <Text>
        Är du säker på att du vill ta bort den här avdelningen kommer den också
        att ta bort alla underavdelningar !
      </Text>
      <ButtonWrapper>
        <Button backgroundColor={theme.colors.error}>Avbryt</Button>
        <Button>radera</Button>
      </ButtonWrapper>
    </>
  );
};

export default DeleteComponent;
