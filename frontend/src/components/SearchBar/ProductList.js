import { DisplayList, Text, ListItem, SearchMoreButton } from "./searchbar.styled";
import React from "react";
import styled from "styled-components";


const ProductList = (props) => {
  const { productList, inputValue, onSelectProduct, displayProductList } =
    props;

  if (inputValue && displayProductList && productList.length > 0) {
    return (
      <DisplayList>
        <Text> BÄSTA MATCHNINGEN </Text>
        <ul>
          {productList.map((product, index) => {
            return (
              <ListItem key={index} onClick={() => onSelectProduct(index)}>
                {product}
              </ListItem>
            );
          })}
          <SearchMoreButton> Avancerad sökning </SearchMoreButton>
        </ul>
      </DisplayList>
    );
  }
  return <></>;
};

export default ProductList;
