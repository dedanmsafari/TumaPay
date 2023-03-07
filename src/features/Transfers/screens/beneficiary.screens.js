import React from "react";
import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components";
import TextInput from "../../Account/components/textInput.component";
import Spacer from "../../../components/spacer/spacer.component";
import { ContainedButton } from "./transfer.styles";
import Text from "../../../components/text/text.component";

const HomeSafeAreaView = styled.View`
  flex: 1;
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
  /* margin-top: 0; */
  /* padding-top: ${({ theme }) => theme.space[4]}; */
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

let Mobile = true;
const BeneficiaryScreen = () => {
  return (
    <HomeSafeAreaView>
      <Spacer size="medium" />
      <TextInput label="Name" />
      <Spacer size="small" />
      <TextInput label="Email" />
      <Spacer size="small" />
      <TextInput label="Purpose" />
      <Spacer size="small" />
      {Mobile ? (
        <>
          <TextInput label="Recepient's Phone" />
          <Spacer size="large" />
        </>
      ) : (
        <>
          <Spacer size="small" />
          <TextInput label="Select Bank" />
          <Spacer size="small" />

          <TextInput label="Bank Account" />
          <Spacer size="large" />
        </>
      )}
      <ContainedButton activeOpacity={0.5}>
        <Text variant="button">Send</Text>
      </ContainedButton>
    </HomeSafeAreaView>
  );
};

export default BeneficiaryScreen;
