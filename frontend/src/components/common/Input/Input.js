import React, { useState } from "react";
import { CustomInput } from "./styledInput";
import { ErrorLabel } from "../ErrorLabel/ErrorLabel";
import { Label } from "./Label";
import { useTheme } from "styled-components";

const Input = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const { label, error } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ width: "100%", position: "relative", marginTop: "30px" }}>
      {label && (
        <Label
          color={
            error
              ? theme.colors.error
              : isFocused
              ? theme.colors.focused
              : "inherit"
          }
        >
          {label}
        </Label>
      )}
      <CustomInput
        {...props}
        isError={error}
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
