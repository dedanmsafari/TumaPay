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

const UserDetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.ui.quaternary }}>
      <StyledSafeAreaView>
        <LoginContainer>
          <BackArrow
            title="Create Your Account."
            caption="Enter your email address and password to setup  your account."
          />
          <Spacer size="medium" />

          <TextInput label="Full Name" />
          <TextInput label="Email address" keyboardType="email-address" />
          <Spacer size="large" />
          <ContainedButton activeOpacity={0.5}>
            <Text variant="button">Continue</Text>
          </ContainedButton>
        </LoginContainer>
        <TextContainer>
          <Text variant="hint">Already Have an Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text variant="button" inverted>
              {" "}
              Log In
            </Text>
          </TouchableOpacity>
        </TextContainer>
      </StyledSafeAreaView>
    </View>
  );
};

export default UserDetailsScreen;
