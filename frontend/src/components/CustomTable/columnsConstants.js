import React from "react";
import { Heading } from "../common/Typography";
import { Text } from "../common/Typography";
import { Link } from "../common/Typography";
import Checkbox from "../common/Checkbox/Checkbox";
import { FaFileAlt } from "react-icons/fa";
import AlignCell from "./AlignCell";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { theme } from "../../theme";
import FilesCell from "./FilesCell";

export const ReportsColumns = [
  {
    Header: ({ getToggleAllRowsSelectedProps }) => (
      <AlignCell padding={"0 16px"}>
        <Checkbox size={16} {...getToggleAllRowsSelectedProps()} />
      </AlignCell>
    ),
    accessor: "keyword", // accessor is the "key" in the data
    Cell: ({ row }) => (
      <Checkbox size={16} {...row.getToggleRowSelectedProps()} />
    ),
    disableFilters: true,
    width: "10%",
  },
  {
    Header: "Dokument",
    accessor: "country", // accessor is the "key" in the data
    disableFilters: true,
    Cell: ({ value }) => <FilesCell />,
    width: "15%",
  },
  {
    Header: "Produktnamm",
    accessor: "productName", // accessor is the "key" in the data
    disableFilters: true,
    width: "30%",
  },
  {
    Header: "Leverantör",
    accessor: "supplier", // accessor is the "key" in the data
    disableFilters: true,
    width: "20%",
  },
  {
    Header: "Piktogram",
    accessor: "pictograms", // accessor is the "key" in the data
    disableFilters: true,
    Cell: ({ value }) => {
      const arr = [];
      value.map((res) =>
        arr.push(<img style={{ marginLeft: 3 }} src={res} alt={"pictogram"} />)
      );
      return arr;
    },
    width: "20%",
  },
  {
    Header: "Utfärdande datum",
    accessor: "date", // accessor is the "key" in the data
    disableFilters: true,
    width: "20%",
  },
  {
    id: "expander",
    disableFilters: true,
    width: "10%",
    Cell: ({ row }) => (
      <AlignCell {...row.getToggleRowExpandedProps()} align={"right"}>
        {row.isExpanded ? (
          <RiArrowRightSLine size={25} color={theme.colors.secondary} />
        ) : (
          <RiArrowDownSLine size={25} color={theme.colors.secondary} />
        )}
      </AlignCell>
    ),
  },
];
