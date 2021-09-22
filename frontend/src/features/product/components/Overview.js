import React, { useState } from "react";
import {
  InfoContainer,
  Information,
  InfoTitle,
  Description,
  ProtectiveEquipment,
} from "../product.styled";

const Overview = () => {
  return (
    <InfoContainer>
      <Information>
        <InfoTitle> Inter information </InfoTitle>
        <Description>
          <p
            style={{
              marginBottom: "8px",
            }}
          >
            {" "}
            Synonymer{" "}
          </p>
          <p
            style={{
              marginBottom: "8px",
            }}
          >
            {" "}
            Internt artikelnummer{" "}
          </p>
          <p> Produkttyp </p>
        </Description>
      </Information>

      <ProtectiveEquipment>
        <InfoTitle> Skyddsutrustning </InfoTitle>
      </ProtectiveEquipment>
    </InfoContainer>
  );
};

export default Overview;
