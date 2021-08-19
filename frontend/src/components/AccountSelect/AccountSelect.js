import styled, { keyframes, useTheme } from "styled-components";
import { Text } from "../common/Typography";
import { AiOutlineLogout } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const accountItems = [
  {
    icon: <VscAccount color={"#2AAC64"} size={"25px"} />,
    name: "Min profil",
    path: "/account",
  },
  {
    icon: <GiSettingsKnobs color={"#2AAC64"} size={"25px"} />,
    name: "Inställningar",
    path: "/settings",
  },
];

const AccountSelect = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [{ user }, setCookie, removeCookie] = useCookies();
  const history = useHistory();

  const onLogout = () => {
    removeCookie("jwt");
    removeCookie("user");
    removeCookie("refresh");
  };

  const onItem = (path) => {
    history.push(path);
    setIsOpen(false);
  };

  const collapse = () => {
    setIsOpen(false);
  };

  return (
    <Container tabIndex="0" onBlur={collapse}>
      <ContentWrapper onClick={() => setIsOpen(!isOpen)}>
        <Text marginRight={"8px"} color={"#fff"} textAlign={"right"}>
          Min profil
        </Text>
        <MdKeyboardArrowDown size={"30px"} color={theme.colors.secondary} />
      </ContentWrapper>

      <TabsWrapper show={isOpen}>
        {accountItems?.map((acc) => (
          <TabItem key={acc?.name} onClick={() => onItem(acc.path)}>
            {acc.icon}
            <Text
              fontWeight={600}
              fontSize={"0.9em"}
              marginLeft={"15px"}
              textAlign={"left"}
            >
              {acc.name}
            </Text>
          </TabItem>
        ))}
        <TabItem onClick={onLogout}>
          <AiOutlineLogout color={"#2AAC64"} size={"25px"} />
          <Text
            fontWeight={600}
            fontSize={"0.9em"}
            marginLeft={"15px"}
            textAlign={"left"}
          >
            Logga ut
          </Text>
        </TabItem>
      </TabsWrapper>
    </Container>
  );
};

export default AccountSelect;

const Container = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  border: none;
  outline: none;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const TabItem = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
    background-color: #f9f9fa;
  }
`;

const growDown = keyframes`
  0% {
    transform: scaleY(0)
  }
  80% {
    transform: scaleY(1.1)
  }
  100% {
    transform: scaleY(1)
  }
`;

const TabsWrapper = styled.div`
  background-color: #fff;
  margin: 15px 0;
  padding: 10px 8px;
  animation: ${growDown} 300ms ease-in-out forwards;
  display: ${({ show }) => (show ? "block" : "none")};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
`;
