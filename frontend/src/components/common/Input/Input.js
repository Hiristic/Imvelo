import React, { useState } from "react";
import { CustomInput } from "./styledInput";
import { ErrorLabel } from "../ErrorLabel/ErrorLabel";
import { Label } from "./Label";

const Input = React.forwardRef((props, ref) => {
  const { label, error } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ width: "100%", position: "relative", marginTop: "30px" }}>
      {label && (
        <Label color={isFocused ? "#117ACE" : "inherit"}>{label}</Label>
      )}
      <CustomInput
        {...props}
        isFocused={isFocused}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        ref={ref}
      />
      {error ? <ErrorLabel>{error}</ErrorLabel> : null}
    </div>
  );
});

export default Input;
