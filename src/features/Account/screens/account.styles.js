import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

//Initial Account Screen

export const SwiperContainerStyles = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  flex: 0.2;
  margin: 0px 15px;
`;

export const ContainedButton = styled.TouchableOpacity`
  background-color: ${colors.brand.primary};
  border-radius: 30px;
  align-items: center;
  padding: 13px;
`;

export const OutlinedButton = styled.TouchableOpacity`
  background-color: ${colors.ui.quaternary};
  border-radius: 30px;
  border: 1px solid ${colors.brand.primary};
  align-items: center;
  padding: 13px;
`;

//Login Page Screen

export const LoginContainer = styled.View`
  flex: 1;
  background-color: white;
  padding: 0px 25px;
`;

export const LoginIconContainer = styled.View`
  /* flex-direction: row; */
  /* background-color: gray; */
  padding: 30px 0px 10px 0px;
  margin-left: -3px;
`;
export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* background-color: gray; */
  align-items: baseline;
  padding-top: 5px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`;
