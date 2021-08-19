import React from "react";
import { Container, Checkmark, Input } from "./checkbox.styled";
import { ErrorLabel } from "../ErrorLabel/ErrorLabel";

const Checkbox = React.forwardRef((props, ref) => {
  const { placeholder, error } = props;

  return (
    <div
      style={{
        textAlign: "left",
      }}
    >
      <Container>
        {placeholder}
        <Input {...props} ref={ref} />
        <Checkmark />
      </Container>
      {error ? <ErrorLabel>{error}</ErrorLabel> : null}
    </div>
  );
});

export default Checkbox;
