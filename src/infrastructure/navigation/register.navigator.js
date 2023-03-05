import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { colors } from "../theme/colors";
import UserDetailsScreen from "../../features/Account/screens/userDetails.screens";
import RegisterScreen from "../../features/Account/screens/register.screens";
import { StyledSafeAreaView } from "../../utils/safeArea.util.component";

const Stack = createStackNavigator();

const RegisterNavigator = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.ui.quaternary }}>
      <StyledSafeAreaView>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
          <Stack.Screen name="UserSignUp" component={RegisterScreen} />
        </Stack.Navigator>
      </StyledSafeAreaView>
    </View>
  );
};

export default RegisterNavigator;
