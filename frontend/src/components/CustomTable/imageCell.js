import React from "react";

export const ImageCell = ({ value, imageHeight }) => {
  if (value) {
    return (
      <img
        src={value}
        style={{ maxHeight: imageHeight ? imageHeight : "100px" }}
        alt={"photo"}
      />
    );
  } else {
    return <p>nema slike</p>;
  }
};
