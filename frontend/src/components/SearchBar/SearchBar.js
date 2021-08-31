import styled from "styled-components";
import { Search, MyInput, DisplayList } from "./searchbar.styled";
import React, { useState, useRef, useEffect } from "react";
import SearchIcon from "../../assets/images/search.svg";
import useDebounce from "../../hooks/useDebounce";

const SearchBar = () => {
  // const renderCountRef = useRef(0);
  // const [inputValue, setInputValue] = useState("");
  // const debouncedValue = useDebounce(inputValue, 3000);

  // const handleInputChange = ({ target: { value } }) => setInputValue(value);

  // useEffect(() => {
  //   console.log(debouncedValue);
  // }, [debouncedValue]);

  // renderCountRef.current += 1;

  return (
    // <Search value={inputValue} onChange={handleInputChange}>
    <Search>
      <img
        src={SearchIcon}
        style={{
          width: "15px",
          height: "15px",
          color: "#2aac64",
        }}
      />
      <Autocomplete />
    </Search>
  );
};


const ProductList = props => {
  const {
    productList,
    inputValue,
    onSelectProduct,
    displayProductList,
    selectedProduct
  } = props;

  if (inputValue && displayProductList && inputValue.length > 2) {
    if (productList.length > 0) {
      return (
        <DisplayList>
          {productList.map((product, index) => {
            return (
              <li
                style={{
                  cursor: "pointer",
                }}
                key={index}
                className="suggestion"
                onClick={() => onSelectProduct(index)}
              >
                {product}
              </li>
            );
          })}
        </DisplayList>
      );
    }
  }
  return <></>;
};
const Autocomplete = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [filteredProductList, setFilteredProductList] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(0);
  const [displayProductList, setDisplayProductList] = React.useState(false);


  const productList = [
    "Chemical 1",
    "Chemical 2",
    "Chemical 3",
    "Something 4",
    "Something 5",
    "Something 6",
    "Something 7",
    "Something 8",
    "Something 9",
    "Something 10",
  ];

  const getResult = event => {
    const value = event.target.value;
    setInputValue(value);

    const filteredProductList = productList.filter(product =>
      product.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProductList(filteredProductList);
    setDisplayProductList(true);
  };

  const onSelectProduct = index => {
    setSelectedProduct(index);
    setInputValue(filteredProductList[index]);
    setFilteredProductList([]);
    setDisplayProductList(false);
  };

  return (
    <>
      <MyInput
        className="user-input"
        type="text"
        placeholder="Sök"
        onChange={getResult}
        value={inputValue}
      />
      <ProductList
        inputValue={inputValue}
        selectedProduct={selectedProduct}
        onSelectProduct={onSelectProduct}
        displayProductList={displayProductList}
        productList={filteredProductList}
      />
    </>
  );
};

export default SearchBar;