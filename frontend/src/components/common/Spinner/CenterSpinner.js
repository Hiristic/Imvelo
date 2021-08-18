import Spinner from "./Spinner";
import React from "react";
import styled, { useTheme } from "styled-components";

const CenterContent = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  grid-template-rows: auto 0.1fr 0.5fr;
`;

const CenterSpinner = () => {
  const theme = useTheme();
  return (
    <CenterContent>
      <Spinner color={theme.colors.primary} size={"3em"} />
    </CenterContent>
  );
};

export default CenterSpinner;
