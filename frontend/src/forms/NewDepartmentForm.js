import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/common/Input/Input";
import Button from "../components/common/Button";
import { ErrorLabel } from "../components/common/ErrorLabel/ErrorLabel";
import Spinner from "../components/common/Spinner/Spinner";

const NewDepartmentForm = ({ onSubmit, serverError, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        label="Avdelningsnamn"
        placeholder="Nytt avdelningsnamn"
        error={errors?.name && "Ange giltigt namn"}
        {...register("name", { required: true })}
      />
      <ErrorLabel>{serverError}</ErrorLabel>
      <Button type="submit" padding="12" marginTop={"35px"} disabled={loading}>
        {loading ? <Spinner size={"25px"} /> : "Lägg till"}
      </Button>
    </form>
  );
};

export default NewDepartmentForm;
