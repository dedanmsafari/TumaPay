import React from "react";
import { View, StyleSheet } from "react-native";
import {
  ProfileButton,
  IconContainer,
  IconArrow,
} from "../screens/profile.styles";
import Text from "../../../components/text/text.component";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../infrastructure/theme/colors";

import Spacer from "../../../components/spacer/spacer.component";

const ProfileNav = ({ IconFamily, IconName, title, red }) => {
  return (
    <ProfileButton
      activeOpacity={0.6}
      // style={{ borderColor: red ? colors.ui.error : colors.text.secondary }}
    >
      <IconContainer>
        <IconFamily
          name={IconName}
          size={20}
          color={red ? colors.ui.error : colors.ui.secondary}
          style={{ marginTop: -1 }}
        />
        <Spacer position="right" size="small" />
        <Text
          variant="hint"
          style={{ color: red ? colors.ui.error : undefined }}
        >
          {title}
        </Text>
      </IconContainer>
      {red ? undefined : (
        <IconArrow>
          <Entypo
            name="chevron-small-right"
            size={20}
            color={red ? colors.ui.error : colors.ui.secondary}
          />
        </IconArrow>
      )}
    </ProfileButton>
  );
};

const styles = StyleSheet.create({});

export default ProfileNav;
