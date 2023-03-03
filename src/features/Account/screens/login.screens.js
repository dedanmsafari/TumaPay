import React from "react";
import { TouchableOpacity, View } from "react-native";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";
import { colors } from "../../../infrastructure/theme/colors";
import {
  LoginContainer,
  ContainedButton,
  TextContainer,
} from "./account.styles";
import TextInput from "../components/textInput.component";
import BackArrow from "../components/backArrow.component";
import Spacer from "../../../components/spacer/spacer.component";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.ui.quaternary }}>
      <StyledSafeAreaView>
        <LoginContainer>
          <BackArrow
            title="Welcome Back!"
            caption="Enter your email address and password to login to your account."
          />
          <Spacer size="medium" />

          <TextInput label="Email address" keyboardType="email-address" />
          <TextInput label="Password" type="password" secureTextEntry />
          <Spacer size="large" />
          <ContainedButton activeOpacity={0.5}>
            <Text variant="button">Login</Text>
          </ContainedButton>
        </LoginContainer>
        <TextContainer>
          <Text variant="hint">Don't Have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text variant="button" inverted>
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </TextContainer>
      </StyledSafeAreaView>
    </View>
  );
};

export default LoginScreen;
