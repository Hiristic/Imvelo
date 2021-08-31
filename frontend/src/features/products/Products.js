import { useCallback } from "react";
import styled from "styled-components";
import { DarkTableStyle } from "../../components/CustomTable/styledTable";
import Table from "../../components/CustomTable/Table";
import { ReportsColumns } from "../../components/CustomTable/columnsConstants";
import Pic1 from "../../assets/images/pictogram1.svg";
import Pic2 from "../../assets/images/pictogram2.svg";
import Pic3 from "../../assets/images/pictogram3.svg";
import TreeMenu from "react-simple-tree-menu";

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
    key: "first-level-node-1",
    label: "Node 1 at the first level",
    nodes: [
      {
        key: "second-level-node-1",
        label: "Node 1 at the second level",
        nodes: [
          {
            key: "third-level-node-1",
            label: "Last node of the branch",
            nodes: [], // you can remove the nodes property or leave it as an empty array
          },
        ],
      },
    ],
  },
  {
    key: "first-level-node-2",
    label: "Node 2 at the first level",
  },
];

const DEFAULT_PADDING = 16;
const ICON_SIZE = 8;
const LEVEL_SPACE = 16;

const ItemComponent = ({
  level = 0,
  hasNodes,
  isOpen,
  label,
  searchTerm,
  openNodes,
  toggleNode,
  matchSearch,
  focused,
  ...props
}) => (
  <div
    {...props}
    style={{
      paddingLeft: DEFAULT_PADDING + ICON_SIZE + level * LEVEL_SPACE,
      cursor: "pointer",
      boxShadow: focused ? "0px 0px 5px 0px #222" : "none",
      zIndex: focused ? 999 : "unset",
      position: "relative",
    }}
  >
    {hasNodes && (
      <div
        style={{ display: "inline-block" }}
        onClick={(e) => {
          hasNodes && toggleNode && toggleNode();
          e.stopPropagation();
        }}
      >
        {/*<ToggleIcon on={isOpen} />*/}
      </div>
    )}
    {label}
  </div>
);

const Products = () => {
  const handleChangeSelection = useCallback((count) => {
    console.log(count);
  }, []);

  return (
    <Container>
      <TreeMenu data={treeData} hasSearch={false}>
        {({ items }) => {
          items.map(({ key, ...props }) => (
            <ItemComponent key={key} {...props} />
          ));
        }}
      </TreeMenu>
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
