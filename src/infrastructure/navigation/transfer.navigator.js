import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import TransferScreen from "../../features/Transfers/screens/transfer.screens";
import BeneficiaryScreen from "../../features/Transfers/screens/beneficiary.screens";

import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

const Stack = createStackNavigator();

const TransferNavigator = () => {
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
        <Stack.Screen name="Send Money" component={TransferScreen} />
        <Stack.Screen
          name="Beneficiary Details"
          component={BeneficiaryScreen}
        />
      </Stack.Navigator>
    </View>
  );
};

export default TransferNavigator;
