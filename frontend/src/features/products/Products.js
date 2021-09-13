import React, { useCallback } from "react";
import styled from "styled-components";
import { DarkTableStyle } from "../../components/CustomTable/styledTable";
import Table from "../../components/CustomTable/Table";
import { ReportsColumns } from "../../components/CustomTable/columnsConstants";
import Pic1 from "../../assets/images/pictogram1.svg";
import Pic2 from "../../assets/images/pictogram2.svg";
import Pic3 from "../../assets/images/pictogram3.svg";
import FileExplorer from "../../components/TreeMenu/FileExplorer";
import Tree from "../../components/TreeMenu/Tree";

const Container = styled.div`
  width: 100%;
  padding: 73px 60px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-gap: 0 30px;
  height: 100%;
`;

const data = [
  {
    subRows: undefined,
    productName: "Toluene TECHNICAL",
    supplier: "VWR International",
    date: "16-03-2020",
    pictograms: [Pic1, Pic2, Pic3],
  },
  {
    subRows: undefined,
    productName: "Neodisher Z",
    supplier: "Chemische Fabrik Dr. Weigert GmbH & Co. KG",
    date: "16-03-2020",
    pictograms: [Pic1],
  },
];

const SubRow = () => <div>opened</div>;

const treeData = [
  {
    id: 0,
    name: "Imvelo",
    isRoot: true,
    isOpen: true,
    productCount: 100,
    children: [1, 3],
  },
  {
    id: 1,
    name: "David",
    productCount: 200,
    children: [2],
  },
  {
    id: 2,
    name: "readme.md",
    productCount: 50,
    children: [],
  },
  {
    id: 3,
    name: "Slancer",
    children: [6, 4],
  },
  {
    id: 4,
    name: "Projects",
    productCount: 150,
    children: [5],
  },
  {
    id: 5,
    name: "Treeview",
    children: [],
  },
  {
    id: 6,
    name: "Vblogs",
    children: [],
  },
];

const Products = () => {
  const handleChangeSelection = useCallback((count) => {}, []);

  return (
    <Container>
      <Tree data={treeData} />
      <div>
        <DarkTableStyle>
          <Table
            columns={ReportsColumns}
            data={data || []}
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
