import NewDepartmentForm from "../../forms/NewDepartmentForm";

const AddNewDepartment = ({ id, onSubmit }) => {
  return (
    <NewDepartmentForm onSubmit={(data) => onSubmit({ ...data, id: id })} />
  );
};

export default AddNewDepartment;
