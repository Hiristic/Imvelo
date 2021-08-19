import { Logo } from "../common/Logo";
import { LogedContainer, NavLogo } from "./navbar.styled";
import NavItem from "./NavItem";
import HelpButton from "../HelpButton/HelpButton";
import styled from "styled-components";
import AccountSelect from "../AccountSelect/AccountSelect";

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogedBar = ({ navItems }) => {
  return (
    <LogedContainer>
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
        <AccountSelect />
      </LoginWrapper>
    </LogedContainer>
  );
};

export default LogedBar;
