// import React from "react";
// import styled from "styled-components";
// import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// import Overview from "./Overview";
// import Document from "./Document";
// import RiskAssessment from "./RiskAssessment.js";
// import Examination from "./Examination.js";
// import Ticket from "./Ticket.js";
// import Reports from "./Reports.js";
// import OwnInformation from "./OwnInformation.js";
//
// const STabs = styled(Tabs)`
//   position: static;
//   left: 25.52%;
//   right: 59.31%;
//   top: 0%;
//   bottom: 0%;
//   font-family: Inter;
//   font-style: normal;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 17px;
//   align-items: center;
//   width: 90%;
// `;
//
// const STabList = styled(TabList)`
//   list-style-type: none;
//   padding: 4px;
//   display: flex;
//   margin: 30px 0px 0px 0px;
// `;
// STabList.tabsRole = "TabList";
//
// const STab = styled(Tab)`
//   margin-right: 4px;
//   padding: 4px;
//   user-select: none;
//   cursor: arrow;
//   color: #878790;
//   margin-top: 30px;
//
//   &.is-selected {
//     border-bottom: 4px solid #2aac64;
//     color: #2aac64;
//   }
//
//   &:focus {
//     outline: none;
//     box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
//   }
// `;
// STab.tabsRole = "Tab";
//
// const STabPanel = styled(TabPanel)`
//   display: none;
//   &.is-selected {
//     display: block;
//   }
// `;
//
// STabPanel.tabsRole = "TabPanel";
//
// const CustomTabs = () => (
//   <STabs
//     selectedTabClassName="is-selected"
//     selectedTabPanelClassName="is-selected"
//     style={{
//       marginLeft: "60px",
//     }}
//   >
//     <STabList>
//       <STab> Översikt </STab>
//       <STab> Dokument </STab>
//       <STab> Riskbedömning </STab>
//       <STab> Granskning </STab>
//       <STab> Etiketter </STab>
//       <STab> Rapporter </STab>
//       <STab> Egen Information </STab>
//     </STabList>
//     <STabPanel>
//       {" "}
//       <Overview />
//     </STabPanel>
//     <STabPanel>
//       {" "}
//       <Document />{" "}
//     </STabPanel>
//     <STabPanel>
//       {" "}
//       <RiskAssessment />{" "}
//     </STabPanel>
//     <STabPanel>
//       {" "}
//       <Examination />{" "}
//     </STabPanel>
//     <STabPanel>
//       {" "}
//       <Ticket />{" "}
//     </STabPanel>
//     <STabPanel>
//       {" "}
//       <Reports />{" "}
//     </STabPanel>
//     <STabPanel>
//       {" "}
//       <OwnInformation />{" "}
//     </STabPanel>
//   </STabs>
// );
//
// export default CustomTabs;
