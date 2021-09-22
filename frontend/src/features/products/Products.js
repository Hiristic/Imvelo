import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { DarkTableStyle } from "../../components/CustomTable/styledTable";
import Table from "../../components/CustomTable/Table";
import { ReportsColumns } from "../../components/CustomTable/columnsConstants";
import Tree from "../../components/TreeMenu/Tree";
import ToggleSwitch from "../../components/common/ToggleSwitch/ToggleSwitch";
import { Text } from "../../components/common/Typography";
import { tableData, treeData } from "../../config/mockedData";
import Button from "../../components/common/Button";
import FilterIcon from "../../assets/images/filterIcon.svg";
import SubRowComponent from "./components/SubRowComponent";
import Checkbox from "../../components/common/Checkbox/Checkbox";
import FilterModal from "./components/FilterModal";

const Container = styled.div`
  width: 100%;
  padding: 60px 40px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-gap: 0 30px;
  height: calc(100vh + 200px);
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ mb }) => mb || "15px"};
  margin-top: ${({ mt }) => mt || 0};
`;

const FilterContainer = styled.div`
  position: relative;
`;

const Products = () => {
  const handleChangeSelection = useCallback((count) => {}, []);
  const [filter, setFilter] = useState(false);

  return (
    <Container>
      <div>
        <TopWrapper mb={"40px"} mt={"10px"}>
          <Text width={"auto"} fontWeight={500}>
            Avdelningar
          </Text>
          <ToggleSwitch />
          <Text width={"auto"} fontWeight={500}>
            Inkludera underavdelningar
          </Text>
        </TopWrapper>
        <Tree data={treeData} />
      </div>
      <div>
        <FilterModal show={filter} onHide={() => setFilter(false)} />
        <TopWrapper>
          <Text width={"auto"} fontWeight={500}>
            Produktlista
          </Text>
          <FilterContainer>
            <Button
              jc={"space-between"}
              height={"40px"}
              padding={"12px"}
              width={"90px"}
              secondary
              onClick={() => setFilter(!filter)}
            >
              <img alt={"filter-icon"} src={FilterIcon} />
              Filter
            </Button>
          </FilterContainer>
        </TopWrapper>
        <DarkTableStyle>
          <Table
            columns={ReportsColumns}
            data={tableData || []}
            onChangeSelection={handleChangeSelection}
            onRowClick={(data) => {
              console.log(data);
            }}
            renderRowSubComponent={SubRowComponent}
          />
        </DarkTableStyle>
      </div>
    </Container>
  );
};

export default Products;
