import React from "react";
import { ReactSVG } from "react-svg";

const SvgImage = ({ source, size, color }) => {
  return (
    <ReactSVG
      src={source}
      beforeInjection={(svg) => {
        svg.setAttribute("fill", color);
        svg.setAttribute("width", size);
        svg.setAttribute("height", size);
        svg.querySelector("path").setAttribute("fill", color);
      }}
    />
  );
};

export default SvgImage;
