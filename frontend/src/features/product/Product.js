import React from "react";
import {
  GoBackButton,
  ContentWrapper,
  Leverantor,
  ProductName,
} from "./product.styled";
import { useHistory } from "react-router-dom";

const Product = () => {
  const history = useHistory();
  const myProduct = {
    supplier: "Henkel Ltd",
    productName: "Potassium dichromate",
  };

  return (
    <ContentWrapper>
      <GoBackButton onClick={() => history.push("./")}>
        Tillbaka till Produktlistan
      </GoBackButton>
      <div>
        <Leverantor> {myProduct.supplier} </Leverantor>
        <ProductName> {myProduct.productName} </ProductName>
      </div>
      {/*<CustomTabs />*/}
    </ContentWrapper>
  );
};

export default Product;
