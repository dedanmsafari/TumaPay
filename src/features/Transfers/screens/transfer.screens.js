import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Text from "../../../components/text/text.component";
import Spacer from "../../../components/spacer/spacer.component";
import styled from "styled-components";
import TextInput from "../../Account/components/textInput.component";
import { ContainedButton } from "./transfer.styles";

const HomeSafeAreaView = styled.View`
  flex: 1;
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
  /* margin-top: 0; */
  padding-top: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const TransferScreen = ({ navigation }) => {
  return (
    <HomeSafeAreaView>
      <Image
        style={{ height: 55, width: 150 }}
        source={require("../../../../assets/icon.png")}
      />
      <Spacer size="large" />
      <TextInput label="You Send" />
      <Spacer size="medium" />
      <TextInput label="They Get" />
      <Spacer size="large" />
      <ContainedButton
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Beneficiary Details")}
      >
        <Text variant="button">Continue</Text>
      </ContainedButton>
    </HomeSafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TransferScreen;
