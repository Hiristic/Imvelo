import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const LogedContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 72px;
  width: 100%;
  padding: 16px 25px;
  display: grid;
  grid-template-columns: auto 1fr 6%;
  align-items: center;
`;

export const GuestContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 72px;
  width: 100%;
  padding: 16px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  margin-right: 40px;
`;
