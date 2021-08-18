import GuestBar from "./GuestBar";
import { guestNavItems } from "../../config/headerNavItems";

//this component is used to switch between navigation bars logged and guest
const NavBar = () => {
  return <GuestBar navItems={guestNavItems} />;
};

export default NavBar;
