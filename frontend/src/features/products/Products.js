import React, { useCallback } from "react";
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

const Container = styled.div`
  width: 100%;
  padding: 60px 40px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-gap: 0 30px;
  height: 100%;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  margin-top: ${({ mt }) => mt || 0};
`;

const SubRow = () => <div>opened</div>;

const Products = () => {
  const handleChangeSelection = useCallback((count) => {}, []);

  return (
    <Container>
      <div>
        <TopWrapper mt={"10px"}>
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
        <DarkTableStyle>
          {/*<TopWrapper>*/}
          {/*  <Text width={"auto"} fontWeight={500}>*/}
          {/*    Produktlista*/}
          {/*  </Text>*/}
          {/*  <Button*/}
          {/*    jc={"space-between"}*/}
          {/*    height={"40px"}*/}
          {/*    padding={"12px"}*/}
          {/*    width={"90px"}*/}
          {/*    secondary*/}
          {/*  >*/}
          {/*    <img alt={"filter-icon"} src={FilterIcon} />*/}
          {/*    Filter*/}
          {/*  </Button>*/}
          {/*</TopWrapper>*/}
          <Table
            columns={ReportsColumns}
            data={tableData || []}
            onChangeSelection={handleChangeSelection}
            onRowClick={console.log}
            renderRowSubComponent={SubRow}
          />
        </DarkTableStyle>
      </div>
    </Container>
  );
};

export default Products;
