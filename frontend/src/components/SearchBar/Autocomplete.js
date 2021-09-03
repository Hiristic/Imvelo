import React, { useEffect, useRef, useState } from "react";
import { MyInput } from "./searchbar.styled";
import useDebounce from "../../hooks/useDebounce";
import ProductList from "./ProductList";

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [displayProductList, setDisplayProductList] = useState(false);

  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDisplayProductList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

  const getResult = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredProductList = productList.filter((product) =>
      product.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProductList(filteredProductList);
    setDisplayProductList(true);
  };

  const onSelectProduct = (index) => {
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
        ref={ref}
        inputValue={debouncedValue}
        selectedProduct={selectedProduct}
        onSelectProduct={onSelectProduct}
        displayProductList={displayProductList}
        productList={filteredProductList}
      />
    </>
  );
};

export default Autocomplete;
