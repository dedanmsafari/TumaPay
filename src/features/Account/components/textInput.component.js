import React, { useState, useCallback } from "react";
import {
  StyledInputWrapper,
  StyledInputLabel,
  StyledInput,
} from "./textInput.styles";
import { colors } from "../../../infrastructure/theme/colors";

const TextInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInput
        selectionColor={colors.brand.primary}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ borderColor: isFocused ? "green" : colors.text.secondary }}
        {...props}
      />
    </StyledInputWrapper>
  );
};

export default TextInput;
