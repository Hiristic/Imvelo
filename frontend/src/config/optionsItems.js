import AddNewDepartment from "../components/OptionsComponents/AddNewDepartment";
import RenameComponent from "../components/OptionsComponents/RenameComponent";
import MoveDepartment from "../components/OptionsComponents/MoveDepartment";
import DeleteComponent from "../components/OptionsComponents/DeleteComponent";

export const optionsItems = [
  {
    modalTitle: "Ny avdelning",
    modalComponent: AddNewDepartment,
    name: "Lägg till mapp",
    color: "#fff",
    id: 0,
  },
  {
    modalTitle: "Byt namn på avdelningen",
    modalComponent: RenameComponent,
    name: "Redigera namn",
    color: "#fff",
    id: 1,
  },
  {
    modalTitle: "Flytta avdelning till ny plats",
    modalComponent: MoveDepartment,
    name: "Flytta",
    color: "#fff",
    id: 2,
  },
  {
    modalTitle: "Radera avdelning",
    modalComponent: DeleteComponent,
    name: "Radera",
    color: "#F05453",
    id: 3,
  },
];
