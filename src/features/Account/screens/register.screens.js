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

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.ui.quaternary }}>
      <LoginContainer>
        <BackArrow
          title="Almost Done!"
          caption="We'll use this additional information to keep your account safe."
          step="Step 2 0f 2"
        />
        <Spacer size="medium" />

        <TextInput label="Phone Number" />
        <TextInput label="Date of Birth" />
        <TextInput label="Country" />

        <Spacer size="large" />
        <ContainedButton activeOpacity={0.5}>
          <Text variant="button">Sign Up</Text>
        </ContainedButton>
        <Spacer size="large" />
        <TextContainer>
          <Text variant="small">By continuing you Agree to our</Text>
          <TouchableOpacity>
            <Text
              variant="small"
              inverted
              style={{ color: colors.brand.primary }}
            >
              {" "}
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text variant="small"> and</Text>
          <TouchableOpacity>
            <Text
              variant="small"
              inverted
              style={{ color: colors.brand.primary }}
            >
              {" "}
              Privacy Policy.
            </Text>
          </TouchableOpacity>
        </TextContainer>
      </LoginContainer>
    </View>
  );
};

export default RegisterScreen;
