import { Logo } from "../common/Logo";
import { Container, NavLogo } from "./navbar.styled";
import NavItem from "./NavItem";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
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
            path={res.pathLocation}
            tabName={res.label}
            isExact={res.isExact}
          />
        ))}
      </Menu>
    </Container>
  );
};

export default GuestBar;
