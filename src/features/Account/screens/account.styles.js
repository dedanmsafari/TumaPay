import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const SwiperContainerStyles = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  flex: 0.2;
  margin: 0px 15px;
`;

export const SignUpButton = styled.TouchableOpacity`
  background-color: ${colors.brand.primary};
  border-radius: 30px;
  align-items: center;
  padding: 12px;
`;

export const LogInButton = styled.TouchableOpacity`
  background-color: ${colors.ui.quaternary};
  border-radius: 30px;
  border: 1px solid ${colors.brand.primary};
  align-items: center;
  padding: 12px;
`;
