import { Logo } from "../common/Logo";
import { GuestContainer, NavLogo } from "./navbar.styled";
import HelpButton from "../HelpButton/HelpButton";
import Searchbar from "../SearchBar/SearchBar";

const GuestBar = () => {
  return (
    <GuestContainer>
      <NavLogo to="/">
        <Logo />
      </NavLogo>
      <Searchbar />
      <HelpButton />
    </GuestContainer>
  );
};

export default GuestBar;
