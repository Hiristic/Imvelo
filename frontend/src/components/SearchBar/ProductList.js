import { DisplayList } from "./searchbar.styled";
import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  cursor: pointer;
  padding-bottom: 16px;
`;

const ProductList = (props) => {
  const { productList, inputValue, onSelectProduct, displayProductList } =
    props;

  if (inputValue && displayProductList && productList.length > 0) {
    return (
      <DisplayList>
        <ul>
          {productList.map((product, index) => {
            return (
              <ListItem key={index} onClick={() => onSelectProduct(index)}>
                {product}
              </ListItem>
            );
          })}
        </ul>
      </DisplayList>
    );
  }
  return <></>;
};

export default ProductList;
