import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import Text from "../../../components/text/text.component";
import {
  ProfileTab,
  ActivePill,
  InActivePill,
  StatusBadge,
} from "./profile.styles";
import { colors } from "../../../infrastructure/theme/colors";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";
import ProfileNav from "../components/profileNav.component";
import Spacer from "../../../components/spacer/spacer.component";
const ProfileData = [
  {
    title: "Manage Account",
    IconName: "account-circle-outline",
    IconFamily: MaterialCommunityIcons,
  },
  {
    title: "Transaction History",
    IconName: "history",
    IconFamily: MaterialCommunityIcons,
  },
  {
    title: "Beneficiaries",
    IconName: "md-people-outline",
    IconFamily: Ionicons,
  },
  {
    title: "Reports",
    IconName: "files-o",
    IconFamily: FontAwesome,
  },
  {
    title: "Contact Us",
    IconName: "phone",
    IconFamily: SimpleLineIcons,
  },
  {
    title: "FAQs",
    IconName: "head-question-outline",
    IconFamily: MaterialCommunityIcons,
  },
];

const HomeSafeAreaView = styled.View`
  flex: 1;
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
  /* margin-top: 0; */
  padding-top: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const ProfileScreen = () => {
  return (
    <HomeSafeAreaView>
      <ProfileTab>
        <Text
          variant="salutationcaption"
          style={{ color: colors.text.primary, fontSize: 25, fontWeight: 100 }}
        >
          Rob Skiba
        </Text>

        <StatusBadge active size={20}>
          Active
        </StatusBadge>
      </ProfileTab>
      <Spacer size="large" />
      {ProfileData.map(({ title, IconName, IconFamily }) => (
        <React.Fragment key={title}>
          <ProfileNav
            title={title}
            IconName={IconName}
            IconFamily={IconFamily}
          />
          <Spacer size="large" />
        </React.Fragment>
      ))}
      <Image
        style={{ height: 35, width: 100, alignSelf: "center", marginTop: -10 }}
        source={require("../../../../assets/icon.png")}
      />
      <Spacer size="small" />
      <Text variant="hint" style={{ alignSelf: "center", fontSize: 10 }}>
        Version 2.0.1
      </Text>
      <Spacer size="large" />
      <ProfileNav
        title="LogOut"
        IconName="logout"
        IconFamily={SimpleLineIcons}
        red
      />
    </HomeSafeAreaView>
  );
};

export default ProfileScreen;
