import { Logo } from "../common/Logo";
import { Container, NavLogo } from "./navbar.styled";
import NavItem from "./NavItem";
import styled from "styled-components";
import { Text } from "../common/Typography";
import { Link } from "react-router-dom";
import HelpButton from "../HelpButton/HelpButton";

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GuestBar = ({ navItems }) => {
  return (
    <Container>
      <NavLogo to="/">
        <Logo />
      </NavLogo>

      <Menu>
        {navItems?.map((res) => (
          <NavItem
            key={res.label}
            path={res.pathLocation}
            tabName={res.label}
            isExact={res.isExact}
          />
        ))}
      </Menu>
      <LoginWrapper>
        <HelpButton />
        <Link to={"/login"}>
          <Text color={"#fff"}>Log in</Text>
        </Link>
      </LoginWrapper>
    </Container>
  );
};

export default GuestBar;
