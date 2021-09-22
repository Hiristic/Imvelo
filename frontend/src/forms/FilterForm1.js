import React from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "../components/common/Input/Input";
import Button from "../components/common/Button";
import { Link, Text } from "../components/common/Typography";
import { ErrorLabel } from "../components/common/ErrorLabel/ErrorLabel";
import Spinner from "../components/common/Spinner/Spinner";
import styled from "styled-components";
import Checkbox from "../components/common/Checkbox/Checkbox";
import RiskMatrix from "../components/RiskMatrix/RiskMatrix";
import PictogramFilter from "../features/products/components/PictogramFilter";

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const StyleCheckobox = styled(Checkbox)`
  margin-right: 40px;
`;

const FilterForm1 = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text color={"#C0C0D0"} fontWeight={500} marginBottom={"16px"}>
        REACH
      </Text>
      <RowWrapper>
        <StyleCheckobox
          placeholder={"SVHC"}
          size={16}
          name={"SVHC"}
          {...register("SVHC", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Bilaga XIV"}
          size={16}
          name={"Bilaga XIV"}
          {...register("Bilaga XIV", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Bilaga XVII"}
          size={16}
          name={"Bilaga XVII"}
          {...register("Bilaga XVII", { required: false })}
          readOnly
        />
      </RowWrapper>
      <Text color={"#C0C0D0"} fontWeight={500} marginBottom={"16px"}>
        PRIO
      </Text>
      <RowWrapper>
        <StyleCheckobox
          placeholder={"Utfasning"}
          size={16}
          name={"Utfasning"}
          {...register("Utfasning", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Riskminskning"}
          size={16}
          name={"Riskminskning"}
          {...register("Riskminskning", { required: false })}
          readOnly
        />
      </RowWrapper>
      <Text color={"#C0C0D0"} fontWeight={500} marginBottom={"16px"}>
        AFS
      </Text>
      <RowWrapper>
        <StyleCheckobox
          placeholder={"2011:19 A-list"}
          size={16}
          name={"2011:19 A-list"}
          {...register("2011:19 A-list", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"2011:19 B-list"}
          size={16}
          name={"2011:19 B-list"}
          {...register("2011:19 B-list", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"2018:1 HGV"}
          size={16}
          name={"2018:1 HGV"}
          {...register("2018:1 HGV", { required: false })}
          readOnly
        />
      </RowWrapper>
      <Text color={"#C0C0D0"} fontWeight={500} marginBottom={"16px"}>
        Annat
      </Text>
      <RowWrapper>
        <StyleCheckobox
          placeholder={"SIN-listan"}
          size={16}
          name={"SIN-listan"}
          {...register("SIN-listan", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"EDS Database"}
          size={16}
          name={"EDS Database"}
          {...register("EDS Database", { required: false })}
          readOnly
        />
      </RowWrapper>
      <Text color={"#C0C0D0"} fontWeight={500} marginBottom={"16px"}>
        Riskbedömningar
      </Text>
      <RowWrapper>
        <StyleCheckobox
          placeholder={"Utgått"}
          size={16}
          name={"Utgått"}
          {...register("Utgått", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Utgår inom 2 månader"}
          size={16}
          name={"Utgår inom 2 månader"}
          {...register("Utgår inom 2 månader", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Ej riskbedömda produkter"}
          size={16}
          name={"Ej riskbedömda produkter"}
          {...register("Ej riskbedömda produkter", { required: false })}
          readOnly
        />
      </RowWrapper>
      <Text color={"#C0C0D0"} fontWeight={500} marginBottom={"16px"}>
        Granskning
      </Text>
      <RowWrapper>
        <StyleCheckobox
          placeholder={"Ej granskade produkter"}
          size={16}
          name={"Ej granskade produkter"}
          {...register("Ej granskade produkter", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={"Granskningar som behöver uppdateras"}
          size={16}
          name={"Granskningar som behöver uppdateras"}
          {...register("Granskningar som behöver uppdateras", {
            required: false,
          })}
          readOnly
        />
      </RowWrapper>
      <Text color={"#C0C0D0"} fontWeight={500} marginBottom={"16px"}>
        Risknivå
      </Text>
      <RowWrapper>
        <StyleCheckobox
          placeholder={<RiskMatrix color={"#27AE60"} number={1} />}
          size={16}
          name={"risk1"}
          {...register("risk1", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={<RiskMatrix color={"#117ACE"} number={2} />}
          size={16}
          name={"risk2"}
          {...register("risk2", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={<RiskMatrix color={"#F2C94C"} number={3} />}
          size={16}
          name={"risk3"}
          {...register("risk3", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={<RiskMatrix color={"#F2994A"} number={4} />}
          size={16}
          name={"risk4"}
          {...register("risk4", { required: false })}
          readOnly
        />
        <StyleCheckobox
          placeholder={<RiskMatrix color={"#EB5757"} number={4} />}
          size={16}
          name={"risk5"}
          {...register("risk5", { required: false })}
          readOnly
        />
      </RowWrapper>
      <Text color={"#C0C0D0"} fontWeight={500} marginBottom={"16px"}>
        Piktogram
      </Text>
      <Controller
        name="pictogram"
        control={control}
        defaultValue={null}
        render={({ field }) => <PictogramFilter {...field} />}
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
    </form>
  );
};

export default FilterForm1;
