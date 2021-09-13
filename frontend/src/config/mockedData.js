import Pic1 from "../assets/images/pictogram1.svg";
import Pic2 from "../assets/images/pictogram2.svg";
import Pic3 from "../assets/images/pictogram3.svg";

export const treeData = [
  {
    id: 0,
    name: "Imvelo",
    isRoot: true,
    isOpen: true,
    productCount: 100,
    children: [1, 3],
  },
  {
    id: 1,
    name: "David",
    productCount: 200,
    children: [2],
  },
  {
    id: 2,
    name: "readme.md",
    productCount: 50,
    children: [],
  },
  {
    id: 3,
    name: "Slancer",
    children: [6, 4],
  },
  {
    id: 4,
    name: "Projects",
    productCount: 150,
    children: [5],
  },
  {
    id: 5,
    name: "Treeview",
    children: [],
  },
  {
    id: 6,
    name: "Vblogs",
    children: [],
  },
];

export const tableData = [
  {
    subRows: undefined,
    productName: "Toluene TECHNICAL",
    supplier: "VWR International",
    date: "16-03-2020",
    pictograms: [Pic1, Pic2, Pic3],
  },
  {
    subRows: undefined,
    productName: "Neodisher Z",
    supplier: "Chemische Fabrik Dr. Weigert GmbH & Co. KG",
    date: "16-03-2020",
    pictograms: [Pic1],
  },
];
