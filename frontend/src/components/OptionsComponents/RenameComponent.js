import RenameDepartmentForm from "../../forms/RenameDepartmentForm";

const RenameComponent = ({ id, onSubmit }) => {
  return (
    <RenameDepartmentForm onSubmit={(data) => onSubmit({ ...data, id: id })} />
  );
};

export default RenameComponent;
