import { Text } from "../../../components/common/Typography";
import Checkbox from "../../../components/common/Checkbox/Checkbox";
import React from "react";
import styled from "styled-components";
import RiskMatrix from "../../../components/RiskMatrix/RiskMatrix";
import CustomTabs from "../../../components/Tabs/CustomTabs";
import PictogramFilter from "./PictogramFilter";
import FilterForm1 from "../../../forms/FilterForm1";
import FilterForm2 from "../../../forms/FilterForm2";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "display" : "none")};
  z-index: 2;
  margin-bottom: 30px;
`;

const InnerFilterModal = styled.div`
  position: absolute;
  width: 623px;
  height: auto;
  padding: 24px 31px;
  top: 180px;
  right: 40px;
  background: #ffffff;
  border-radius: 8px;
  display: ${(props) => (props.show ? "display" : "none")};
  z-index: 200;
  margin-bottom: 90px;
`;

const FilterModal = ({ show, onHide }) => {
  return (
    <>
      <ModalContainer show={show} onClick={() => onHide()} />
      <InnerFilterModal show={show}>
        <CustomTabs>
          <div label={"Filter 1"}>
            <FilterForm1 onSubmit={(data) => console.log(data)} />
          </div>
          <div label={"Filter 2"}>
            <FilterForm2 onSubmit={(data) => console.log(data)} />
          </div>
        </CustomTabs>
      </InnerFilterModal>
    </>
  );
};

export default FilterModal;
