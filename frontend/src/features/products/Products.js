import { useCallback } from "react";
import styled from "styled-components";
import { DarkTableStyle } from "../../components/CustomTable/styledTable";
import Table from "../../components/CustomTable/Table";
import { ReportsColumns } from "../../components/CustomTable/columnsConstants";
import Pic1 from "../../assets/images/pictogram1.svg";
import Pic2 from "../../assets/images/pictogram2.svg";
import Pic3 from "../../assets/images/pictogram3.svg";

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

const Products = () => {
  const handleChangeSelection = useCallback((count) => {
    console.log(count);
  }, []);

  return (
    <Container>
      <div />
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
