import React from "react";
import { Container, Checkmark, Input } from "./checkbox.styled";
import { ErrorLabel } from "../ErrorLabel/ErrorLabel";

const Checkbox = React.forwardRef((props, ref) => {
  const { placeholder, error, size, placeholderSpace } = props;

  return (
    <div>
      <Container
        size={size}
        placeholder={placeholder}
        paddingLeft={placeholderSpace}
      >
        {placeholder}
        <Input type={"checkbox"} {...props} ref={ref} />
        <Checkmark size={size} />
      </Container>
      {error ? <ErrorLabel>{error}</ErrorLabel> : null}
    </div>
  );
});

export default Checkbox;
