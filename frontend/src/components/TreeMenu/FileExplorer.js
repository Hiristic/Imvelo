import React, { useState } from "react";
import styled from "styled-components";
import Tree from "./Tree";

const StyledFileExplorer = styled.div`
  //width: 100%;
`;

const FileExplorer = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onSelect = (file) => {
    console.log(file);
    setSelectedFile(file);
  };

  return (
    <StyledFileExplorer>
      <Tree onSelect={onSelect} />
    </StyledFileExplorer>
  );
};

export default FileExplorer;
