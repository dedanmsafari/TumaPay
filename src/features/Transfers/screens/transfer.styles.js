import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const ContainedButton = styled.TouchableOpacity`
  background-color: ${colors.brand.primary};
  border-radius: 30px;
  align-items: center;
  padding: 13px;
`;
