import styled from "styled-components";
import { DarkTableStyle } from "../../components/CustomTable/styledTable";
import Table from "../../components/CustomTable/Table";
import { ReportsColumns } from "../../components/CustomTable/columnsConstants";

const Container = styled.div`
  width: 100%;
  padding: 73px 60px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-gap: 0 30px;
`;

const data = [
  {
    keyword: "winter",
    country: "historian",
    age: 4,
    visits: 19,
    progress: 17,
    status: "single",
    subRows: undefined,
  },
  {
    keyword: "winter",
    country: "historian",
    age: 4,
    visits: 19,
    progress: 17,
    status: "single",
    subRows: undefined,
  },
];

const Products = () => {
  return (
    <Container>
      <div />
      <div>
        <DarkTableStyle>
          <Table columns={ReportsColumns} data={data || []} />
        </DarkTableStyle>
      </div>
    </Container>
  );
};

export default Products;
