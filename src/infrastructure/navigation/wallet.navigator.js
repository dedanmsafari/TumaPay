import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import WalletScreen from "../../features/Wallet/screens/wallet.screens";
import BeneficiaryScreen from "../../features/Transfers/screens/beneficiary.screens";

import { StyledSafeAreaView } from "../../utils/safeArea.util.component";
import styled from "styled-components/native";
import { colors } from "../theme/colors";
import { fonts, fontSizes, fontWeights } from "../theme/fonts";
const Stack = createStackNavigator();

const HomeSafeAreaView = styled(StyledSafeAreaView)`
  margin-left: ${({ theme }) => theme.space[3]};
  margin-right: ${({ theme }) => theme.space[2]};
  margin-top: 0;
  padding-top: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const WalletNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: colors.brand.primary,
          headerTitleStyle: {
            fontFamily: fonts.body,
            fontSize: 18,
            fontWeight: 700,
          },
          headerStyle: {
            height: 90, // set the height of the header
          },
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Wallet" component={WalletScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default WalletNavigator;
