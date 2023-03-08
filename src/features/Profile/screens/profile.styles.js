import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Badge } from "react-native-paper";

export const ProfileTab = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StatusBadge = styled(Badge)`
  background-color: ${({ active }) =>
    active ? colors.brand.primary : colors.ui.error};
  width: 60px;
`;

//Profile buttton styles

export const ProfileButton = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 8px;

  border: 1px solid
    ${({ red }) => (red ? colors.ui.error : colors.text.secondary)};
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const IconArrow = styled.View``;
