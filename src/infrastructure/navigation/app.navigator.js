import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "react-native-paper";
import { colors } from "../theme/colors";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import HomeNavigator from "./home.navigator";
import TransferNavigator from "./transfer.navigator";
import WalletNavigator from "./wallet.navigator";

const Tab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Home: {
    library: "Entypo",
    iconName: "home",
  },
  Transfer: {
    library: "FontAwesome5",
    iconName: "telegram-plane",
  },
  Wallet: {
    library: "Ionicons",
    iconName: "wallet",
  },
};
const createScreenOptions = ({ route }) => {
  const tabConfig = TAB_ICON[route.name];
  if (!tabConfig) return null;
  const Icon =
    tabConfig.library === "Ionicons"
      ? Ionicons
      : tabConfig.library === "FontAwesome5"
      ? FontAwesome5
      : Entypo;

  return {
    tabBarIcon: ({ color, size = 24 }) => (
      <Icon name={tabConfig.iconName} size={size} color={color} />
    ),
  };
};

export default function AppNavigator() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transparent";
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      activeColor={colors.brand.primary}
      inactiveColor={colors.text.secondary}
      barStyle={{
        position: "relative",
        height: 72,
        backgroundColor: colors.bg.primary,
        borderTopWidth: 1,
        borderTopColor: colors.ui.tertiary,
      }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Transfer" component={TransferNavigator} />
      <Tab.Screen name="Wallet" component={WalletNavigator} />
    </Tab.Navigator>
  );
}
