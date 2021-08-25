import React from "react";
import { Heading } from "../common/Typography";
import { Text } from "../common/Typography";
import { Link } from "../common/Typography";

export const ReportsColumns = [
  {
    Header: "Report keyword",
    accessor: "keyword", // accessor is the "key" in the data
    disableFilters: true,
    width: 400,
  },
  {
    Header: "Dokument",
    accessor: "country", // accessor is the "key" in the data
    disableFilters: true,
    Cell: ({ value }) => (
      <Heading marginBottom={"0"} textAlign={"center"} level={4}>
        {value}
      </Heading>
    ),
    width: 150,
  },
  {
    Header: "Produktnamm",
    accessor: "language", // accessor is the "key" in the data
    disableFilters: true,
    Cell: ({ value }) => (
      <Heading marginBottom={"0"} textAlign={"center"} level={4}>
        {value}
      </Heading>
    ),
    width: 150,
  },
  // {
  //   Header: "Top 3 results",
  //   accessor: "top3", // accessor is the "key" in the data
  //   disableFilters: true,
  //   Cell: ({ value }) => <TopResults normal value={value} />,
  // },
  // {
  //   Header: "Top 10 results",
  //   accessor: "top10", // accessor is the "key" in the data
  //   disableFilters: true,
  //   Cell: ({ value }) => <TopResults normal value={value} />,
  // },
  // {
  //   Header: "Status",
  //   accessor: "status", // accessor is the "key" in the data
  //   disableFilters: true,
  //   Cell: ({ value }) => <StatusCell value={value} />,
  //   width: 150,
  // },
  {
    Header: "Leverantör",
    accessor: (value) => value, // accessor is the "key" in the data
    disableFilters: true,
    Cell: ({ value }) => (
      <Link
        fontFamily={"NirmalaBold"}
        href={value?.status === "Completed" ? `/reports/${value?.id}` : null}
        color={value?.status === "Completed" ? "#2FA3D1" : "lightgrey"}
        textAlign={"center"}
        fontSize={"1em"}
      >
        See details
      </Link>
    ),
    width: 150,
  },
  {
    Header: "Piktogram",
    accessor: "name", // accessor is the "key" in the data
    disableFilters: true,
    Cell: ({ value }) => (
      <Heading marginBottom={"0"} textAlign={"center"} level={4}>
        {value}
      </Heading>
    ),
    width: 150,
  },
  {
    Header: "Utfärdande datum",
    accessor: "first", // accessor is the "key" in the data
    disableFilters: true,
    Cell: ({ value }) => (
      <Heading marginBottom={"0"} textAlign={"center"} level={4}>
        {value}
      </Heading>
    ),
    width: 150,
  },
];
