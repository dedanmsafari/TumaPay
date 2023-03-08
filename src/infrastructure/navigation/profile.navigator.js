import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ProfileScreen from "../../features/Profile/screens/profile.screens";

import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </View>
  );
};

export default ProfileNavigator;
