import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

export const HeroContainer = styled.View`
  flex-direction: row;
  border-radius: 15px;
  background-color: ${colors.brand.secondary};
  padding: 22px 15px;
  /* justify-content: space-around; */
`;
export const TextBlock = styled.View`
  flex: 0.7;
`;

export const ImageBlock = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
  margin-top: -20px;
`;

export const ContainedButton = styled.TouchableOpacity`
  background-color: ${colors.bg.primary};
  flex-direction: row;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  padding: 13px;
  width: 150px;
`;
