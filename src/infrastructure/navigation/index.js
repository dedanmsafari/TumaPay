import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AccountNavigator from "./account.navigator";
import AppNavigator from "./app.navigator";

let loggedIn = true;

const Navigation = ({ onReady }) => {
  return (
    <NavigationContainer onReady={onReady}>
      {loggedIn ? <AppNavigator /> : <AccountNavigator />}
      {/* <AccountNavigator /> */}
    </NavigationContainer>
  );
};

export default Navigation;
