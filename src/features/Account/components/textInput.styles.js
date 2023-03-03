import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const StyledInputWrapper = styled.View`
  flex-direction: column;
  margin-bottom: 16px; /* equivalent to 1rem */
`;

export const StyledInputLabel = styled.Text`
  font-size: 14px; /* equivalent to 1rem */
  font-weight: 600;
  color: ${colors.text.secondary};
  margin-bottom: 8px;
`;

export const StyledInput = styled.TextInput`
  font-size: 16px; /* equivalent to 1rem */
  padding: 8px; /* equivalent to 0.5rem */
  border-width: 1px;
  padding-left: 20px;
  border-radius: 30px;
`;
