import React, { useState } from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  width: 100%;
  padding: ${({ padding }) => padding};
`;

const TabsList = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #f4f4f4;
`;

const TabItem = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 1em;
  color: #878790;
  ${({ activeTab, theme }) =>
    activeTab &&
    `
    color: ${theme.colors.secondary};
    border-bottom: 3px solid ${theme.colors.secondary};
    
  `}

  &:hover {
    cursor: pointer;
  }
`;

const TabContent = styled.div`
  display: ${(props) => (props.hidden ? "hidden" : "block")};
`;

const CustomTabs = ({ children, padding }) => {
  const [activeTab, setActiveTab] = useState(children[0]?.props?.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabsContainer padding={padding}>
      <TabsList>
        {children?.map((child) => (
          <TabItem
            key={child.props.label}
            onClick={() => onClickTabItem(child.props.label)}
            activeTab={activeTab === child.props.label}
          >
            {child.props.label}
          </TabItem>
        ))}
      </TabsList>
      <div>
        {children?.map((child) => (
          <TabContent hidden={child.props.label !== activeTab}>
            {child.props.children}
          </TabContent>
        ))}
      </div>
    </TabsContainer>
  );
};

export default CustomTabs;
