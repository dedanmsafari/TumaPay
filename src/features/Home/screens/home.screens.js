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
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { StyledSafeAreaView } from "../../../utils/safeArea.util.component";

const HomeSafeAreaView = styled(StyledSafeAreaView)`
  margin-left: ${({ theme }) => theme.space[3]};
  margin-right: ${({ theme }) => theme.space[2]};
  padding-top: ${({ theme }) => theme.space[4]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HomeSafeAreaView>
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
          <IconContainer
            activeOpacity={0.5}
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <MaterialCommunityIcons
              name="account-circle"
              size={50}
              color={colors.brand.primary}
            />
          </IconContainer>
        </ProfileTab>
        <Spacer size="medium" />

        <HeroBlock navigation={navigation} />
        <Spacer size="medium">
          <Text variant="label">Recent Transactions</Text>
        </Spacer>
        <Spacer size="medium" />
        {/* <EmptyTransaction /> */}
        <TransactionElement />
        <TransactionElement />
        <TransactionElement />
      </HomeSafeAreaView>
    </View>
  );
};

export default HomeScreen;
