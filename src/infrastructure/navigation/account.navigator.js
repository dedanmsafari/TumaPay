import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import AccountScreen from "../../features/Account/screens/account.screens";
import LoginScreen from "../../features/Account/screens/login.screens";
// import RegisterNavigator from "./register.navigator";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

const AccountNavigator = ({ onReady }) => {
  return (
    <NavigationContainer onReady={onReady}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Main" component={AccountScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Register" component={RegisterNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AccountNavigator;
