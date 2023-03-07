import React from "react";
import { View, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import EmptyWallet from "../components/emptyWallet.component";

const HomeSafeAreaView = styled.View`
  flex: 1;
  padding-left: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
  /* margin-top: 0; */
  padding-top: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const WalletScreen = () => {
  return (
    <HomeSafeAreaView>
      <Image
        style={{ height: 55, width: 150 }}
        source={require("../../../../assets/icon.png")}
      />
      <EmptyWallet />
    </HomeSafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default WalletScreen;
