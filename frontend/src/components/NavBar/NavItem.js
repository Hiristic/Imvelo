import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { Text } from "../common/Typography";

const MenuText = styled(Text)`
  font-size: 0.9em;
  font-weight: 500;
  color: inherit;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  margin-right: 20px;
  height: 100%;
  padding-right: 12px;
  padding-left: 12px;
  position: relative;
  &.active {
    color: ${({ theme }) => theme.colors.contentGreen};
    .underline {
      display: block;
    }
  }
`;

const Underline = styled.div`
  display: none;
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  bottom: -25px;
  right: 0;
  left: 0;
  border-radius: 10px;
`;

const NavItem = ({ tabName, path, isExact }) => {
  return (
    <StyledLink to={path} exact={isExact}>
      <MenuText>{tabName}</MenuText>
      <Underline className={"underline"} />
    </StyledLink>
  );
};

export default NavItem;
