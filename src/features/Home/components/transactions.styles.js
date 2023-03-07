import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

//Empty transaction elements

export const TransactionContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  /* background-color: ${colors.ui.icons}; */
`;
export const EmptyTransactionElement = styled.View``;

//Filled transaction elements

export const TransactionHolder = styled.View`
  border-radius: 10px;
  background-color: ${colors.bg.tertiary};
  border: 1px solid ${colors.brand.secondary};
  padding: 5px 10px;
  height: 100px;
  justify-content: space-between;
`;

export const HorizonBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
