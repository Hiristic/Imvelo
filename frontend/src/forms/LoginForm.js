import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/common/Input/Input";
import Button from "../components/common/Button";
import { Link } from "../components/common/Typography";
import { ErrorLabel } from "../components/common/ErrorLabel/ErrorLabel";
import Spinner from "../components/common/Spinner/Spinner";
import styled from "styled-components";
import Checkbox from "../components/common/Checkbox/Checkbox";

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 31px;
`;

const LoginForm = ({ onSubmit, serverError, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        label="Användarnamn"
        placeholder="Skriv in ditt användarnamn"
        type="email"
        error={errors?.email && "Felaktigt användarnamn, försök igen."}
        {...register("email", { required: true })}
      />
      <Input
        name="password"
        type={"password"}
        label="Lösenord"
        placeholder="Skriv in lösenord"
        error={errors?.password && "Felaktigt lösenord, försök igen."}
        {...register("password", { required: true })}
      />
      <ErrorLabel>{serverError}</ErrorLabel>
      <ButtonWrapper>
        <Checkbox
          placeholder={"Kom ihåg"}
          name={"remember"}
          // value={true}
          {...register("remember", { required: false })}
          readOnly
        />
        <Link href={"/reset"}>Glömt lösenord?</Link>
      </ButtonWrapper>
      <Button type="submit" padding="12" disabled={loading}>
        {loading ? <Spinner size={"25px"} /> : "Logga in"}
      </Button>
    </form>
  );
};

export default LoginForm;
