import styled from "styled-components";
import { FaFileAlt } from "react-icons/fa";
import React from "react";

const Container = styled.div`
  display: flex;
`;

const FilesCell = () => {
  return (
    <Container>
      <FaFileAlt color={"#2AAC64"} size={18} />
      <FaFileAlt style={{ marginLeft: 7 }} color={"#2AAC64"} size={18} />
    </Container>
  );
};

export default FilesCell;
