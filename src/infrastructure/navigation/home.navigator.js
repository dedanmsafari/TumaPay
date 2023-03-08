import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import HomeScreen from "../../features/Home/screens/home.screens";
import ProfileNavigator from "./profile.navigator";

import { StyledSafeAreaView } from "../../utils/safeArea.util.component";
import styled from "styled-components/native";
import TransferNavigator from "./transfer.navigator";
const Stack = createStackNavigator();

const HomeSafeAreaView = styled(StyledSafeAreaView)`
  margin-left: ${({ theme }) => theme.space[3]};
  margin-right: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const HomeNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TransferScreen" component={TransferNavigator} />
        <Stack.Screen name="ProfileScreen" component={ProfileNavigator} />
      </Stack.Navigator>
    </View>
  );
};

export default HomeNavigator;
