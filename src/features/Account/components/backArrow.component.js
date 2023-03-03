import React from "react";
import { TouchableOpacity } from "react-native";
import { LoginIconContainer } from "../screens/account.styles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../../../components/spacer/spacer.component";
import Text from "../../../components/text/text.component";
import { colors } from "../../../infrastructure/theme/colors";

const BackArrow = ({ title, caption }) => {
  const navigation = useNavigation();

  return (
    <>
      <LoginIconContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.ui.primary} />
        </TouchableOpacity>
      </LoginIconContainer>
      <Spacer size="medium" />
      <Text variant="title">{title}</Text>
      <Spacer size="medium" />
      {caption && <Text variant="hint">{caption}</Text>}
      <Spacer size="medium" />
    </>
  );
};

export default BackArrow;
