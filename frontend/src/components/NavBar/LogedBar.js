import { Logo } from "../common/Logo";
import { Container, NavLogo } from "./navbar.styled";

const LogedBar = () => {
  return (
    <Container>
      <NavLogo to="/">
        <Logo />
      </NavLogo>
    </Container>
  );
};

export default LogedBar;
