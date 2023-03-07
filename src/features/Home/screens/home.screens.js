import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { ProfileTab, TextContainer, IconContainer } from "./home.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "../../../components/text/text.component";
import Spacer from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import HeroBlock from "../components/hero.component";
import EmptyTransaction from "../components/emptyTransaction.component";
import TransactionElement from "../components/transactionElement.component";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        style={{ height: 55, width: 150 }}
        source={require("../../../../assets/icon.png")}
      />
      <Spacer size="medium" />
      <ProfileTab>
        <TextContainer>
          <Text variant="salutation">Good Morning,</Text>
          <Text variant="salutationcaption">Rob Skiba</Text>
        </TextContainer>
        <IconContainer>
          <MaterialCommunityIcons
            name="account-circle"
            size={50}
            color={colors.brand.primary}
          />
        </IconContainer>
      </ProfileTab>
      <Spacer size="medium" />

      <HeroBlock />
      <Spacer size="medium">
        <Text variant="label">Recent Transactions</Text>
      </Spacer>
      <Spacer size="medium" />
      {/* <EmptyTransaction /> */}
      <TransactionElement />
      <TransactionElement />
      <TransactionElement />
    </View>
  );
};

export default HomeScreen;
