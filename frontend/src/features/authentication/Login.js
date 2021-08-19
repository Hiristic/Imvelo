import styled, { useTheme } from "styled-components";
import { Heading, Text } from "../../components/common/Typography";
import LoginForm from "../../forms/LoginForm";
import { useHistory, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

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
  width: 19%;
  margin-bottom: 100px;
`;

const Login = () => {
  const theme = useTheme();
  const [cookies, setCookie] = useCookies();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const onLogin = async (data) => {
    const access = "testingg";
    const refresh = "restingg";
    const user = "usertest";

    setCookie("jwt", access, { path: "/" });
    setCookie("refresh", refresh, { path: "/" });
    setCookie("user", user, { path: "/" });
    history.replace(from);
  };

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
        <LoginForm onSubmit={onLogin} />
      </Wrapper>
    </Container>
  );
};

export default Login;
