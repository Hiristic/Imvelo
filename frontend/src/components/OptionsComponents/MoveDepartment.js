import Tree from "../TreeMenu/Tree";
import { treeData } from "../../config/mockedData";
import styled from "styled-components";
import Button from "../common/Button";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: scroll;

  border: 1px solid #d9d9e3;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 10px;
`;

const MoveDepartment = ({ id }) => {
  const onSelect = (selectedId) => {
    console.log("u selected id", selectedId);
  };

  return (
    <>
      <Wrapper>
        <Tree data={treeData} chosenId={id} isMoving onNodeSelect={onSelect} />
      </Wrapper>
      <Button marginTop={"30px"}>
        Flytta befintlig avdelning till ny plats
      </Button>
    </>
  );
};

export default MoveDepartment;
