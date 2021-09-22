import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/common/Input/Input";
import Button from "../components/common/Button";
import Spinner from "../components/common/Spinner/Spinner";
import styled from "styled-components";
import Checkbox from "../components/common/Checkbox/Checkbox";
import RiskMatrix from "../components/RiskMatrix/RiskMatrix";
import FilterSearchInput from "../features/products/components/FilterSearchInput";

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const StyleCheckobox = styled(Checkbox)`
  //margin-right: 40px;
  margin-bottom: 30px;
`;

const CheckboxesWrapper = styled.div`
  padding: 20px 31px;
`;

const FilterForm2 = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form style={{ margin: "-20px -31px" }} onSubmit={handleSubmit(onSubmit)}>
      <FilterSearchInput
        name="filterSearch"
        placeholder="Lägg till värde"
        {...register("filterSearch", { required: false })}
      />
      <CheckboxesWrapper>
        <StyleCheckobox
          placeholder={"Produktens artikelnummer"}
          size={16}
          name={"Produktens artikelnummer"}
          {...register("Produktens artikelnummer", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Ingående ämne"}
          size={16}
          name={"Ingående ämne"}
          {...register("Ingående ämne", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Produktens klassificering"}
          size={16}
          name={"Produktens klassificering"}
          {...register("Produktens klassificering", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"EG nummer"}
          size={16}
          name={"EG nummer"}
          {...register("EG nummer", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Brandfarlig vätska, klass"}
          size={16}
          name={"Brandfarlig vätska, klass"}
          {...register("Brandfarlig vätska, klass", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Tillverkare"}
          size={16}
          name={"Tillverkare"}
          {...register("Tillverkare", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Produkttyp"}
          size={16}
          name={"Produkttyp"}
          {...register("Produkttyp", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"UN nummer"}
          size={16}
          name={"UN nummer"}
          {...register("UN nummer", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"ADR klass"}
          size={16}
          name={"ADR klass"}
          {...register("ADR klass", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Utfärdande datum"}
          size={16}
          name={"Utfärdande datum"}
          {...register("Utfärdande datum", { required: false })}
          readOnly
        />

        <Button
          marginTop={"30px"}
          type="submit"
          padding="12"
          width={"25%"}
          disabled={loading}
        >
          {loading ? <Spinner size={"25px"} /> : "Använd filter"}
        </Button>
      </CheckboxesWrapper>
    </form>
  );
};

export default FilterForm2;
