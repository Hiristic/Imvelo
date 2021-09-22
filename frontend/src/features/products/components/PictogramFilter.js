import styled from "styled-components";
import { pictogramMap } from "../../../utils/pictogramMap";
import { useState } from "react";

const Container = styled.div`
  background: #f9f9fa;
  border-radius: 5.1px;
  padding: 5px 7px;
  width: fit-content;
`;

const PictogramWrapper = styled.img`
  padding: 4px;
  margin-right: 5px;
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    `
   background: #ffffff;
  border: 1.275px solid #2aac64;
  box-sizing: border-box;
  border-radius: 5.1px; 
  `}
`;

const PictogramFilter = ({ onChange }) => {
  const [pictogram, setPictogram] = useState(null);

  const onChoose = (res) => {
    const activeId = res.id === pictogram ? null : res.id;
    setPictogram(activeId);
    onChange(activeId);
  };

  return (
    <Container>
      {pictogramMap?.map((res) => (
        <PictogramWrapper
          isActive={pictogram === res.id}
          src={res.image}
          onClick={() => onChoose(res)}
        />
      ))}
    </Container>
  );
};

export default PictogramFilter;
