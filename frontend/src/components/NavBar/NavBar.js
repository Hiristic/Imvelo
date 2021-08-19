import GuestBar from "./GuestBar";
import { NavItems } from "../../config/headerNavItems";
import { useCookies } from "react-cookie";
import LogedBar from "./LogedBar";

//this component is used to switch between navigation bars logged and guest
const NavBar = () => {
  const [cookies] = useCookies(["jwt", "user"]);
  const allow = cookies?.user && cookies?.jwt;

  return allow ? <LogedBar navItems={NavItems} /> : <GuestBar />;
};

export default NavBar;
