import styled, { useTheme } from "styled-components";
import { Heading, Text } from "../../components/common/Typography";
import LoginForm from "../../forms/LoginForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const Wrapper = styled.div`
  text-align: center;
  width: 23%;
  margin-bottom: 100px;
`;

const Login = () => {
  const theme = useTheme();
  return (
    <Container>
      <Wrapper>
        <Heading marginBottom={"20px"} textAlign={"center"} level={2}>
          Logga In
        </Heading>
        <Text
          textAlign={"center"}
          fontSize={"0.9em"}
          fontWeight={400}
          color={theme.colors.contentSecondary}
          marginBottom={"70px"}
        >
          Logga in med användarnamn och lösenord.
        </Text>
        <LoginForm onSubmit={(data) => console.log(data)} />
      </Wrapper>
    </Container>
  );
};

export default Login;
